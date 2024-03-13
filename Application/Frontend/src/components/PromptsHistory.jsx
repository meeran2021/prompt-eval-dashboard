import React, { useState } from 'react';

const PromptsHistory = () => {
  const [prompts, setPrompts] = useState([
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '---', domain: 'Artificial Intelligence', comments: '---------------', status: 'Processing' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '---', domain: 'Artificial Intelligence', comments: '---------------', status: 'Processing' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Rejected' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '---', domain: 'Artificial Intelligence', comments: '---------------', status: 'Processing' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
    { id: '#1234', date: '21-03-2022', time: '3:05 PM', score: '2.4', domain: 'Artificial Intelligence', comments: 'Need Improvement', status: 'Approved' },
  ]);
  const [statusFilter, setStatusFilter] = useState('');

  const filteredPrompts = statusFilter
    ? prompts.filter((prompt) => prompt.status.toLowerCase() === statusFilter.toLowerCase())
    : prompts;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processing':
        return 'bg-yellow-500 text-white';
      case 'Approved':
        return 'bg-green-500 text-white';
      case 'Rejected':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Pass Uploaded Prompts History:</h2>
        <div className="flex items-center space-x-4">
          <span className="bg-blue-500 text-white rounded-md py-1 px-2">4 Prompts Checked</span>
          <span className="bg-green-500 text-white rounded-md py-1 px-2">Assigned as Lead</span>
          <div className="relative">
            <input
              type="email"
              placeholder="member@greenridertech.com"
              className="bg-gray-200 rounded-md py-2 px-4 pr-10"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
          </div>
          <button className="bg-red-500 text-white rounded-md py-2 px-4">Logout</button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="status" className="mr-2 font-semibold">
            Status:
          </label>
          <select
            id="status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-md py-1 px-2"
          >
            <option value="">All</option>
            <option value="Processing">Processing</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div>
          <button className="bg-green-600 text-white rounded-md py-1 px-2 mr-2">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1">New Prompt</span>
          </button>
          <button className="bg-blue-500 text-white rounded-md py-1 px-2">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1">Notifications</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Prompt #ID</th>
              <th className="px-4 py-2">Upload Date</th>
              <th className="px-4 py-2">Upload Time</th>
              <th className="px-4 py-2">Score</th>
              <th className="px-4 py-2">Prompt Domain</th>
              <th className="px-4 py-2">Comments</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">View Prompts</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrompts.map((prompt, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="px-4 py-2 border">{prompt.id}</td>
                <td className="px-4 py-2 border">{prompt.date}</td>
                <td className="px-4 py-2 border">{prompt.time}</td>
                <td className="px-4 py-2 border">{prompt.score}</td>
                <td className="px-4 py-2 border">{prompt.domain}</td>
                <td className="px-4 py-2 border">{prompt.comments}</td>
                <td className={`px-4 py-2 border ${getStatusColor(prompt.status)} rounded-md`}>{prompt.status}</td>
                <td className="px-4 py-2 border">
                  <button className="bg-blue-500 text-white rounded-md py-1 px-2">View Result</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div>
          Page <span className="mx-2 font-semibold">1</span> <span className="mx-2 font-semibold">30</span>
        </div>
      </div>
    </div>
  );
};

export default PromptsHistory;