import { React, useState } from "react";
import HeaderBar from "./HeaderBar";
// import { AiFillAccountBook } from "../../react-icons/ai";
function All_prompts() {
  const [selectedValue, setSelectedValue] = useState("");
  const [pageNo, setPageNo] = useState(30);
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
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Rejected' },
  ]);
  const filteredPrompts = selectedValue
    ? prompts.filter((prompt) => prompt.status.toLowerCase() === selectedValue.toLowerCase())
    : prompts;

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
    <div className="bg-[#f8f8f8]">
      <nav className="fixed">
        <HeaderBar />
      </nav>

      <div className="flex min-h-screen">
        <aside className="sticky top-20 h-[calc(100vh-theme(spacing.20))] w-40 overflow-y-auto bg-white border">
          <div className="flex items-center gap-y-5 mt-6 flex-col">
            <button className="p-4 flex items-center gap-x-2">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
        <mask id="mask0_132_1171" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
          <rect width="32" height="32" fill="white"/>
        </mask>
        <g mask="url(#mask0_132_1171)">
          <path d="M13.6704 7.84579L14.0416 13.3657L14.2258 16.1401C14.2278 16.4255 14.2725 16.7089 14.3588 16.9813C14.5813 17.5101 15.1168 17.8461 15.6993 17.8227L24.5756 17.242C24.96 17.2357 25.3312 17.3795 25.6074 17.6417C25.8377 17.8603 25.9864 18.1461 26.0333 18.4536L26.049 18.6403C25.6817 23.7265 21.9461 27.9689 16.8704 29.064C11.7946 30.1591 6.58965 27.8457 4.08145 23.3799C3.35836 22.0824 2.90671 20.6564 2.75301 19.1853C2.68881 18.7499 2.66055 18.31 2.66848 17.87C2.66055 12.417 6.5438 7.70262 11.9796 6.5661C12.6339 6.46422 13.2752 6.81057 13.5376 7.40738C13.6054 7.54559 13.6502 7.69362 13.6704 7.84579Z" fill="#686868"/>
          <path opacity="0.4" d="M29.3335 13.083L29.3242 13.1264L29.2973 13.1896L29.301 13.3631C29.2871 13.5929 29.1983 13.8139 29.0455 13.9926C28.8862 14.1786 28.6686 14.3053 28.429 14.3545L28.2829 14.3745L18.0418 15.0381C17.7011 15.0717 17.3619 14.9618 17.1087 14.7359C16.8975 14.5475 16.7626 14.2934 16.7245 14.0195L16.0371 3.79334C16.0251 3.75877 16.0251 3.72129 16.0371 3.6867C16.0465 3.40482 16.1706 3.13838 16.3817 2.9469C16.5926 2.75542 16.8731 2.65486 17.1602 2.66769C23.2401 2.82237 28.3499 7.19431 29.3335 13.083Z" fill="#686868"/>
        </g>
      </svg>
              Dashboard
            </button>
            <button className="bg-[#00801C] flex items-center px-1 gap-x-1 py-2 rounded-md text-white">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
<path d="M4.5 16H7.16667V28H4.5V16ZM25.8333 10.6667H28.5V28H25.8333V10.6667ZM15.1667 2.66666H17.8333V28H15.1667V2.66666Z" fill="white"/>
</svg>              Prompts History
            </button>
          </div>
        </aside>
        <div className="flex-1 px-3 py-1.5 mt-20">
          <main className="bg-white border h-[calc(100vh-theme(spacing.20))] rounded-lg p-5 flex flex-col">
            <p className="text-2xl font-bold pl-4 mb-4 font-Manrope">
              Pass Uploaded Prompts History:-
            </p>
            <div className="inline-flex w-36 h-12 relative ml-3">
              <select
                value={selectedValue}
                onChange={handleChange}
                className="appearance-none w-full h-full bg-white border-2 border-gray-300 text-green-600 font-bold rounded-md text-base leading-normal pl-3 pr-10 py-2 font-Inter"
              >
                <option value="status">Status</option>
                <option value="processing">Processing</option>
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

            <div className="overflow-x-auto py-3 mt-2 px-4">
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
                <tbody >
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
            {/* <div className=" flex items-center justify-center h-10 fixed  bottom-0 left-0 right-0 pb-7 pl-4">
              <p className="font-work-sans text-gray-800 font-normal text-lg leading-normal pr-1">
                Page
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-6"
                viewBox="0 0 17 24"
                fill="none"
              >
                <path
                  d="M16.1709 21.1018L16.1709 2.91932C16.1709 0.889107 13.7896 -0.206161 12.2481 1.11508L1.64163 10.2063C0.535186 11.1547 0.535183 12.8664 1.64162 13.8148L12.2481 22.9061C13.7895 24.2273 16.1709 23.1321 16.1709 21.1018Z"
                  fill="black"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-6"
                viewBox="0 0 52 38"
                fill="none"
              >
                <circle cx="25.9446" cy="19.0105" r="19.0105" fill="#00801C" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-5 text-black"
                viewBox="0 0 17 24"
                fill="none"
              >
                <path
                  d="M0.718262 2.91928L0.718262 21.1018C0.718262 23.132 3.09961 24.2273 4.64106 22.906L15.2475 13.8148C16.354 12.8664 16.354 11.1547 15.2475 10.2063L4.64106 1.11504C3.09961 -0.206202 0.718262 0.889061 0.718262 2.91928Z"
                  fill="black"
                />
              </svg>

              <p className="font-work-sans text-gray-800 font-normal text-lg leading-normal pl-1">
                {pageNo}
              </p>
            </div> */}
          </main>
        </div>
      </div>
    </div>
  );
}
export default All_prompts;
