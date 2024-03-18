import '../../css/HomePage/HomePage.css'
import AddNewEntryPanel from './AddNewEntryPanel';
import { UserState } from '../../atoms/User';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import Entry from './Entry';
import BookMarkIcon from '../../assets/images/bookmark.png'
import LogOutIcon from '../../assets/images/log-out (1).png'
import LogOutPanel from './LogOutPanel';


function HomePage() {

    const user = useRecoilValue(UserState);
    const [entries,setEntries] = useState([]);
    const [todaysEntryBoolean,setTodaysEntryBoolean] = useState(false);
    const [todaysEntry,setTodaysEntry] = useState({});
    const [navbar,setNavbar] = useState(false);
    const [bookmarkClass,setBookMarkClass] = useState("bookmark-icon-no-navbar");
    const [logOutPanelVisibility, setLogOutPanelVisibility] = useState(false);

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


      useEffect(()=>{
        fetch("/api/entries" )
        .then((res) => {
            return res.json();
        })
        .then((data) =>{
            console.log(data);
            setEntries(data.result.slice(0,6));
            if(data.result.some((entry:any)=>entry.date == getDate()))
            {
                setTodaysEntryBoolean(true);
                setTodaysEntry(data.result.find((entry:any)=>entry.date == getDate()));
                setEntries(data.result.filter((entry:any)=>entry.date != getDate()));

            }else
            {
                setTodaysEntryBoolean(false);

            }

        })
        .catch((error) => {
            console.error(error);
        });
      },[])

      function handleBookMarkIcon(){
        if(bookmarkClass == "bookmark-icon-no-navbar")
        {
            setBookMarkClass("bookmark-icon-navbar");
        }
        else{
            setBookMarkClass("bookmark-icon-no-navbar");
        }
        setNavbar((prev)=>!prev);
      }

    return (
      <div className="home-page">
        {navbar && 
        <div className="navbar">
            <img className="log-out-icon" onClick={()=>setLogOutPanelVisibility(true)}  src={LogOutIcon}></img>
        </div>}
        <div className='home-page-header'>
            <img className={bookmarkClass} onClick={handleBookMarkIcon} src={BookMarkIcon}></img>
            <div className='home-page-header-todays-entry'>
                {!todaysEntryBoolean && <AddNewEntryPanel/>}
                {todaysEntryBoolean && <Entry entry={todaysEntry}/>}
            </div>
            <div className='home-page-header-text'>
                <div className='home-page-header-date'>
                    {getDate()}
                </div>
                <div className='home-page-header-title'>
                    Hello {user && user.username}
                </div>
            </div>
        </div>
        <div className='home-page-main-content'>
            {entries && entries.map((entry:any)=>
                <div className='entry-item' key={entry.id}>
                    <Entry entry={entry}/>
                </div>
            )}
        </div>
        {logOutPanelVisibility && <div className='log-out-pop-up'>
            <LogOutPanel setLogOutPanelVisibility={setLogOutPanelVisibility}/>
        </div>}
      </div>
    );
  }
  
  export default HomePage;