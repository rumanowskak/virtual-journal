import '../../css/NewEntryPage/Emotion.css';
import {useState, useEffect} from 'react';
import SickIcon from '../../assets/images/ill.png'
import FlirtitiousIcon from '../../assets/images/kiss.png'
import SleepyIcon from '../../assets/images/sleep.png'
import ShyIcon from '../../assets/images/disbelief.png'
import GoofyIcon from '../../assets/images/tongue.png'
import StressedIcon from '../../assets/images/sick (1).png'
import ExcitedIcon from '../../assets/images/lol.png'
import MoodyIcon from '../../assets/images/sarcastic.png'
import NervousIcon from '../../assets/images/angry.png'



interface EmotionInterface
{
    description:string
}

function Emotion({description}:EmotionInterface) {

    const [emoticon, setEmoticon] = useState("");


    useEffect(()=>{
        switch(description)
        {
            case 'excited':
                setEmoticon(ExcitedIcon);
                break;
            case 'flirtitious':
                setEmoticon(FlirtitiousIcon);
                break;
            case 'stressed':
                setEmoticon(StressedIcon);
                break;
            case 'shy':
                setEmoticon(ShyIcon);
                break;
            case 'nervous':
                setEmoticon(NervousIcon);
                break;
            case 'sick':
                setEmoticon(SickIcon);
                break;
            case 'goofy':
                setEmoticon(GoofyIcon);
                break;
            case 'moody':
                setEmoticon(MoodyIcon);
                break;
            case 'sleepy':
                setEmoticon(SleepyIcon);
                break;

                
        }
    },[])

    return (
      <div className="emotion">
        <div className='emotion-icon'>
            <img src={emoticon}></img>
        </div>
        <div className='emotion-description'>
            {description}
        </div>
      </div>
    );
  }
  
  export default Emotion;
