import '../../css/NewEntryPage/FoodPanel.css';
import EmptyGlassIcon from '../../assets/images/glass.png'
import FullGlassIcon from '../../assets/images/glass-of-water.png'
import { useState } from 'react';

interface foodPanelInterface
{
    data:any,
    setData:Function
}


function FoodPanel({data,setData}:foodPanelInterface) {

    const [firstGlass,setFirstGlass] = useState(EmptyGlassIcon);
    const [secondGlass,setSecondGlass] = useState(EmptyGlassIcon);
    const [thirdGlass,setThirdGlass] = useState(EmptyGlassIcon);
    const [fourthGlass,setFourthGlass] = useState(EmptyGlassIcon);
    const [fifthGlass,setFifthGlass] = useState(EmptyGlassIcon);
    const [sixthGlass,setSixthGlass] = useState(EmptyGlassIcon);
    const [seventhGlass,setSeventhGlass] = useState(EmptyGlassIcon);
    const [eighthGlass,setEighthGlass] = useState(EmptyGlassIcon);

    function handleWater1(icon:string)
    {
        setData({...data,food:{...data.food,water:{...data.food.water,water_1:icon}}});
    }

    function handleWater2(icon:string)
    {

        setData({...data,food:{...data.food,water:{...data.food.water,water_2:icon}}});

    }
    function handleWater3(icon:string)
    {
        setData({...data,food:{...data.food,water:{...data.food.water,water_3:icon}}});
    }
    function handleWater4(icon:string)
    {
        setData({...data,food:{...data.food,water:{...data.food.water,water_4:icon}}});
    }
    function handleWater5(icon:string)
    {
        setData({...data,food:{...data.food,water:{...data.food.water,water_5:icon}}});
    }
    function handleWater6(icon:string)
    {
        setData({...data,food:{...data.food,water:{...data.food.water,water_6:icon}}});
    }
    function handleWater7(icon:string)
    {
        setData({...data,food:{...data.food,water:{...data.food.water,water_7:icon}}});
    }
    function handleWater8(icon:string)
    {
        setData({...data,food:{...data.food,water:{...data.food.water,water_8:icon}}});
    }

    function handleGlassChange(currentGlass:String ,setGlass:Function , setData:Function)
    {
        if(currentGlass == EmptyGlassIcon)
        {
            setGlass(FullGlassIcon);
            setData(FullGlassIcon);
        }
        else
        {
            setGlass(EmptyGlassIcon);
            setData(EmptyGlassIcon);
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
                    <input value={data.food.breakfast} onChange={(e)=>setData({...data,food:{...data.food,breakfast:e.target.value}})}></input>
                </div>
            </div>
            <div className='meal-section'>
                <div className='meal-section-title'> 
                    Lunch:
                </div>
                <div className='meal'> 
                    <input value={data.food.lunch} onChange={(e)=>setData({...data,food:{...data.food,lunch:e.target.value}})}></input>
                </div>
            </div>
            <div className='meal-section'>
                <div className='meal-section-title'> 
                    Dinner:
                </div>
                <div className='meal'> 
                    <input value={data.food.dinner} onChange={(e)=>setData({...data,food:{...data.food,dinner:e.target.value}})}></input>
                </div>
            </div>
            <div className='water-section'>
                <div className='water-section-title'> 
                    Water:
                </div>
                <div className='water-glasses'> 
                    <img src={firstGlass} onClick={()=>handleGlassChange(firstGlass, setFirstGlass, handleWater1)}></img>
                    <img src={secondGlass} onClick={()=>handleGlassChange(secondGlass, setSecondGlass, handleWater2)}></img>
                    <img src={thirdGlass} onClick={()=>handleGlassChange(thirdGlass, setThirdGlass, handleWater3)}></img>
                    <img src={fourthGlass} onClick={()=>handleGlassChange(fourthGlass, setFourthGlass, handleWater4)}></img>
                    <img src={fifthGlass} onClick={()=>handleGlassChange(fifthGlass, setFifthGlass, handleWater5)}></img>
                    <img src={sixthGlass} onClick={()=>handleGlassChange(sixthGlass, setSixthGlass, handleWater6)}></img>
                    <img src={seventhGlass} onClick={()=>handleGlassChange(seventhGlass, setSeventhGlass, handleWater7)}></img>
                    <img src={eighthGlass} onClick={()=>handleGlassChange(eighthGlass, setEighthGlass, handleWater8)}></img>
                </div>
            </div>
      </div>
    );
  }
  
  export default FoodPanel;
