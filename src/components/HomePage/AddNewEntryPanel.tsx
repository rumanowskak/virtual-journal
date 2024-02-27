import '../../css/HomePage/AddNewEntryPanel.css'

function AddNewEntryPanel() {
    return (
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
    );
  }
  
  export default AddNewEntryPanel;