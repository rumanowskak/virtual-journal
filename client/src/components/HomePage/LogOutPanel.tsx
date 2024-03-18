import '../../css/HomePage/LogOutPanel.css';

import { useNavigate } from 'react-router-dom';
import { UserState } from '../../atoms/User';
import { useSetRecoilState } from 'recoil';

interface LogOutPanelInterface{
    setLogOutPanelVisibility:Function;
}



function LogOutPanel({setLogOutPanelVisibility}:LogOutPanelInterface) {

    const navigate = useNavigate();
    const setUser= useSetRecoilState(UserState);

    function handleCancel()
    {
        setLogOutPanelVisibility(false);
    }

    function handleConfirm()
    {
        setLogOutPanelVisibility(false);
        setUser(null);
        navigate('/');

    }

    return (
      <div className="log-out-panel">
        <div className='title'>
            Do you want to log out?
        </div>
        <div className='log-out-panel-buttons'>
            <div className='log-out-button-container'>
                <button className='log-out-button' onClick={handleConfirm}>Log Out</button>
            </div>
            <div className='cancel-button-container'>
                <button className='cancel-button' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default LogOutPanel;