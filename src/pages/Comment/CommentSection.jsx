import React, { useState } from 'react';
import Comment from './Comment';

const CommentSection = () => {
  const [comments, setComments] = useState([
    { id: 1, text: 'Hello from code club!' },
    { id: 2, text: 'Hope you have a nice time' },
    // Add more initial comments as needed
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const addComment = () => {
    if (newCommentText.trim() !== '') {
      const newComment = { id: comments.length + 1, text: newCommentText };
      setComments([...comments, newComment]);
      setNewCommentText(''); // Clear the textarea after adding the comment
    }
  };

  const deleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const editComment = (editedComment) => {
    const updatedComments = comments.map((comment) =>
      comment.id === editedComment.id ? editedComment : comment
    );
    setComments(updatedComments);
  };

  return (
    <div>
      <div className="my-4">
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Add a comment..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2"
          onClick={addComment}
        >
          Send
        </button>
      </div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={deleteComment}
          onEdit={editComment}
        />
      ))}
    </div>
  );
};

export default CommentSection;
