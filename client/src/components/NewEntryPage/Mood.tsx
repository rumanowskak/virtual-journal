import '../../css/NewEntryPage/Mood.css';
import {useState, useEffect} from 'react';
import OneIcon from '../../assets/images/angry.png'
import TwoIcon from '../../assets/images/crying.png'
import ThreeIcon from '../../assets/images/sad.png'
import FourIcon from '../../assets/images/sarcastic.png'
import FiveIcon from '../../assets/images/neutral.png'
import SixIcon from '../../assets/images/smile.png'
import SevenIcon from '../../assets/images/shy.png'
import EightIcon from '../../assets/images/smile (1).png'
import NineIcon from '../../assets/images/laughing.png'
import TenIcon from '../../assets/images/love.png'

interface MoodInterface
{
    number:string,
    data:any,
    setData:Function,
}

function Mood({number, data, setData}:MoodInterface) {

    const [emoticon, setEmoticon] = useState("");
    const [name, setName] = useState("mood-icon-unchecked");


    useEffect(()=>{
        switch(number)
        {
            case '1':
                setEmoticon(OneIcon);
                break;
            case '2':
                setEmoticon(TwoIcon);
                break;
            case '3':
                setEmoticon(ThreeIcon);
                break;
            case '4':
                setEmoticon(FourIcon);
                break;
            case '5':
                setEmoticon(FiveIcon);
                break;
            case '6':
                setEmoticon(SixIcon);
                break;
            case '7':
                setEmoticon(SevenIcon);
                break;
            case '8':
                setEmoticon(EightIcon);
                break;
            case '9':
                setEmoticon(NineIcon);
                break;
            case '10':
                setEmoticon(TenIcon);
                break;
                
        }
    },[])

    function handleSetMood()
    {
        if(name=="mood-icon-unchecked")
        {
            setData({...data,mood:emoticon});
            setName("mood-icon-checked");
        }else
        {
            setData({...data,mood:''});
            setName("mood-icon-unchecked")

        }
        console.log(name);
        console.log(number);
    }

    return (
      <div className="mood" key={number}>
        <div className={name}>
            <button onClick={handleSetMood} type="button">
                <img src={emoticon}></img>
            </button>
        </div>
        <div className='mood-number'>
            {number}
        </div>
      </div>
    );
  }
  
  export default Mood;
