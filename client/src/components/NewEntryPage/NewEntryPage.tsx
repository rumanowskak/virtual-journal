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
            priority_1:{
                label:'',
                checked:false
            },
            priority_2:{
                label:'',
                checked:false
            },
            priority_3:{
                label:'',
                checked:false
            }
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
            task_1:{
                label:'',
                checked:false
            },
            task_2:{
                label:'',
                checked:false
            },
            task_3:{
                label:'',
                checked:false
            },
            task_4:{
                label:'',
                checked:false
            },
            task_5:{
                label:'',
                checked:false
            },
            task_6:{
                label:'',
                checked:false
            }
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
        fetch('/api/entries',
        {
          method:"POST",
          headers: {
            Accept: '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      .then(res => {
          navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
      }

      useEffect(()=>{
        const date= getDate();
        setData({...data,date:date});
      },[])


      function handleLabelPriority1(priority:string)
      {
        setData({...data,top_priorities:{...data.top_priorities,priority_1:{...data.top_priorities.priority_1,label:priority}}});
      }

      function handleCheckedPriority1(checked:boolean)
      {
        setData({...data,top_priorities:{...data.top_priorities,priority_1:{...data.top_priorities.priority_1,checked:checked}}});
      }


      function handleLabelPriority2(priority:string)
      {
        setData({...data,top_priorities:{...data.top_priorities,priority_2:{...data.top_priorities.priority_2,label:priority}}});
      }

      function handleCheckedPriority2(checked:boolean)
      {
        setData({...data,top_priorities:{...data.top_priorities,priority_2:{...data.top_priorities.priority_2,checked:checked}}});
      }

      function handleLabelPriority3(priority:string)
      {
        setData({...data,top_priorities:{...data.top_priorities,priority_3:{...data.top_priorities.priority_3,label:priority}}});
      }

      function handleCheckedPriority3(checked:boolean)
      {
        setData({...data,top_priorities:{...data.top_priorities,priority_3:{...data.top_priorities.priority_3,checked:checked}}});
      }

      
      function handleLabelTask1(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_1:{...data.tasks.task_1,label:task}}});
      }


      function handleCheckedTask1(checked:boolean)
      {
        setData({...data,tasks:{...data.tasks,task_1:{...data.tasks.task_1,checked:checked}}});
      }

      function handleLabelTask2(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_2:{...data.tasks.task_2,label:task}}});
      }

      function handleCheckedTask2(checked:boolean)
      {
        setData({...data,tasks:{...data.tasks,task_2:{...data.tasks.task_2,checked:checked}}});
      }

      function handleLabelTask3(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_3:{...data.tasks.task_3,label:task}}});
      }

      function handleCheckedTask3(checked:boolean)
      {
        setData({...data,tasks:{...data.tasks,task_3:{...data.tasks.task_3,checked:checked}}});
      }

      function handleLabelTask4(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_4:{...data.tasks.task_4,label:task}}});
      }

      function handleCheckedTask4(checked:boolean)
      {
        setData({...data,tasks:{...data.tasks,task_4:{...data.tasks.task_4,checked:checked}}});
      }

      function handleLabelTask5(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_5:{...data.tasks.task_5,label:task}}});
      }

      function handleCheckedTask5(checked:boolean)
      {
        setData({...data,tasks:{...data.tasks,task_5:{...data.tasks.task_5,checked:checked}}});
      }

      function handleLabelTask6(task:string)
      {
        setData({...data,tasks:{...data.tasks,task_6:{...data.tasks.task_6,label:task}}});
      }

      function handleCheckedTask6(checked:boolean)
      {
        setData({...data,tasks:{...data.tasks,task_6:{...data.tasks.task_6,checked:checked}}});
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
                    <Checkbox customLabel={true} data={data.top_priorities.priority_1.label} setData={handleLabelPriority1} setChecked={handleCheckedPriority1}/>
                </div>
                <div className='priority'>
                    <Checkbox customLabel={true} data={data.top_priorities.priority_2.label} setData={handleLabelPriority2} setChecked={handleCheckedPriority2}/>
                </div>
                <div className='priority'>
                    <Checkbox customLabel={true} data={data.top_priorities.priority_3.label} setData={handleLabelPriority3} setChecked={handleCheckedPriority3}/>
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
                    <Checkbox customLabel={true} data={data.tasks.task_1.label} setData={handleLabelTask1} setChecked={handleCheckedTask1}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_2.label} setData={handleLabelTask2} setChecked={handleCheckedTask2}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_3.label} setData={handleLabelTask3} setChecked={handleCheckedTask3}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_4.label} setData={handleLabelTask4} setChecked={handleCheckedTask4}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_5.label} setData={handleLabelTask5} setChecked={handleCheckedTask5}/>
                </div>
                <div className='task'>
                    <Checkbox customLabel={true} data={data.tasks.task_6.label} setData={handleLabelTask6} setChecked={handleCheckedTask6}/>
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