import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function MarkdownEditor({markdownText, setMarkdownText}) {

    return (
        <div className="markdown-editor">
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
        </div>
    );
}

export default MarkdownEditor;