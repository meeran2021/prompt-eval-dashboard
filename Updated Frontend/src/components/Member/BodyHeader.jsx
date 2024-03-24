import React from 'react';

const HeaderButtons = [
  { id: 'code-gen', text: 'Code Generation' },
  { id: 'code-understanding', text: 'Code Understanding' },
  { id: 'code-debugging', text: 'Code Debugging' },
];

const HeaderButton = ({ text }) => (
  <button className="border-2 border-transparent p-1 rounded-md shadow-md font-Manrope hover:border-black text-xs lg:text-sm lg:p-2 transition-colors">
    {text}
  </button>
);

const BodyHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white px-2 py-2 shadow-md lg:px-5 lg:py-3">
      <h1 className="text-lg font-bold font-Manrope lg:text-xl">
        Prompts Submission Editor:
      </h1>
      <div className="flex gap-1 lg:gap-2">
        {HeaderButtons.map((button) => (
          <HeaderButton key={button.id} text={button.text} />
        ))}
      </div>
    </div>
  );
};

export default BodyHeader;
