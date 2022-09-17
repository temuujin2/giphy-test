import React, { useState } from 'react';


const FoodArr = [
    'Salat',
    'Desert',
    'Burger',
    'Hotdog',
    'Spagetti',
    'Chiken',
    'Beef',
    'Fish',
    'Sushi',
    'Soup',
    'Steak'
]

export const Setting = () => {
    const [addFood, setAddFood] = useState([]);
    const [name, setName] = useState("");

    const addFoodName = (name) => {
        setAddFood((foods) => {
            return [...foods, name];
        })
    }

    const  removeFromFood = (name) => {
        setAddFood((foods) => {
            const result = [...foods];
            result.splice(
                foods.indexOf(name),
                1
            )
            return result;
        })
    }
    return (
        <div style={{display:'flex'}}>
            <div>
                {
                    FoodArr.map((name) => {
                        if (addFood.includes(name)) return null;
                        return <p key={name} >
                            {name}
                        <button onClick={() => addFoodName(name)}>Add</button>
                        </p>
                    })
                }
            </div>
            <div>
                {
                    addFood.map((name) => {
                        return <p key={name} >
                            {name}
                        <button onClick={() => removeFromFood(name)}>Remove</button>
                        </p>
                    })
                }
            </div>
            <div>
            <input type="text" onChange={(event) => setName(event.target.value)} />

                <button
                  onClick={() => {
                    setAddFood([...addFood, name]);
                    setName("");
                  }}
                >
                  Add
                </button>
            </div>
        </div>
    );
}