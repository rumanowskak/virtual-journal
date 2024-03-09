import { useState } from "react";
import '../../css/NewEntryPage/Checkbox.css'

interface CheckboxInterface
{
    label?:String;
    customLabel?:boolean;
    isItChecked?:boolean;
    setIsItChecked?:Function;
    setAnotherChecked?:Function;
}

const Checkbox = ({ label, customLabel, isItChecked, setIsItChecked, setAnotherChecked }:CheckboxInterface) => {
  const [isChecked, setIsChecked] = useState(false);


  function handleCheckbox(){
    if(setIsItChecked!== undefined && setAnotherChecked !== undefined)
    {
        setIsItChecked((prev:any) => !prev);
        setAnotherChecked(false);
    }else{
        setIsChecked((prev)=> !prev);
    }
    
  }

  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" checked={(isItChecked === undefined)? isChecked : isItChecked} onChange={handleCheckbox}/>
        {label && <span>{label}</span>}
        {customLabel && <input type="text"></input>}
      </label>
    </div>
  );
};
export default Checkbox;