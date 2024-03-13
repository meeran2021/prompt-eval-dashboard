import React, { useState } from 'react';
import BodyHeader from './BodyHeader';
import ProMD from './ProMD';
import MarkdownEditor from './MarkdownEditor';
// import {MarkdownPreview} from './MarkdownPreview';

function HeaderSectionLeft() {

    // setMarkdownText = "### ABC def"
    return (
        <div className="Section-left-header">
            <div className="Text-section-Title">Write Prompt here:</div>
            <div className="Prompt-domain">
                <div><label htmlFor="promptDomain" className="Text-section-Title">Domain:</label></div>
                <div><input type="text" id="promptDomain" className="promptDomain-textbox" placeholder="Enter prompt domain" /></div>
            </div>
        </div>

    );
}

export default HeaderSectionLeft;