import React from "react";
import {IngredientDetails} from "./ingredient-details/ingredient-details";

export const FoodDetails = ({ingredients}) => 
    Object.entries(ingredients).map(([key, value]) => <IngredientDetails foodType={value} />)

