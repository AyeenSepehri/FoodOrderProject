import React from 'react'
import classes from "./CartOfMeals.module.css"

function CartOfMeals(props) {
  return (
    <div className={classes.card}>{props.children}</div>
  )
}

export default CartOfMeals