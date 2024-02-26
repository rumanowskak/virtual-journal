import '../../css/RegisterPages/SignUpForm.css'

function SignUpForm() {
    return (
      <div className="sign-up-form">
        <form >
            <label className='label-email'>
                email:
                <input type="text" name="email" placeholder='email'></input>
            </label>
            <label className='label-password'>
                password:
                <input type="password" name="password" placeholder='password'></input>
            </label>
            <label className='label-username'>
                username:
                <input type="text" name="username" placeholder='username'></input>
            </label>
        </form>
      </div>
    );
  }
  
export default SignUpForm;