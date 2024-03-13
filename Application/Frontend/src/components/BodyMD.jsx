import React, { useEffect } from 'react';
import * as marked from 'marked'; // Import marked library

// import icon_bold from './../../public/icon_bold.svg'
import BodyHeader from './BodyHeader';

function BodyMD() {
    useEffect(() => {
        const markdownInput = document.getElementById('markdown-input');
        const markdownPreview = document.getElementById('markdown-preview');

        const updatePreview = () => {
            const markdownText = markdownInput.value;
            const htmlText = marked.parse(markdownText);
            markdownPreview.innerHTML = htmlText;
        };

        markdownInput.addEventListener('input', updatePreview);

        return () => {
            markdownInput.removeEventListener('input', updatePreview);
        };
    }, []);

    return (
        <div className="Body-markdown" >
            <div className="Container-markdown-preview">

                <div className="Section-left">
                    <div className="Section-left-header">
                        <div className="Text-section-Title">Write Prompt here:</div>
                        <div class="Prompt-domain">
                            <div><label for="promptDomain" class="Text-section-Title">Domain:</label></div>
                            <div><input type="text" id="promptDomain" class="promptDomain-textbox" placeholder="Enter prompt domain" /></div>
                        </div>
                    </div>
                    <div class="markdown-editor">
                        <div id='markdown-header'>
                            <div id='markdown-subheader'>
                                <div className="Markdown-header-left">
                                    <img src="./icon_bold.svg" alt="icon bold" />
                                    <img src="./icon_italic.svg" alt="icon italic" />
                                    <img src="./icon_strike.svg" alt="icon strike" />
                                    <img src="./icon_quotes.svg" alt="icon quotes" />
                                    <img src="./icon_codeblock.svg" alt="icon codeblock" />
                                </div>
                                <div className="Markdown-header-right">
                                    <img src="./icon_copy.svg" alt="icon copy" />
                                </div>
                            </div>
                        </div>
                        <div class="Editor">
                            <textarea id="markdown-input" placeholder="Enter Markdown text here..."></textarea>
                            {/* <div className='Markdown-input'>
                        </div> */}
                        </div>
                        {/* <div class="preview" id="markdown-preview"></div> */}
                    </div>
                    <div className="Section-left-markdown"></div>
                </div>


                <div className="Section-right">
                    <div className="Section-right-header">
                        <div className="Text-section-Title">Preview here:</div>
                    </div>
                    <div class="markdown-editor">
                        <div id='markdown-header'>
                            <div id='markdown-subheader'>
                                <div className="Markdown-header-left" id='text-preview'>Markdown Preview</div>
                                <div className="Markdown-header-right">
                                    <img src="./icon_copy.svg" alt="icon copy" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="Section-right-markdown"> */}
                        <div class="Editor">
                            <div class="preview" id="markdown-preview"></div>
                        </div>
                        {/* <div class="Editor">
                        <textarea id="markdown-input" placeholder="Enter Markdown text here..."></textarea>
                        
                    </div> */}
                        {/* <div class="preview" id="markdown-preview"></div> */}
                    </div>
                    <div className="Section-left-markdown"></div>
                </div>

            </div>
            <div className="Footer">
                <div className="Container-actions">
                    <button className='Btn-check-plag'>Check Plag</button>
                    <button className='Btn-submit'>Submit</button>
                </div>
            </div>


        </div >
    )
}

export default BodyMD;