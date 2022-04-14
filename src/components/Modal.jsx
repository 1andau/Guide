import React from 'react'
import Button from '../components/Button';



function Modal(props) {

  return (props.trigger) ? (
<div className="popup">
    <div className="popup-inner">
      
        <Button className="close-btn" onClick={() => props.setTrigger(false)}>close</Button>
        {props.children}
    </div>
</div>  
) : "";
}

export default Modal