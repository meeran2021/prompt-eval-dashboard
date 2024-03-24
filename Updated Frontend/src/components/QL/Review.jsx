import React, { useState } from 'react';
import { BsClipboard } from 'react-icons/bs';
import MarkdownPreview1 from '../Member/MarkdownPreview';
import Header from '../Header';
import Sidebar from '../Sidebar';

// Replace this with the actual initial markdown content
const initialMarkdownContent = `
# Markdown Title

Some initial **markdown** content.
`;

const RatingSlider = ({ label, value, onChange }) => (
  <div className="flex items-center space-x-2">
    <label className="w-1/3 text-sm font-medium text-gray-700">{label}</label>
    <input
      type="range"
      min="1"
      max="5"
      value={value}
      onChange={onChange}
      className="range range-primary"
      step="1"
    />
    <span className="text-sm">{value}</span>
  </div>
);

const Review = () => {
  const [markdown, setMarkdown] = useState(initialMarkdownContent);
  const [specificity, setSpecificity] = useState(3);
  const [detailed, setDetailed] = useState(5);
  const [relevant, setRelevant] = useState(5);
  const [presentation, setPresentation] = useState(5);

  // Function to handle the form submission
  const handleRatingSubmit = (event) => {
    event.preventDefault();
    const ratings = { specificity, detailed, relevant, presentation };
    console.log(ratings);
    // Further processing...
  };

  return (
    <div>
      <header className="h-[10vh] border-solid border-2 flex border-[#E6E6E6] ">
        <Header email={email} />
      </header>
      <main className="h-[90vh] flex">
        <div >
          <Sidebar indextrue={indexTrue} indexfalse={indexFalse} />
        </div>
        <div className="bg-[#f8f8f8] h-full w-full">
          {/* {index ? <Member_dashboard /> : <Member_all_prompts />} */}

          {/* <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 p-4 border rounded shadow-sm">
              <MarkdownPreview1 markdownText={markdown} />
            </div>
            <div className="p-4 border rounded shadow-sm">
              <form onSubmit={handleRatingSubmit}>
                <h2 className="text-lg font-semibold mb-4">Rate the prompt:</h2>
                <RatingSlider label="Specificity" value={specificity} onChange={(e) => setSpecificity(e.target.value)} />
                <RatingSlider label="Detailed" value={detailed} onChange={(e) => setDetailed(e.target.value)} />
                <RatingSlider label="Relevant" value={relevant} onChange={(e) => setRelevant(e.target.value)} />
                <RatingSlider
                  label="Presentation and Formatting"
                  value={presentation}
                  onChange={(e) => setPresentation(e.target.value)}
                />
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
                >
                  Submit Rating
                </button>
              </form>
            </div>
          </div> */}
        </div> 

      </main>
    </div>
  );
};

export default Review;
