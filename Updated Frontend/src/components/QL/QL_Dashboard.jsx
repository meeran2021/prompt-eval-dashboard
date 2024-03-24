import React, { useState } from "react";

function QL_Dashboard({toggleprompt}) {
  const [prompts, setPrompts] = useState([
    {
      id: "#1234",
      date: "21-03-2022",
      time: "3:05 PM",
      score: "---",
      domain: "Artificial Intelligence",
      comments: "---------------",
      status: "Processing",
    },
    {
      id: "#1234",
      date: "21-03-2022",
      time: "3:05 PM",
      score: "2.4",
      domain: "Artificial Intelligence",
      comments: "Need Improvement",
      status: "Approved",
    },
    {
      id: "#1234",
      date: "21-03-2022",
      time: "3:05 PM",
      score: "---",
      domain: "Artificial Intelligence",
      comments: "---------------",
      status: "Processing",
    },
    {
      id: "#1234",
      date: "21-03-2022",
      time: "3:05 PM",
      score: "2.4",
      domain: "Artificial Intelligence",
      comments: "Need Improvement",
      status: "Rejected",
    },
    {
      id: "#1234",
      date: "21-03-2022",
      time: "3:05 PM",
      score: "---",
      domain: "Artificial Intelligence",
      comments: "---------------",
      status: "Processing",
    },
    {
      id: "#1234",
      date: "21-03-2022",
      time: "3:05 PM",
      score: "2.4",
      domain: "Artificial Intelligence",
      comments: "Need Improvement",
      status: "Processing",
    },
    {
      id: "#1234",
      date: "21-03-2022",
      time: "3:05 PM",
      score: "2.4",
      domain: "Artificial Intelligence",
      comments: "Need Improvement",
      status: "Processing",
    },
    {
      id: "#1234",
      date: "21-03-2022",
      time: "3:05 PM",
      score: "2.4",
      domain: "Artificial Intelligence",
      comments: "Need Improvement",
      status: "Approved",
    },
    {
      id: "#1234",
      date: "21-03-2022",
      time: "3:05 PM",
      score: "2.4",
      domain: "Artificial Intelligence",
      comments: "Need Improvement",
      status: "Rejected",
    },
  ]);

  
  
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
    <div className="pt-7 px-10 h-[80vh] overflow-y-scroll ">
      <div>
        <h1 className="text-2xl font-bold pl-4  font-Manrope">
          New Assigned Prompts:
        </h1>
        <div className="overflow-x-auto py-3  px-4">
          <table className="min-w-full leading-normal border-separate border-spacing-y-2">
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
            <tbody className="h-[20vh] overflow-y-auto">
              {prompts
                .filter((prompt) => prompt.status === "Processing")
                .map((prompt, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border-s-2 border-y-2 rounded-md">
                      {prompt.id}
                    </td>
                    <td className="px-4 py-2 border-y-2">{prompt.date}</td>
                    <td className="px-4 py-2 border-y-2">{prompt.time}</td>
                    <td className="px-4 py-2 border-y-2">{prompt.score}</td>
                    <td className="px-4 py-2 border-y-2">{prompt.domain}</td>
                    <td className="px-4 py-2 border-y-2">{prompt.comments}</td>
                    <td className="px-4 py-2 border-y-2 rounded-md">
                      <div className="bg-custom-gradient  text-black border-[#E7E437] border-2 shadow-custom-shadow flex justify-center p-1 rounded-md">
                        {prompt.status}
                      </div>
                    </td>
                    <td className="pl-8 py-1 border-e-2 border-y-2 rounded-md">
                      <button className="text-white bg-black px-3 border-2 border-[#000] py-1 rounded-md" >
                        Rate Now
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold pl-4  font-Manrope">
            Past Checked Prompts:
          </h1>
          <button className="text-l font-bold pl-4  font-Manrope" onClick={toggleprompt}>{`See All->`}</button>
        </div>
        <div className="overflow-x-auto py-3 mt-2 px-4 overflow-auto">
          <table className="min-w-full leading-normal border-separate border-spacing-y-2">
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
            <tbody className="h-2" >
                {prompts.filter((prompt) => prompt.status != "Processing").map((prompt, index) => (
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
    </div>
  );
}

export default QL_Dashboard;
