import '../../css/RegisterPages/RegisterPage.css'
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

function RegisterPage() {
    return (
      <div className="register-page">
        <div className='register-page-book-cover'>
            <div className='register-page-book-cover-left'>
            </div>
            <div className='register-page-book-cover-right'>
                {/* <LogInForm/> */}
                <SignUpForm/>
            </div>
        </div>
      </div>
    );
  }
  
  export default RegisterPage;
