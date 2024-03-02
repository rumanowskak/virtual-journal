import '../../css/RegisterPages/EmailPage.css'

function EmailPage() {
    return (
      <div className="email-page">
        <div className='email-page-book-cover'>
            <div className='email-page-book-cover-left'>

            </div>
            <div className='email-page-book-cover-right'>
                <div className='email-page-book-pages'>
                    <form>
                        <label>
                            email:
                            <input type="text" name="email" placeholder='email'></input>
                        </label>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default EmailPage;

