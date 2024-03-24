// src/App.js or src/App.jsx
import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="p-1">
      <div className="w-full  grid grid-cols-2 max-md:grid-cols-1 gap-4">
        <MarkdownEditor onChange={handleMarkdownChange} value={markdown} />
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
