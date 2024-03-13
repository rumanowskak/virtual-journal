import '../../css/NewEntryPage/NewEntryPage.css'
import YogaIcon from '../../assets/images/yoga.png'
import PinIcon from '../../assets/images/pin.png'
import EmoticonsPanel from './EmoticonsPanel';
import FoodPanel from './FoodPanel';
import ExercisePanel from './ExercisePanel';
import Checkbox from './Checkbox';
import LampIcon from '../../assets/images/lamp.png';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyGlassIcon from '../../assets/images/glass.png'


function NewEntryPage() {

    const [data, setData] = useState({
        date:'',
        top_priorities:{
            priority_1:'',
            priority_2:'',
            priority_3:''
        },
        gratitude:{
            gratitude_1:'',
            gratitude_2:'',
            gratitude_3:''
        },
        notes:'',
        mood:'',
        emoticons:[],
        tasks:{
            task_1:'',
            task_2:'',
            task_3:'',
            task_4:'',
            task_5:'',
            task_6:''
        },
        food:{
            breakfast:'',
            lunch:'',
            dinner:'',
            water:{
                water_1:EmptyGlassIcon,
                water_2:EmptyGlassIcon,
                water_3:EmptyGlassIcon,
                water_4:EmptyGlassIcon,
                water_5:EmptyGlassIcon,
                water_6:EmptyGlassIcon,
                water_7:EmptyGlassIcon,
                water_8:EmptyGlassIcon,
            }
        },
        exercise:{
            exerciseDay:false,
            restDay:false,
            activity:null,
            duration:{
                hours:null,
                minutes:null
            }
        }
    })
    const navigate = useNavigate();
    
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

      function handleSubmit(e:any)
      {
        e.preventDefault();
        console.log(data);
        navigate('/home');
      }

      useEffect(()=>{
        const date= getDate();
        setData({...data,date:date});
      },[])


      function handlePriority1(priority:string)
      {
        setData({...data,top_priorities:{...data.top_priorities,priority_1:priority}});
      }

      function handlePriority2(priority:string)
      {
        setData({...data,top_priorities:{...data.top_priorities,priority_2:priority}});
      }

      function handlePriority3(priority:string)
      {
        setData({...data,top_priorities:{...data.top_priorities,priority_3:priority}});
      }

      
      function handleTask1(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_1:task}});
      }
      function handleTask2(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_2:task}});
      }

      function handleTask3(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_3:task}});
      }

      function handleTask4(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_4:task}});
      }

      function handleTask5(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_5:task}});
      }

      function handleTask6(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_6:task}});
      }

    return (
      <div className="new-entry-page">
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="new-entry-page-title">
            <div className='date-field'>
                {getDate()}
            </div>
            <div className='title-field'>
                Today's entry
            </div>
        </div>
        <img src={LampIcon} className='lamp-icon'></img>
        <div className='save-the-day'>
            <input type="submit" value="SAVE THE DAY"/>
        </div>
        <img src={LampIcon} className='lamp-icon1'></img>
        <img src={LampIcon} className='lamp-icon2'></img>
        <img src={LampIcon} className='lamp-icon3'></img>
        <img src={LampIcon} className='lamp-icon4'></img>
        <img src={LampIcon} className='lamp-icon5'></img>
        <img src={LampIcon} className='lamp-icon6'></img>
        <img src={LampIcon} className='lamp-icon7'></img>
        <div className='top-priorites-panel'>
            <div className='top-priorities-panel-title'>
                Top priorities:
            </div>
            <div className='top-priorities'>
                <div className='priority'>
                    <Checkbox customLabel={true} data={data.top_priorities.priority_1} setData={handlePriority1}/>
                </div>
                <div className='priority'>
                    <Checkbox customLabel={true} data={data.top_priorities.priority_2} setData={handlePriority2}/>
                </div>
                <div className='priority'>
                    <Checkbox customLabel={true} data={data.top_priorities.priority_3} setData={handlePriority3}/>
                </div>
            </div>
        </div>
        <div className='gratitude-panel'>
            <div className='gratitude-panel-title'>
                Three things I'm grateful for:
            </div>
            <div className='gratitude-items-list'>
                <div className='gratitude-item'>
                    1. <input value={data.gratitude.gratitude_1} onChange={(e) => setData({ ...data, gratitude:{...data.gratitude,gratitude_1:e.target.value}})}></input>
                </div>
                <div className='gratitude-item'>
                    2. <input value={data.gratitude.gratitude_2} onChange={(e) => setData({ ...data, gratitude:{...data.gratitude,gratitude_2:e.target.value}})}></input>
                </div>
                <div className='gratitude-item'>
                    3. <input value={data.gratitude.gratitude_3} onChange={(e) => setData({ ...data, gratitude:{...data.gratitude,gratitude_3:e.target.value}})}></input>
                </div>
            </div>
        </div>
        <div className='notes-panel'>
            <div className='notes-panel-title'>
                Notes:
            </div>
            <div className='notes'>
                <textarea value={data.notes} onChange={(e)=> setData({...data,notes:e.target.value})}/>
                <img src={PinIcon}></img>
            </div>

        </div>
        <div className='emoticons-panel-container'>
            <EmoticonsPanel data={data} setData={setData}/>
        </div>
        <div className='tasks-panel'>
            <div className='tasks-panel-title'>
                Tasks for today:
            </div>
            <div className='tasks'>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_1} setData={handleTask1}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_2} setData={handleTask2}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_3} setData={handleTask3}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_4} setData={handleTask4}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_5} setData={handleTask5}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_6} setData={handleTask6}/>
                </div>
            </div>
        </div>
        <div className='food-panel-container'>
           <FoodPanel data={data} setData={setData}/>
        </div>
        <div className='exercise-panel-container'>
            <div className='exercise-panel'>
                <ExercisePanel data={data} setData={setData}/>
            </div>
            <div className='exercise-icon'>
                <img src={YogaIcon}></img>
            </div>
        </div>
        </form>
      </div>
    );
  }
  
  export default NewEntryPage;