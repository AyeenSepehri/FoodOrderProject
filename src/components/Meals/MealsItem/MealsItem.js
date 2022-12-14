import React from 'react'
import MealsForm from './MealsForm';
import classes from "./MealsItem.module.css"

function MealsItem(props) {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealsForm/>
      </div>
    </li>
  )
}

export default MealsItem;