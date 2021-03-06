import { TIngredient } from '../../utils/types';
import {
    TIngredientsActions,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    OPEN_INGREDIENT,
    CLOSE_INGREDIENT
} from '../actions/ingredients';

export type TIngredientsState = {
    ingredients: ReadonlyArray<TIngredient>;
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
    currentIngredient: TIngredient | null;
};

export const ingredientsInitialState: TIngredientsState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    currentIngredient: null
};

export const ingredientsReducer = (state = ingredientsInitialState, action: TIngredientsActions): TIngredientsState => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false,
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredients: action.ingredients,
                ingredientsRequest: false
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsFailed: true,
            };
        }
        case OPEN_INGREDIENT: {
            return {
                ...state,
                currentIngredient: action.currentIngredient
            };
        }
        case CLOSE_INGREDIENT: {
            return {
                ...state,
                currentIngredient: null
            };
        }
        default: {
            return state;
        }
    }
};