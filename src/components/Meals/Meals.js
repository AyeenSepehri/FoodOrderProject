import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummery'

function Meals() {
  return (
    <div>
      <MealsSummary/>
      <AvailableMeals/>
    </div>
  )
}

export default Meals