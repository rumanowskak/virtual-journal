import '../../css/RegisterPages/LogInForm.css'

import { useState } from "react";
import { useSetRecoilState } from 'recoil';

import { UserState } from '../../atoms/User';
import { useNavigate } from 'react-router';


function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(UserState);
  const navigate = useNavigate();


  function handleSubmit(e: any) {
    e.preventDefault();
    fetch( '/api/users/login',
    {
      method:"POST",
      headers: {
        Accept: '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
    })
    }
  )
    .then((res) => {
      return res.json()
    })
    .then((data)=>{
      console.log(data);
      setUser(data);
      navigate('/home');
    })
    .catch((error) => {
      console.log(error);
    });
  }
    return (
      <div className="log-in-form">
        <form onSubmit={(e) => handleSubmit(e)}>
            <label className='label-email'>
                email:
                <input type="text" name="email" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            </label>
            <label className='label-password'>
                password:
                <input type="password" name="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            </label>
            <button>Submit</button>
        </form>
      </div>
    );
  }
  
export default LogInForm;
