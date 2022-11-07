import React from 'react'
import CartIcon from '../../Cart/CartIcon'
import classes from "./HeaderIconButton.module.css"

function HeaderIconButton() {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>your cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderIconButton