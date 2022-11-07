import React from 'react'
import  ReactDOM  from 'react-dom'
import classes from "./Modal.module.css"

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.closeModal}></div>
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
        { ReactDOM.createPortal(<BackDrop closeModal={props.onCloseOverley}/>, OverleyElement )}
        { ReactDOM.createPortal(<ModalContent>{props.children}</ModalContent>, OverleyElement) }
    </React.Fragment>
  )
}

export default Modal