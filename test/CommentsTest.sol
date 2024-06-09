pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Comments.sol";

contract CommentsTest {
  Comments comments = Comments(DeployedAddresses.Comments());

  function testAddComment() public {
    comments.addComment(0, "First comment");
    comments.addComment(0, "Second comment");

    (string memory text, address author) = comments.getComment(0, 0);
    Assert.equal(text, "First comment", "First comment should be 'First comment'");
    Assert.equal(author, address(this), "Author of the first comment should be the test contract");

    (text, author) = comments.getComment(0, 1);
    Assert.equal(text, "Second comment", "Second comment should be 'Second comment'");
    Assert.equal(author, address(this), "Author of the second comment should be the test contract");
  }

  function testGetAllComments() public {
    comments.addComment(1, "First comment");
    comments.addComment(1, "Second comment");

    (string[] memory texts, address[] memory authors) = comments.getAllComments(1);
    Assert.equal(texts[0], "First comment", "First comment should be 'First comment'");
    Assert.equal(authors[0], address(this), "Author of the first comment should be the test contract");

    Assert.equal(texts[1], "Second comment", "Second comment should be 'Second comment'");
    Assert.equal(authors[1], address(this), "Author of the second comment should be the test contract");
  }

  function testGetCommentsCount() public {
    comments.addComment(2, "First comment");
    comments.addComment(2, "Second comment");

    uint count = comments.getCommentsCount(2);
    Assert.equal(count, 2, "There should be 2 comments for post ID 2");
  }
}