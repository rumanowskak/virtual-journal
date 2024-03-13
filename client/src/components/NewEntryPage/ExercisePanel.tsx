import '../../css/NewEntryPage/ExercisePanel.css';
import Checkbox from './Checkbox';
import { useState } from 'react';

interface excersisePanelInterface
{
    data:any,
    setData:Function
}

function ExercisePanel({data,setData}:excersisePanelInterface) {

    const [isExerciseChecked, setIsExerciseChecked] = useState(false);
    const [isRestDayChecked, setIsRestDayChecked] = useState(false);

    function handleExerciseDay(isItChecked:boolean)
    {
        setData({...data,exercise:{...data.exercise,exerciseDay:isItChecked}})
    }
    function handleRestDay(isItChecked:boolean)
    {
        setData({...data,exercise:{...data.exercise,restDay:isItChecked}})
    }

    return (
      <div className="exercise-panel-content">
        <div className='exercise-section'>
            <div className='exercise-section-checkbox'>
                <Checkbox label={"Exercise"} isItChecked={isExerciseChecked} setIsItChecked={setIsExerciseChecked} setAnotherChecked={setIsRestDayChecked} setChecked={handleExerciseDay}/>
            </div>
            <div className='exercise-section-input'>
                <input value={data.exercise.activity} onChange={(e)=>{setData({...data,exercise:{...data.exercise,activity:e.target.value}})}}></input>
            </div>
        </div>
        <div className='duration-section'>
            <div className='duration'>
                <div className='duration-title-section'>
                    Total time
                </div>
                <div className='duration-input-section'>
                    <div className='duration-input-section-text'>
                        <input value={data.exercise.duration.hours} onChange={(e)=>{setData({...data,exercise:{...data.exercise,duration:{...data.exercise.duration,hours:e.target.value}}})}}></input>
                        :
                        <input value={data.exercise.duration.minutes} onChange={(e)=>{setData({...data,exercise:{...data.exercise,duration:{...data.exercise.duration,minutes:e.target.value}}})}}></input>
                    </div>
                </div>
            </div>
        </div>
        <div className='rest-section'>
            <Checkbox label={"Rest day"} isItChecked={isRestDayChecked} setIsItChecked={setIsRestDayChecked} setAnotherChecked={setIsExerciseChecked} setChecked={handleRestDay}/>
        </div>
      </div>
    );
  }
  
  export default ExercisePanel;
