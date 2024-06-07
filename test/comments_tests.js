const Comments = artifacts.require("Comments");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CommentsTests", function ( accounts ) {

  it("should add a comment", async () => {
    const instance = await Comments.deployed();
    await instance.addComment("Hello, World!", { from: accounts[0] });
    const comment = await instance.getComment(0);
    assert.equal(comment[0], "Hello, World!");
    assert.equal(comment[1], accounts[0]);
  });
});
