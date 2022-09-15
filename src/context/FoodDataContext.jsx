import { createContext, useContext, useState } from "react";
import FoodData from '../data/FoodData.json'

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
    const [isFoodData, setIsFoodData] = useState(FoodData)

    return (
        <FoodContext.Provider value={{ isFoodData, setIsFoodData }}>
            {children}
        </FoodContext.Provider>
    )
}

export const FoodDataContext = () => useContext(FoodContext)