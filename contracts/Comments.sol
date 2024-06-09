// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Comments {
  struct Comment {
    string text;
    address author;
  }

  // Mapping from post ID to comments
  mapping(uint => Comment[]) public comments;

  function addComment(uint _postId, string memory _text) public {
    comments[_postId].push(Comment(_text, msg.sender));
  }

  function getComment(uint _postId, uint _index) public view returns (string memory, address) {
    Comment memory comment = comments[_postId][_index];
    return (comment.text, comment.author);
  }

  function getCommentsCount(uint _postId) public view returns (uint) {
    return comments[_postId].length;
  }
}
