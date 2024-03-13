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
    description:string,
    data:any,
    setData:Function
}

function Emotion({description, data, setData}:EmotionInterface) {

    const [emoticon, setEmoticon] = useState("");
    const [name, setName] = useState("emotion-icon-unchecked");
    let key:any;

    useEffect(()=>{
        switch(description)
        {
            case 'excited':
                setEmoticon(ExcitedIcon);
                key='0';
                break;
            case 'flirtitious':
                setEmoticon(FlirtitiousIcon);
                key='1';
                break;
            case 'stressed':
                setEmoticon(StressedIcon);
                key="2";
                break;
            case 'shy':
                setEmoticon(ShyIcon);
                key="3";
                break;
            case 'nervous':
                setEmoticon(NervousIcon);
                key="4";
                break;
            case 'sick':
                setEmoticon(SickIcon);
                key="5";
                break;
            case 'goofy':
                setEmoticon(GoofyIcon);
                key="6";
                break;
            case 'moody':
                setEmoticon(MoodyIcon);
                key="7";
                break;
            case 'sleepy':
                setEmoticon(SleepyIcon);
                key="8";
                break;

                
        }
    },[])

    function handleSetEmotion(e:any)
    {
        if(data.emoticons.includes(emoticon))
        {
            let newEmoticons = data.emoticons.remove(emoticon);
            setData({...data,emoticons:newEmoticons});
            setName("emotion-icon-unchecked");
        }else{
            setData({...data,emoticons:[...data.emoticons,emoticon]});
            setName("emotion-icon-checked");

        }
    }

    return (
      <div className="emotion"  key={key}>
        <div className={name}>
            <button onClick={handleSetEmotion} type="button">
                <img src={emoticon}></img>
            </button>
        </div>
        <div className='emotion-description'>
            {description}
        </div>
      </div>
    );
  }
  
  export default Emotion;
