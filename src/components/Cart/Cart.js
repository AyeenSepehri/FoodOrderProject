import React from 'react'
import Modal from '../UI/Modal'
import classes from "./Cart.module.css"

function Cart(props) {
    const cartItems = <ul className={classes["cart-items"]}>{
        [{id: "c1", name: "Sushi", amount: 2, price: 12.5 }].map((item) => <li>{item.name}</li>)
        }</ul>
  return (
    <Modal onCloseOverley={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>36.28</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart