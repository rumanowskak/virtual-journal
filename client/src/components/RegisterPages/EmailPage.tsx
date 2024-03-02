import '../../css/RegisterPages/EmailPage.css'

import { useSetRecoilState } from 'recoil';

import { RegisterState } from '../../atoms/RegisterState';
import { useState } from "react";
import { useNavigate } from 'react-router';

function EmailPage() {

    const [email,setEmail] = useState("");
    const setRegisterState = useSetRecoilState(RegisterState);
    const navigate = useNavigate();
    
    function handleSubmit(e: any) {
        e.preventDefault();

        fetch("/api/users/email-check/" + email)
            .then((res) => {
                return res.json();
            })
            .then((data) =>{
                if(data.userExists)
                {
                    setRegisterState("login");
                }else
                {
                    setRegisterState("signup");

                }
                navigate('/register');
            })
            .catch((error) => {
                console.error(error);
            });

    }
    return (
      <div className="email-page">
        <div className='email-page-book-cover'>
            <div className='email-page-book-cover-left'>

            </div>
            <div className='email-page-book-cover-right'>
                <div className='email-page-book-pages'>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label>
                            email:
                            <input type="text" name="email" placeholder='email' value={email}  onChange={(e) => {setEmail(e.target.value)}}></input>
                        </label>
                        <div className="form-button-container">
                            <input type='submit' className='register-button' value="Continue"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default EmailPage;

