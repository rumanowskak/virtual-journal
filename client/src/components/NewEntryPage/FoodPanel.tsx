import '../../css/NewEntryPage/FoodPanel.css';
import EmptyGlassIcon from '../../assets/images/glass.png'
import FullGlassIcon from '../../assets/images/glass-of-water.png'
import { useState } from 'react';



function FoodPanel() {

    const [firstGlass,setFirstGlass] = useState(EmptyGlassIcon);
    const [secondGlass,setSecondGlass] = useState(EmptyGlassIcon);
    const [thirdGlass,setThirdGlass] = useState(EmptyGlassIcon);
    const [fourthGlass,setFourthGlass] = useState(EmptyGlassIcon);
    const [fifthGlass,setFifthGlass] = useState(EmptyGlassIcon);
    const [sixthGlass,setSixthGlass] = useState(EmptyGlassIcon);
    const [seventhGlass,setSeventhGlass] = useState(EmptyGlassIcon);
    const [eighthGlass,setEighthGlass] = useState(EmptyGlassIcon);


    function handleGlassChange(currentGlass:String ,setGlass:Function)
    {
        if(currentGlass == EmptyGlassIcon)
        {
            setGlass(FullGlassIcon);
        }
        else
        {
            setGlass(EmptyGlassIcon);
        }
    }


    return (
      <div className="food-panel">
         <div className='food-panel-title'>
                Food:
            </div>
            <div className='meal-section'>
                <div className='meal-section-title'> 
                    Breakfast:
                </div>
                <div className='meal'> 
                    <input></input>
                </div>
            </div>
            <div className='meal-section'>
                <div className='meal-section-title'> 
                    Lunch:
                </div>
                <div className='meal'> 
                    <input></input>
                </div>
            </div>
            <div className='meal-section'>
                <div className='meal-section-title'> 
                    Dinner:
                </div>
                <div className='meal'> 
                    <input></input>
                </div>
            </div>
            <div className='water-section'>
                <div className='water-section-title'> 
                    Water:
                </div>
                <div className='water-glasses'> 
                    <img src={firstGlass} onClick={()=>handleGlassChange(firstGlass, setFirstGlass)}></img>
                    <img src={secondGlass} onClick={()=>handleGlassChange(secondGlass, setSecondGlass)}></img>
                    <img src={thirdGlass} onClick={()=>handleGlassChange(thirdGlass, setThirdGlass)}></img>
                    <img src={fourthGlass} onClick={()=>handleGlassChange(fourthGlass, setFourthGlass)}></img>
                    <img src={fifthGlass} onClick={()=>handleGlassChange(fifthGlass, setFifthGlass)}></img>
                    <img src={sixthGlass} onClick={()=>handleGlassChange(sixthGlass, setSixthGlass)}></img>
                    <img src={seventhGlass} onClick={()=>handleGlassChange(seventhGlass, setSeventhGlass)}></img>
                    <img src={eighthGlass} onClick={()=>handleGlassChange(eighthGlass, setEighthGlass)}></img>
                </div>
            </div>
      </div>
    );
  }
  
  export default FoodPanel;
