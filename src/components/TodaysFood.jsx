import React from 'react'

const TodaysFood = ({selectedFood, removeFood}) => {
    return (
        <div className='column is-3'>
            <h2>Today's foods</h2>
            {/* <pre>{JSON.stringify(selectedFood, null, 2)}</pre> */}
            {/* {console.log(selectedFood)} */}
            <ul>
                {selectedFood.map(food => {
                    return <li key={food.name}>{food.quantity} {food.name} <span onClick={() => removeFood(food.name)}>🗑</span></li>
                })}
            </ul>
            <p>Total: {selectedFood.reduce((acc, val) => {
                return acc + (val.calories * val.quantity)
                }, 0)} cal</p>
        </div>
    )
}

export default TodaysFood
