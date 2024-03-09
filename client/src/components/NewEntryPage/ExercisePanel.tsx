import '../../css/NewEntryPage/ExercisePanel.css';
import Checkbox from './Checkbox';
import { useState } from 'react';



function ExercisePanel() {

    const [isExerciseChecked, setIsExerciseChecked] = useState(false);
    const [isRestDayChecked, setIsRestDayChecked] = useState(false);

    return (
      <div className="exercise-panel-content">
        <div className='exercise-section'>
            <div className='exercise-section-checkbox'>
                <Checkbox label={"Exercise"} isItChecked={isExerciseChecked} setIsItChecked={setIsExerciseChecked} setAnotherChecked={setIsRestDayChecked}/>
            </div>
            <div className='exercise-section-input'>
                <input></input>
            </div>
        </div>
        <div className='duration-section'>
            <div className='duration'>
                <div className='duration-title-section'>
                    Total time
                </div>
                <div className='duration-input-section'>
                    <div className='duration-input-section-text'>
                        <input></input>
                        :
                        <input></input>
                    </div>
                </div>
            </div>
        </div>
        <div className='rest-section'>
            <Checkbox label={"Rest day"} isItChecked={isRestDayChecked} setIsItChecked={setIsRestDayChecked} setAnotherChecked={setIsExerciseChecked}/>
        </div>
      </div>
    );
  }
  
  export default ExercisePanel;
