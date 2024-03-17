import { useState } from "react";
import '../../css/NewEntryPage/Checkbox.css'

interface CheckboxInterface
{
    label?:String;
    customLabel?:boolean;
    isItChecked?:boolean;
    setIsItChecked?:Function;
    setAnotherChecked?:Function;
    data?:any;
    setData?:Function;
    setChecked?:Function
}

const Checkbox = ({ label, customLabel, isItChecked, setIsItChecked, setAnotherChecked,data,setData,setChecked }:CheckboxInterface) => {
  const [isChecked, setIsChecked] = useState(false);


  function handleCheckbox(){
    if(setIsItChecked!== undefined && setAnotherChecked !== undefined)
    {
        setIsItChecked(!isItChecked);
        setAnotherChecked(false);

    }else
    {
        setIsChecked((prev:any)=> !prev);
    }
    if(setChecked!==undefined)
    {
      setChecked(!isItChecked);

    }
    
  }

  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" checked={(isItChecked === undefined)? isChecked : isItChecked} onChange={handleCheckbox}/>
        {label && <span>{label}</span>}
        {customLabel && setData && <input type="text" value={data} onChange={(e:any)=>{setData(e.target.value)}}></input>}
      </label>
    </div>
  );
};
export default Checkbox;