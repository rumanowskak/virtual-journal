import '../../css/NewEntryPage/EmoticonsPanel.css'
import Emotion from './Emotion';
import Mood from './Mood';

interface emoticonsPanelInterface
{
    data: any,
    setData:Function
}

function EmoticonsPanel({data,setData}:emoticonsPanelInterface) {
    const mood_numbers=['1','2','3','4','5','6','7','8','9','10'];
    const emotions_description=['excited', 'flirtitious' , 'stressed', 'shy', 'nervous', 'sick' , 'goofy' , 'moody' , 'sleepy'];

    return (
      <div className="emoticons-panel">
            <div className='mood-panel'>
                <div className='mood-panel-title'>
                    How is your mood today?:
                </div>
                <div className='mood-panel-emoticons-container'>
                    {mood_numbers.map((number)=>
                    <Mood number={number} data={data} setData={setData}/> 
                    )}
                </div>
            </div>
            <div className='emotions-panel'>
                <div className='emotions-panel-title'>
                    Select today's emotions:
                </div>
                <div className='emotions-panel-emoticons-container'>
                    {emotions_description.map((description)=>
                    <Emotion description={description} data={data} setData={setData}/>
                        )}
                </div>
            </div>
      </div>
    );
  }
  
  export default EmoticonsPanel;
