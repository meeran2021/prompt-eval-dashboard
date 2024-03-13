
function BodyHeader({title}) {
    return (
        <div className="Header-bar" >
            <div className="Title">
                <div className="Text-page-title">{title}</div>
                {/* <div className="Text-page-title">Prompt Submission Editor:</div> */}
            </div>
            <div className="Prompt-type">
                <div className="Text-prompt-type" id="text-code-generation">Code Generation</div>
                <div className="Text-prompt-type" id="text-code-debugging">Code Debugging</div>
                <div className="Text-prompt-type" id="text-code-understanding">Code Understanding</div>
            </div>
        </div >
    )
}

export default BodyHeader;