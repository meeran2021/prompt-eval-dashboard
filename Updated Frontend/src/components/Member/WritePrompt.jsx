import React from 'react';
import { BsTypeBold, BsTypeItalic, BsTypeStrikethrough, BsListUl, BsListOl, BsCodeSlash, BsLink45Deg, BsClipboard } from 'react-icons/bs';
import { FaQuoteRight } from 'react-icons/fa';
import { IoMdImage } from 'react-icons/io';

const EditorToolbarButton = ({ IconComponent }) => (
  <button className="flex justify-center items-center p-2 hover:bg-gray-200 rounded text-gray-600 w-8 h-8">
    <IconComponent size={20} />
  </button>
);

const WritePrompt = ({ markdown, onMarkdownChange }) => {
  return (
    <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-between items-center px-3 py-1 border-b">
        <h1 className="text-l font-semibold">Write Prompts here:</h1>
        <select className="border p-1 rounded text-sm">
          <option>Artificial Intelligence</option>
          <option>Machine Learning</option>
          <option>Data Science</option>
        </select>
      </div>
      <div className="flex justify-between items-center px-1 py-0.5">
        <div className="flex px-0">
          <EditorToolbarButton IconComponent={BsTypeBold} />
          <EditorToolbarButton IconComponent={BsTypeItalic} />
          <EditorToolbarButton IconComponent={BsTypeStrikethrough} />
          <EditorToolbarButton IconComponent={BsListUl} />
          <EditorToolbarButton IconComponent={BsListOl} />
          <EditorToolbarButton IconComponent={FaQuoteRight} />
          <EditorToolbarButton IconComponent={BsCodeSlash} />
        </div>
        <EditorToolbarButton IconComponent={BsClipboard} />
      </div>
      <textarea
        className="flex-grow p-4 border-t border-l border-r resize-none"
        placeholder="Design a Python class called 'PerceptronSigmoid' to create a machine learning technique of Logical Regression from scratch."
        value={markdown}
        onChange={onMarkdownChange}
        style={{ minHeight: '440px' }} 
      />
    </div>
  );
};

export default WritePrompt;


