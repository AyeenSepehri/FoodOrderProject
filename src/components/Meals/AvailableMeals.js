import React from "react";
import CartOfMeals from "../Cart/CartOfMeals";
import classes from "./AvailableMeals.module.css"
import MealsItem from "./MealsItem/MealsItem";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meals) => {
    return (
      <MealsItem key={meals.id} name={meals.name} description={meals.description} price={meals.price} />
    )
  })
  return (
    <div className={classes.meals}>
      <CartOfMeals>
        <ul>
          {mealsList}
        </ul>
      </CartOfMeals>
    </div>
  )
}


export default AvailableMeals;