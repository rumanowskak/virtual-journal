import '../../css/StartPage/StartPage.css'
import { Link } from 'react-router-dom'

function StartPage() {
    return (
      <div className="start-page">
        <div className='start-page-text'>
            <div className='start-page-text-right'>Your</div>
            <div className='start-page-text-left'>Virtual</div>
            <div className='start-page-text-right'>Journal</div>
        </div>
        <div className='start-page-book-background'>
            <div className='start-page-book'>
                <Link to="/email" className='link'>
                <div className='start-page-book-cover'>
                    <div className='start-page-book-cover-title'>
                        Let's start
                    </div>
                </div>
                </Link>
            </div>
        </div>
      </div>
    );
  }
  
  export default StartPage;

