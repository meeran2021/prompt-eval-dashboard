// import React from 'react';
// import { marked } from 'marked'; 
// import DOMPurify from 'dompurify';
// import { BsClipboard } from 'react-icons/bs'; 

// const MarkdownPreview1 = ({ markdownText }) => {
//   const createMarkup = () => {
//     if (typeof markdownText !== 'string') {
//       console.error('Markdown text must be a string', markdownText);
//       return { __html: 'Error: Markdown text must be a string.' };
//     }

//     const sanitizedHtml = DOMPurify.sanitize(marked(markdownText));
//     return { __html: sanitizedHtml };
//   };

//   return (
//     <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="flex justify-between items-center px-3 py-1 border-b">
//         <h1 className="text-l font-semibold">Preview here:</h1>
//         <button className="border p-1 rounded bg-gray-200 hover:bg-gray-300">
//           <BsClipboard size={20} />
//         </button>
//       </div>
//       <div
//         className="flex-grow p-4 overflow-auto"
//         style={{ minHeight: '440px' }}
//         dangerouslySetInnerHTML={createMarkup()}
//       />
//     </div>
//   );
// };

// export default MarkdownPreview1;


// import React from 'react';
// import { marked } from 'marked';
// import DOMPurify from 'dompurify';
// import { BsClipboard } from 'react-icons/bs';

// const MarkdownPreview1 = ({ markdownText }) => {
//   // Optional: Configure marked if needed
//   marked.setOptions({
//     breaks: true, // Convert line breaks to <br>
//     gfm: true, // Enable GitHub Flavored Markdown
//   });

//   const createMarkup = () => {
//     if (typeof markdownText !== 'string') {
//       console.error('Markdown text must be a string', markdownText);
//       return { __html: 'Error: Markdown text must be a string.' };
//     }

//     const rawMarkdown = marked(markdownText);
//     const sanitizedHtml = DOMPurify.sanitize(rawMarkdown);
//     return { __html: sanitizedHtml };
//   };

//   return (
//     <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="flex justify-between items-center px-3 py-1 border-b">
//         <h1 className="text-l font-semibold">Preview here:</h1>
//         <button className="border p-1 rounded bg-gray-200 hover:bg-gray-300">
//           <BsClipboard size={20} />
//         </button>
//       </div>
//       <div
//         className="flex-grow p-4 overflow-auto"
//         style={{ minHeight: '440px' }}
//         dangerouslySetInnerHTML={createMarkup()}
//       />
//     </div>
//   );
// };

// export default MarkdownPreview1;




import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BsClipboard } from 'react-icons/bs';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'; // Use Light or default export
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const MarkdownPreview1 = ({ markdownText }) => {
  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter style={docco} language={language} children={value} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-between items-center px-3 py-1 border-b">
        <h1 className="text-l font-semibold">Preview here:</h1>
        <button className="border p-1 rounded bg-gray-200 hover:bg-gray-300">
          <BsClipboard size={20} />
        </button>
      </div>
      <div className="flex-grow p-4 overflow-auto" style={{ minHeight: '440px' }}>
        <ReactMarkdown components={renderers}>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreview1;
