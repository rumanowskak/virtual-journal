import '../../css/NewEntryPage/NewEntryPage.css'
import YogaIcon from '../../assets/images/yoga.png'
import PinIcon from '../../assets/images/pin.png'
import EmoticonsPanel from './EmoticonsPanel';
import FoodPanel from './FoodPanel';
import ExercisePanel from './ExercisePanel';
import Checkbox from './Checkbox';

function NewEntryPage() {

    
    function getDate() {
        const today = new Date();
        let month = today.getMonth() + 1;
        let newMonth;
        if(month < 10)
        {
            newMonth = '0' + month.toString();
        }
        else
            newMonth = month.toString();
        const year = today.getFullYear();
        let newYear = year.toString();
        const date = today.getDate();
        let newDate;
        if(date < 10)
        {
            newDate = '0' + date.toString();
        }
        else
            newDate = date.toString();
        return newDate + '.' + newMonth + '.' + newYear;
      }

    return (
      <div className="new-entry-page">
        <div className="new-entry-page-title">
            <div className='date-field'>
                {getDate()}
            </div>
            <div className='title-field'>
                Today's entry
            </div>
        </div>
        <div className='top-priorites-panel'>
            <div className='top-priorities-panel-title'>
                Top priorities:
            </div>
            <div className='top-priorities'>
                <div className='priority'>
                    <Checkbox customLabel={true}/>
                </div>
                <div className='priority'>
                    <Checkbox customLabel={true}/>
                </div>
                <div className='priority'>
                    <Checkbox customLabel={true}/>
                </div>
            </div>
        </div>
        <div className='gratitude-panel'>
            <div className='gratitude-panel-title'>
                Three things I'm grateful for:
            </div>
            <div className='gratitude-items-list'>
                <div className='gratitude-item'>
                    1. <input></input>
                </div>
                <div className='gratitude-item'>
                    2. <input></input>
                </div>
                <div className='gratitude-item'>
                    3. <input></input>
                </div>
            </div>
        </div>
        <div className='notes-panel'>
            <div className='notes-panel-title'>
                Notes:
            </div>
            <div className='notes'>
                <textarea/>
                <img src={PinIcon}></img>
            </div>

        </div>
        <div className='emoticons-panel-container'>
            <EmoticonsPanel/>
        </div>
        <div className='tasks-panel'>
            <div className='tasks-panel-title'>
                Tasks for today:
            </div>
            <div className='tasks'>
                <div className='task'>
                    <Checkbox customLabel={true}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true}/>
                </div>
            </div>
        </div>
        <div className='food-panel-container'>
           <FoodPanel/>
        </div>
        <div className='exercise-panel-container'>
            <div className='exercise-panel'>
                <ExercisePanel/>
            </div>
            <div className='exercise-icon'>
                <img src={YogaIcon}></img>
            </div>
        </div>
      </div>
    );
  }
  
  export default NewEntryPage;