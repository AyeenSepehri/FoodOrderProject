import React from 'react'
import  ReactDOM  from 'react-dom'
import classes from "./Modal.module.css"

const BackDrop = () => {
    return <div className={classes.backdrop}></div>
}

const ModalContent = (props) => {
    return(
        <div className={classes.modal}>{props.children}</div>
    )
}

function Modal(props) {
    const OverleyElement = document.getElementById("overley");
  return (
    <React.Fragment>
        { ReactDOM.createPortal(<BackDrop/>, OverleyElement )}
        { ReactDOM.createPortal(<ModalContent>{props.children}</ModalContent>, OverleyElement) }
    </React.Fragment>
  )
}

export default Modal