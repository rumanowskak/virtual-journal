import '../../css/HomePage/Entry.css'
import {useEffect, useState} from 'react';
import GoalIcon from '../../assets/images/goal (1).png'
import DropIcon from '../../assets/images/drop.png'
import ExerciseIcon from '../../assets/images/gym.png'
import NoMoodIcon from '../../assets/images/no_mood.png'


interface EntryInterface
{
    entry:any;
}

function Entry({entry}:EntryInterface) {
    const [goals,setGoals] = useState(false);
    const [exercise, setExercise] = useState(false);
    const [water, setWater] = useState(false);

    useEffect(()=>{
        let goals_temp=true;
        console.log(entry);
        Object.keys(entry.top_priorities).map((priority:any)=>{
            if(priority.checked == false)
                goals_temp=false;
        })
        if(goals_temp==true)
            setGoals(true);
        if(entry.exercise.exerciseDay)
            setExercise(true);
        let water_temp=true;
        Object.keys(entry.food.water).map((water:any)=>{
            if(water=="/static/media/glass.53573e884492146cb245.png")
                water_temp=false;
        })
        if(water_temp==true)
        {
            setWater(true);
        }


    },[])

    return (
      <div className="entry">
        <div className='entry-left'>
            <div className='entry-date'>
                {entry.date}
            </div>
            <div className='entry-additional-info'>
                {goals && <img src={GoalIcon}></img>}
                {exercise && <img src={ExerciseIcon}></img>}
                {water && <img src={DropIcon}></img>}
            </div>
        </div>
        <div className='entry-emoticon'>
            {entry.mood && <img src={entry.mood}></img>}
            {!entry.mood && <img src={NoMoodIcon}></img>}
        </div>
      </div>
    );
  }
  
  export default Entry;