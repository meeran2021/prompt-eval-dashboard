import React, { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import { ImBold } from "react-icons/im";
import MarkdownPreview from "./MarkdownPreview";
import { LuCopy } from "react-icons/lu";
import { GoItalic } from "react-icons/go";
import { FaStrikethrough } from "react-icons/fa";
import Markdown from "./Markdown";
import WritePrompt from "./WritePrompt";
import BodyHeader from "./BodyHeader";
import PromptsEditor from "./PromptsEditor";
function Member_dashboard() {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (event) => {
    setMarkdown(String(event.target.value));

  };
  return (
    <div className="  h-full w-full ">
      <BodyHeader />
      <PromptsEditor markdown={markdown} onMarkdownChange={handleMarkdownChange} />
      
      <button className="text-white font-Manrope border py-1.5 mx-4 my-1.5 shadow-md  bg-[#1FAA4A] rounded-md px-4">
        Submit for Checking
      </button>
      
    </div>
  );
}

export default Member_dashboard;

