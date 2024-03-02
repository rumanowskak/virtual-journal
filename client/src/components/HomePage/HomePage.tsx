import '../../css/HomePage/HomePage.css'
import AddNewEntryPanel from './AddNewEntryPanel';

function HomePage() {

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
                    Hello Jane
                </div>
            </div>
        </div>
        <div className='home-page-main-content'></div>
      </div>
    );
  }
  
  export default HomePage;