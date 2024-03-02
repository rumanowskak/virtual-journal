import '../../css/RegisterPages/SignUpForm.css'
import { useState } from "react";
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';

import { UserState } from '../../atoms/User';

function SignUpForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(UserState);

  function handleSubmit(e: any) {
    e.preventDefault();

    fetch('/api/users/register',
      {
        method:"POST",
        headers: {
          Accept: '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          username: username
      })
      }
    )
    .then(res => {
        loginAfterSignUp();
        navigate('/home');
    })
    .catch((error) => {
      console.log(error);
    });
}

function loginAfterSignUp() {
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
      setUser(data.user);
    })
    .catch((error) => {
      console.log(error);
    });
}


    return (
      <div className="sign-up-form">
        <form onSubmit={(e) => handleSubmit(e)} >
            <label className='label-email'>
                email:
                <input type="text" name="email" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            </label>
            <label className='label-password'>
                password:
                <input type="password" name="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            </label>
            <label className='label-username'>
                username:
                <input type="text" name="username" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
            </label>
            <button>Submit</button>
        </form>
      </div>
    );
  }
  
export default SignUpForm;