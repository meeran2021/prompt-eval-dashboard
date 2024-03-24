// src/MarkdownEditor.jsx
import React from 'react';

const MarkdownEditor = ({ onChange, value }) => {
  return (
    <textarea
      className="h-[63vh] w-full overflow-y-scroll  px-1"
      // rows="15"
      placeholder="Type some markdown..."
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default MarkdownEditor;
