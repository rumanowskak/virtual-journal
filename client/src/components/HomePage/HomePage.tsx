import '../../css/HomePage/HomePage.css'
import AddNewEntryPanel from './AddNewEntryPanel';
import { UserState } from '../../atoms/User';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import Entry from './Entry';

function HomePage() {

    const user = useRecoilValue(UserState);
    const numbers = ["1","2","3","4","5","6"]

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
        //fetch 
      },[])

    return (
      <div className="home-page">
        <div className='home-page-header'>
            <div className='home-page-header-todays-entry'>
                <AddNewEntryPanel/>
            </div>
            <div className='home-page-header-text'>
                <div className='home-page-header-date'>
                    {getDate()}
                </div>
                <div className='home-page-header-title'>
                    Hello {user.username}
                </div>
            </div>
        </div>
        <div className='home-page-main-content'>
            { numbers.map((id)=>
                <div className='entry-item' key={id}>
                    <Entry/>
                </div>
                )}
        </div>
      </div>
    );
  }
  
  export default HomePage;