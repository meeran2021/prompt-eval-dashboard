import React, { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
function QL_Passchecked({ toggleprompt }) {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [prompts, setPrompts] = useState([
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '---', domain: 'Artificial Intelligence', comments: '---------------', status: 'Processing' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '---', domain: 'Artificial Intelligence', comments: '---------------', status: 'Processing' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Rejected' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '---', domain: 'Artificial Intelligence', comments: '---------------', status: 'Processing' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '---', domain: 'Artificial Intelligence', comments: '---------------', status: 'Processing' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '---', domain: 'Artificial Intelligence', comments: '---------------', status: 'Processing' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Rejected' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '---', domain: 'Artificial Intelligence', comments: '---------------', status: 'Processing' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Rejected' },
  ]);   
  const xprompt=prompts.filter((prompt)=>prompt.status!="Processing");
//   console.log(xprompt)
  const filteredPrompts = selectedValue
    ? xprompt.filter((prompt) => prompt.status.toLowerCase() === selectedValue.toLowerCase())
    : xprompt;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processing':
        return 'bg-custom-gradient  text-black border-[#E7E437] border-2 shadow-custom-shadow';
      case 'Approved':
        return 'bg-[#00801c33] text-black border-[#3FC95F] border-2 shadow-custom-shadow ';
      case 'Rejected':
        return 'bg-[#fc331833] text-black border-[#FF4545] border-2 shadow-custom-shadow';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    

    <div className="pt-7 px-10 h-custom2 overflow-y-scroll duration-150" class ="hello" >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold  font-Manrope ">
          <button onClick={toggleprompt}>
            {" "}
            <BiLeftArrowAlt className="h-10 w-10" />
          </button>
          <h1>Past checked Prompts</h1>
        </div>

        <div className="inline-flex w-34 h-10 relative ml-3">
          <select
            value={selectedValue}
            onChange={handleChange}
            className="appearance-none w-full h-full bg-white border-2 border-gray-300 text-green-600 font-bold rounded-md text-base leading-normal pl-3 pr-10 py-2 font-Inter"
          >
            <option value="status">Status</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 17 18"
              fill="none"
            >
              <path
                d="M12.7884 6.375L8.0769 11.625L3.36536 6.375"
                stroke="#00801C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto py-3 px-4">
              <table className="min-w-full leading-normal border-separate border-spacing-y-2  ">
                <thead>
                  <tr>
                    {[
                        "Prompt #ID",
                      "Upload Date",
                      "Upload Time",
                      "Score",
                      "Prompt Domain",
                      "Comments",
                      "Status",
                      "View Prompts",
                    ].map((header) => (
                      <th
                      key={header}
                        className="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-work-sans opacity: 0.7;"
                        >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="">
                {filteredPrompts.map((prompt, index) => (
                  <tr key={index} >
                  <td className="px-4 py-2  border-s-2 border-y-2 rounded-md">{prompt.id}</td>
                  <td className="px-4 py-2 border-y-2">{prompt.date}</td>
                  <td className="px-4 py-2 border-y-2">{prompt.time}</td>
                  <td className="px-4 py-2 border-y-2">{prompt.score}</td>
                  <td className="px-4 py-2 border-y-2">{prompt.domain}</td>
                  <td className="px-4 py-2 border-y-2">{prompt.comments}</td>
                  <td className={`px-4 py-2 border-y-2  rounded-md`}>
                    <div className={`${getStatusColor(prompt.status)} flex justify-center p-1 rounded-md`}>
                    {prompt.status}
                    </div>
                    
                    </td>
                  <td className="pl-8 py-1 border-e-2 border-y-2 rounded-md">
                    <button className={prompt.status=='Processing'?" px-3":"bg-[#c5c3c380] text-black rounded-md py-1 px-3 border-2 border-black"}>View Result</button>
                  </td>
                  </tr>))}
                </tbody>
              </table>
            </div>
    </div>
                         
  );
}

export default QL_Passchecked;
