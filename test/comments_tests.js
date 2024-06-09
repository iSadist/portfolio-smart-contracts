const Comments = artifacts.require("Comments");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CommentsTests", function ( accounts ) {

  it("should add a comment", async () => {
    const instance = await Comments.new();
    await instance.addComment(0, "Hello, World!", { from: accounts[0] });
    const comment = await instance.getComment(0, 0);
    assert.equal(comment[0], "Hello, World!");
    assert.equal(comment[1], accounts[0]);
  });

  it("should add a comment on one post without affecting another post", async () => {
    const instance = await Comments.new();
    await instance.addComment(0, "Hello, World!", { from: accounts[0] });
    await instance.addComment(1, "Hello, Universe!", { from: accounts[0] });
    const comment1 = await instance.getComment(0, 0);
    const comment2 = await instance.getComment(1, 0);
    assert.equal(comment1[0], "Hello, World!");
    assert.equal(comment2[0], "Hello, Universe!");
  });

  it('should cost some ethereum to add a comment', async () => {
    const instance = await Comments.new();

    // Get the balance of the first account
    const balanceBefore = await web3.eth.getBalance(accounts[0]);

    // Add a comment
    await instance.addComment(111, "Hello, World!", { from: accounts[0] });

    // Get the balance of the first account after adding a comment
    const balanceAfter = await web3.eth.getBalance(accounts[0]);

    assert(balanceBefore > balanceAfter);
  });

  it('should not cost any ethereum to get a comment', async () => {
    const instance = await Comments.new();
    await instance.addComment(1111, "Hello, World!", { from: accounts[0] });
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    await instance.getComment(1111, 0);
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    assert(balanceBefore == balanceAfter);
  });

  it('should get the comment by index', async () => {
    const instance = await Comments.new();
    await instance.addComment(99, "Hello, World!", { from: accounts[0] });
    await instance.addComment(99, "Hello, Universe!", { from: accounts[0] });
    const comment = await instance.getComment(99, 1);
    assert.equal(comment[0], "Hello, Universe!");
  });

  it('should get the number of comments', async () => {
    const instance = await Comments.new();
    await instance.addComment(404, "Awesome post", { from: accounts[0] });
    await instance.addComment(404, "Love the content!", { from: accounts[0] });
    await instance.addComment(404, "Wow, such wow!", { from: accounts[0] });
    const numComments = await instance.getCommentsCount(404);
    assert.equal(numComments, 3);
  });
});
