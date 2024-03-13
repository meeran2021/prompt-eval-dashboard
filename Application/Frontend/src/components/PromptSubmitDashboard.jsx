import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import ProMD from './ProMD';
import BodyHeader from './BodyHeader';


function PromptSubmitDashboard() {
  return (
    <div className="Content">
      <BodyHeader title="Prompt Submission Editor:" />
      <ProMD />
      {/* <Header />
      <Sidebar /> */}
      {/* <Content /> */}
      
    </div>
  );
}

export default PromptSubmitDashboard;
