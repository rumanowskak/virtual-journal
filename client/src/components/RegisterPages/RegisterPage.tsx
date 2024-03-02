import '../../css/RegisterPages/RegisterPage.css'
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

import { useRecoilValue } from 'recoil';

import { RegisterState } from '../../atoms/RegisterState';

function RegisterPage() {

    const registerState = useRecoilValue(RegisterState);
    return (
      <div className="register-page">
        <div className='register-page-book-cover'>
            <div className='register-page-book-cover-left'>
            </div>
            <div className='register-page-book-cover-right'>
                {registerState=="signup" && <SignUpForm/>}
                {registerState=="login" && <LogInForm/>}

            </div>
        </div>
      </div>
    );
  }
  
  export default RegisterPage;
