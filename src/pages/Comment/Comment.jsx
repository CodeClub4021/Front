import React, { useState } from 'react';

const Comment = ({ comment, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.text);

  const handleEdit = () => {
    if (isEditing) {
      // If already editing, cancel the edit
      setEditedComment(comment.text);
    }
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onEdit({ ...comment, text: editedComment });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(comment.id);
  };

  return (
    <div className="border p-4 my-4">
      {isEditing ? (
        <div>
          <textarea
            className="border p-2 w-full mb-2"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button className="bg-gray-500 text-white p-2" onClick={handleEdit}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p>{comment.text}</p>
          <div className="mt-2">
            <button className="bg-blue-500 text-white p-2 mr-2" onClick={handleEdit}>
              Edit
            </button>
            <button
              className="bg-red-500 text-white p-2"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
