import {createStore} from 'redux'

// INITIAL STATE
const initialState = {
    name: '',
    category: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

// ACTION CONSTANTS
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST_NAME = 'UPDATE_AUTHOR_FIRST_NAME'
export const UPDATE_AUTHOR_LAST_NAME = 'UPDATE_AUTHOR_LAST_NAME'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const ADD_RECIPE = 'ADD_RECIPE'

// REDUCER FUNCTION
function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_NAME:
            return {...state, name: action.payload}
        case UPDATE_CATEGORY:
            return {...state, category: action.payload}
        case UPDATE_AUTHOR_FIRST_NAME:
            return {...state, authorFirstName: action.payload}
        case UPDATE_AUTHOR_LAST_NAME:
            return {...state, authorLastName: action.payload}
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, action.payload]
            return {...state, ingredients: newIngredients}
        case ADD_INSTRUCTION:
            const newInstructions = [...state.instructions, action.payload]
            return {...state, instructions: newInstructions}
        case ADD_RECIPE:
            const {name, category, authorFirstName, authorLastName, ingredients, instructions} = state
            const recipe = {name, category, authorFirstName, authorLastName, ingredients, instructions}
            const newRecipe = [...state.recipes, recipe]
            return {...state, recipes: newRecipe}
        default:
            return state
    }
}

// CREATE STORE
export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
