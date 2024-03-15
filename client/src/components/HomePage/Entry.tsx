import '../../css/HomePage/Entry.css'
import SmileIcon from '../../assets/images/smile.png'
import GoalIcon from '../../assets/images/goal (1).png'
import DropIcon from '../../assets/images/drop.png'
import ExerciseIcon from '../../assets/images/gym.png'


interface EntryInterface
{

}

function Entry() {
    return (
      <div className="entry">
        <div className='entry-left'>
            <div className='entry-date'>
                17.02.2024
            </div>
            <div className='entry-additional-info'>
                <img src={GoalIcon}></img>
                <img src={ExerciseIcon}></img>
                <img src={DropIcon}></img>
            </div>
        </div>
        <div className='entry-emoticon'>
            <img src={SmileIcon}></img>
        </div>
      </div>
    );
  }
  
  export default Entry;