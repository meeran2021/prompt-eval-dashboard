import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function MarkdownPreview({ markdownText }) {
    // const [markdownText, setMarkdownText] = useState('');

    return (
        <div className="markdown-editor">
            <div id='markdown-header'>
                <div id='markdown-subheader'>
                    <div className="Markdown-header-left" id='text-preview'>Markdown Preview</div>
                    <div className="Markdown-header-right">
                        <img src="./icon_copy.svg" alt="icon copy" />
                    </div>
                </div>
                {/* <MarkdownPreviewHeader /> */}
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
        </div>
    );
}


const Component = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
        <SyntaxHighlighter
            style={docco}
            language={match[1]}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            {...props}
        />
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    );
};


// export default MarkdownPreview;


export function MarkdownPreviewHeader() {
    return (
        <div id='markdown-subheader'>
            <div className="Markdown-header-left" id='text-preview'>Markdown Preview</div>
            <div className="Markdown-header-right">
                <img src="./icon_copy.svg" alt="icon copy" />
            </div>
        </div>
    )
}