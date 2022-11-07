import React from 'react'
import mealsImage from "../../../Asset/meals.jpg"
import classes from "./Header.module.css"
import HeaderIconButton from './HeaderIconButton'

function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>reactMeals</h1>
                <HeaderIconButton onShowModal={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="a table of food"/>
            </div>
        </React.Fragment>
    )
}

export default Header