import * as actionsTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (name) => {
    return {
        type: actionsTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionsTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredient = (ingredients) => {
    return {
        type: actionsTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientFailed = () => {
    return {
        type: actionsTypes.FETCH_INGREDIENT_FAILED
    };
};

export const initIngredient = () => {
    return dispatch => {
        axios.get('https://my-burger-builder-78b40-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredient(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientFailed());
            })
    };
};