import React from 'react';
import WritePrompt from './WritePrompt';
import MarkdownPreview from './MarkdownPreview';

const PromptsEditor = ({ markdown, onMarkdownChange }) => {
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="md:flex md:space-x-4">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <WritePrompt markdown={markdown} onMarkdownChange={onMarkdownChange} />
        </div>
        <div className="md:w-1/2">
          <MarkdownPreview markdownText={markdown} />
        </div>
      </div>
    </div>
  );
};

export default PromptsEditor;
