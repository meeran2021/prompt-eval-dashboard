import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkdownEditor from './MarkdownEditor';
import {MarkdownPreview} from './MarkdownPreview';
import HeaderSectionLeft from './HeaderSectionLeft';
import HeaderPreviewPrompt from './HeaderPreviewPrompt';
import DashboardFooterSubmit from './DashboardFooterSubmit';

function ProMD() {
    const [markdownText, setMarkdownText] = useState('');

    

    return (
        <div className="Body-markdown">
            <div className="Container-markdown-preview">
                <div className="Section-left">
                    {/* <div className="Section-left-header">
                        <div className="Text-section-Title">Write Prompt here:</div>
                        <div className="Prompt-domain">
                            <div><label htmlFor="promptDomain" className="Text-section-Title">Domain:</label></div>
                            <div><input type="text" id="promptDomain" className="promptDomain-textbox" placeholder="Enter prompt domain" /></div>
                        </div>
                    </div> */}
                    <HeaderSectionLeft />
                    <MarkdownEditor markdownText= {markdownText} setMarkdownText= {setMarkdownText}/>
                    {/* <div className="markdown-editor">
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
                        <div className="Editor">
                            <textarea
                                id="markdown-input"
                                value={markdownText}
                                onChange={e => setMarkdownText(e.target.value)}
                                placeholder="Enter Markdown text here..."
                            />
                        </div>
                    </div> */}
                </div>

                <div className="Section-right">
                    {/* <div className="Section-right-header">
                        <div className="Text-section-Title">Preview here:</div>
                    </div> */}
                    <HeaderPreviewPrompt />
                    <MarkdownPreview markdownText={markdownText} />
                    {/* <div className="markdown-editor">
                        <div id='markdown-header'>
                            <div id='markdown-subheader'>
                                <div className="Markdown-header-left" id='text-preview'>Markdown Preview</div>
                                <div className="Markdown-header-right">
                                    <img src="./icon_copy.svg" alt="icon copy" />
                                </div>
                            </div>
                        </div>
                        <div className="Editor">
                            <div className="preview" id="markdown-preview">
                                <ReactMarkdown
                                    className="Markdown-text"
                                    components={{
                                        code: Component
                                    }}
                                >
                                    {markdownText}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
            <DashboardFooterSubmit />
            {/* <div className="Footer">
                <div className="Container-actions">
                    <button className='Btn-check-plag'>Check Plag</button>
                    <button className='Btn-submit'>Submit</button>
                </div>
            </div> */}
        </div>
    );
}



export default ProMD;
