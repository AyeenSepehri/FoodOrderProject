import React from 'react'
import Input from '../../UI/Input'
import classes from "./MealsForm.module.css"

function MealsForm(props) {
  return (
    <form className={classes.form}>
        <Input lable="Amount" input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1"
        }} />
        <button>+ add</button>
    </form>
  )
}

export default MealsForm