import '../../css/RegisterPages/LogInForm.css'

function LogInForm() {
    return (
      <div className="log-in-form">
        <form >
            <label className='label-email'>
                email:
                <input type="text" name="email" placeholder='email'></input>
            </label>
            <label className='label-password'>
                password:
                <input type="password" name="password" placeholder='password'></input>
            </label>
        </form>
      </div>
    );
  }
  
export default LogInForm;
