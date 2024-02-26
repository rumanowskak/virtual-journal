import '../../css/StartPage/StartPage.css'

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
                <div className='start-page-book-cover'>
                    <div className='start-page-book-cover-title'>
                        Let's start
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default StartPage;

