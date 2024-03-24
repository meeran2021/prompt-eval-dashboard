import {React,useState} from "react";

function Admin_Dashboard() {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [prompts, setPrompts] = useState([
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
   
      Score:"2.5",
      Status:"Member",
      Task:"Assign as QC",
    },
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
      Score:"2.5",
      Status:"Quality Checker",
      Task:"Remove",
    },
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
      Score:"2.5",
      Status:"Quality Checker",
      Task:"Remove",
    },
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
      Score:"2.5",
      Status:"Quality Checker",
      Task:"Remove",
    },
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
   
      Score:"2.5",
      Status:"Member",
      Task:"Assign as QC",
    },
      {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
      Score:"2.5",
      Status:"Quality Checker",
      Task:"Remove",
    },
    
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
   
      Score:"2.5",
      Status:"Member",
      Task:"Assign as QC",
    },
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
   
      Score:"2.5",
      Status:"Member",
      Task:"Assign as QC",
    },
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
   
      Score:"2.5",
      Status:"Member",
      Task:"Assign as QC",
    },
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
   
      Score:"2.5",
      Status:"Member",
      Task:"Assign as QC",
    },
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
   
      Score:"2.5",
      Status:"Member",
      Task:"Assign as QC",
    },
    {
      Name:"Gunpreet Walia",
      Mail_id:"walia@greenridertech.com",
      ID:"#1234",
      TL:"Japish Singh",
   
      Score:"2.5",
      Status:"Member",
      Task:"Assign as QC",
    },
    
    
  ]);
  const filteredPrompts = selectedValue && selectedValue.toLowerCase() !== 'status'
    ? prompts.filter(
        (prompt) => prompt.Status.toLowerCase() === selectedValue.toLowerCase()
      )
    : prompts;
 
    const getStatusColor = (status) => {
      switch (status) {
        case 'Member':
          return 'bg-custom-gradient  text-black border-[#E7E437] border-2 shadow-custom-shadow';
        case 'Quality Checker':
          return 'bg-[#00801c33] text-black border-[#3FC95F] border-2 shadow-custom-shadow ';
        default:
          return 'bg-gray-500 text-white';
      }
    };
  return (
    <div className="bg-white h-custom2 my-[1rem] mx-2 border rounded-lg">
      <div className=" flex justify-between items-center p-4"> 
        <h1 className="text-2xl font-bold   font-Manrope">All Member</h1>
        <div className="inline-flex w-36 h-12 relative ml-3">
              <select
                value={selectedValue}
                onChange={handleChange}
                className="appearance-none w-full h-full bg-white border-2 border-gray-300 text-green-600 font-bold rounded-md text-base leading-normal pl-3 pr-10 py-2 font-Inter"
              >
                <option value="status">Status</option>
                <option value="Member">Member</option>
                <option value="Quality checker">Quality checker</option>
         
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
      <div className=" overflow-y-scroll py-2 mt-2  px-4 h-[74vh] duration-300">
          <table className="min-w-full leading-normal border-separate border-spacing-y-2  ">
            <thead>
              <tr>
                {[
                  "Name",
                  "Member Mail",
                  "Member ID",
                  "Team Lead",
                 
                  "Average Score",
                  "Status",
                  "Task",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-work-sans opacity: 0.7 ;"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {filteredPrompts.map((prompt, index) => (
                <tr key={index}>
                  <td className="px-4 py-2  border-s-2 border-y-2 rounded-md">
                    {prompt.Name}
                  </td>
                  <td className="px-4 py-2 border-y-2">{prompt.Mail_id}</td>
                  <td className="px-4 py-2 border-y-2 text-center">{prompt.ID}</td>
                  <td className="px-4 py-2 border-y-2">{prompt.TL}</td>
                
                  <td className="px-4 py-2 border-y-2 item text-center">{prompt.Score}</td>
                  <td className={`px-4 py-2 border-y-2  rounded-md`}>
                    <div
                      className={`${getStatusColor(
                        prompt.Status
                      )} flex justify-center p-1 rounded-md`}
                    >
                      {prompt.Status}
                    </div>
                  </td>
                  <td className="pl-8 py-1 border-e-2 border-y-2 rounded-md text-center">
                    <button
                      className={
                        prompt.Status == "Quality Checker"
                          ? " px-3"
                          : "bg-[#c5c3c380] text-black rounded-md py-1 px-3 border-2 border-black"
                      }
                    >
                      {prompt.Task}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div> 
  );
}

export default Admin_Dashboard;
