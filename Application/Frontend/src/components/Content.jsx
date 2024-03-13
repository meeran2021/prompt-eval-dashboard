import BodyHeader from './BodyHeader';
import BodyMD from './BodyMD';
import ProMD from './ProMD';
import RatedPrompts from './RatedPrompts';


function Content() {
    return (
        <div className="Content" >
           {/* <BodyHeader title='Prompt Submission Editor:' /> */}
           <RatedPrompts />
           {/* <ProMD /> */}
        </div >
    )
}

export default Content;