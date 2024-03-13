import React, { useState } from 'react';
import BodyHeader from './BodyHeader';
import ProMD from './ProMD';
import MarkdownEditor from './MarkdownEditor';
import { MarkdownPreview } from './MarkdownPreview';
import HeaderSectionLeft from './HeaderSectionLeft';
import HeaderPreviewPrompt from './HeaderPreviewPrompt';
import RatingFrame from './RatingFrame';

function RatedPrompts() {
    const [markdownText, setMarkdownText] = useState("### ABC def");
    const frameDesc = "Clearly  defined instructions/request, including any important details or context."
    const [frameTitle, setFrameTitle] = useState("Specificity");

    return (
        <div className='Content1'>
            <BodyHeader title='Prompt Ratings' />

            {/* <ProMD /> */}
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
                        {/* <MarkdownEditor markdownText= {markdownText} setMarkdownText= {setMarkdownText}/> */}
                        <MarkdownPreview markdownText={markdownText} />

                    </div>
                    <div className="Section-right">
                        <HeaderPreviewPrompt />
                        {/* <MarkdownPreview markdownText={markdownText} /> */}
                        <div className="markdown-editor">
                            <div id='markdown-header'>
                                <div id='markdown-subheader'>
                                    <div className="Markdown-header-left" id='text-preview'>Rated prompt with respect to the following factors:</div>

                                </div>
                            </div>
                            {/* <div className="Rating-frame">
                                <div className="Frame-border"></div>
                                
                            </div> */}
                            {/* <div className="Rating-frames"> */}

                            <div className="Rating-frame">
                                <RatingFrame frameTitle="Specificity:" frameDesc={frameDesc} />
                                <RatingFrame frameTitle="Detailed:" frameDesc="Include the expected nature of response(format, length, style, persona)." />
                                <RatingFrame frameTitle="Relevance:" frameDesc="Relevant to current competency where overlapping between consistencies can exist." />
                                <RatingFrame frameTitle="Presentation and Formatting:" frameDesc="Uses delimiters, markdown, latex, proper spelling & grammar. Do not uses HTML." />

                                {/* <div className="Frame-border">
                                    <div className='Frame-title'>{frameTitle}</div>
                                    <div className='Frame-description'>{frameDesc}</div>
                                    <div className='Rating-bars'>
                                        <div className="Btn-rating" id="Btn-rating-1">1</div>
                                        <div className="Btn-rating" id="Btn-rating-2">2</div>
                                        <div className="Btn-rating" id="Btn-rating-3">3</div>
                                        <div className="Btn-rating" id="Btn-rating-4">4</div>
                                        <div className="Btn-rating" id="Btn-rating-5">5</div>
                                    </div>
                                </div>
                                <div className="Frame-border">
                                    <div className='Frame-title'>{frameTitle}</div>
                                    <div className='Frame-description'>{frameDesc}</div>
                                    <div className='Rating-bars'>
                                        <div className="Btn-rating" id="Btn-rating-1">1</div>
                                        <div className="Btn-rating" id="Btn-rating-2">2</div>
                                        <div className="Btn-rating" id="Btn-rating-3">3</div>
                                        <div className="Btn-rating" id="Btn-rating-4">4</div>
                                        <div className="Btn-rating" id="Btn-rating-5">5</div>
                                    </div>
                                </div>
                                <div className="Frame-border">
                                    <div className='Frame-title'>{frameTitle}</div>
                                    <div className='Frame-description'>{frameDesc}</div>
                                    <div className='Rating-bars'>
                                        <div className="Btn-rating" id="Btn-rating-1">1</div>
                                        <div className="Btn-rating" id="Btn-rating-2">2</div>
                                        <div className="Btn-rating" id="Btn-rating-3">3</div>
                                        <div className="Btn-rating" id="Btn-rating-4">4</div>
                                        <div className="Btn-rating" id="Btn-rating-5">5</div>
                                    </div>
                                </div>
                                <div className="Frame-border">
                                    <div className='Frame-title'>{frameTitle}</div>
                                    <div className='Frame-description'>{frameDesc}</div>
                                    <div className='Rating-bars'>
                                        <div className="Btn-rating" id="Btn-rating-1">1</div>
                                        <div className="Btn-rating" id="Btn-rating-2">2</div>
                                        <div className="Btn-rating" id="Btn-rating-3">3</div>
                                        <div className="Btn-rating" id="Btn-rating-4">4</div>
                                        <div className="Btn-rating" id="Btn-rating-5">5</div>
                                    </div>
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RatedPrompts;