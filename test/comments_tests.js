const Comments = artifacts.require("Comments");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CommentsTests", function ( accounts ) {

  it("should add a comment", async () => {
    const instance = await Comments.new();
    await instance.addComment("Hello, World!", { from: accounts[0] });
    const comment = await instance.getComment(0);
    assert.equal(comment[0], "Hello, World!");
    assert.equal(comment[1], accounts[0]);
  });

  it('should cost some ethereum to add a comment', async () => {
    const instance = await Comments.new();

    // Get the balance of the first account
    const balanceBefore = await web3.eth.getBalance(accounts[0]);

    // Add a comment
    await instance.addComment("Hello, World!", { from: accounts[0] });

    // Get the balance of the first account after adding a comment
    const balanceAfter = await web3.eth.getBalance(accounts[0]);

    assert(balanceBefore > balanceAfter);
  });

  it('should get the number of comments', async () => {
    const instance = await Comments.new();
    await instance.addComment("Awesome post", { from: accounts[0] });
    await instance.addComment("Love the content!", { from: accounts[0] });
    await instance.addComment("Wow, such wow!", { from: accounts[0] });
    const numComments = await instance.getCommentsCount();
    assert.equal(numComments, 3);
  });
});
