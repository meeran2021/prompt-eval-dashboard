import React, { useState } from 'react';
import BodyHeader from './BodyHeader';
import ProMD from './ProMD';
import MarkdownEditor from './MarkdownEditor';

function HeaderPreviewPrompt() {

    // setMarkdownText = "### ABC def"
    return (
        <div className="Section-right-header">
            <div className="Text-section-Title">Preview here:</div>
        </div>
    );
}

export default HeaderPreviewPrompt;