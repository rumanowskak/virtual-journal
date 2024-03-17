import '../../css/HomePage/AddNewEntryPanel.css'
import { Link } from 'react-router-dom'


function AddNewEntryPanel() {
    return (
      <Link to="/entry"  className='link'>
        <div className="add-new-entry-panel">
          <div className='add-new-entry-panel-text'>
            Today's entry
          </div>
          <div className='add-new-entry-panel-button-container'>
            <button className='add-new-entry-panel-button'>
              +
            </button>
          </div>
        </div>
      </Link>
    );
  }
  
  export default AddNewEntryPanel;