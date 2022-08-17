import React from 'react'

const Modal = props => {
  if(props.show){
    return null
  }
  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h4>Add A Habit!</h4>
        </div>
        <div className='modal-body'>
          <form>
            <label>
              Habit:
              <input type='text' name='habit'/>
            </label>
            <br/>
            <label>
              How frequently will you try and achieve this goal?
              <select>
                <option value='daily'>Daily</option>
                <option value='weekly'>Weekly</option>
              </select>
            </label>
          </form>
        </div>
        <div className='modal-footer'>
          <button onClick={props.onClose} className='modal-button'>
            Add Habit</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;