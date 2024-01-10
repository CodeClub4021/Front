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
            className="bg-yellow-300 hover:bg-yellow-400 text-black p-2 mr-2 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-md" onClick={handleEdit}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p>{comment.text}</p>
          <div className="mt-2">
            <button className="bg-slate-500 hover:bg-slate-700 text-white p-2 mr-2 rounded-md" onClick={handleEdit}>
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-md"
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
