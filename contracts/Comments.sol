// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// TODO: Make the comment be tied to a specific post

contract Comments {
  struct Comment {
    string text;
    address author;
  }

  Comment[] public comments;

  function addComment(string memory _text) public {
    comments.push(Comment(_text, msg.sender));
  }

  function getComment(uint _index) public view returns (string memory, address) {
    Comment memory comment = comments[_index];
    return (comment.text, comment.author);
  }

  function getCommentsCount() public view returns (uint) {
    return comments.length;
  }
}
