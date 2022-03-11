import React, { useContext } from "react";


export const RecipesContext = React.createContext()

function useRecipes() {
    const context = useContext(RecipesContext)
    
    if(!context){
        throw new Error("useRecipes must be used within a RecipesProvider")
    }
    const [state, dispatch] = context

    return {
        state,
        dispatch,
    }
}

export const recipeReducerActions = {
    SETALL: 'SET ALL',
    EXCLUDE: 'EXCLUDE',
    INCLUDE: 'INCLUDE'
}

function recipesReducer(state, action){
    switch(action.type){
        case recipeReducerActions.SETALL:{
            return action.recipes
        }
        case recipeReducerActions.EXCLUDE:{
            return state.map(recipe => action.ids.includes(recipe.id) ? {...recipe, included: false} : recipe )
        }
        case recipeReducerActions.INCLUDE:{
            return state.map(recipe => action.ids.includes(recipe.id) ? {...recipe, included: true} : recipe )
        }
        default:{
            throw new Error(`Unsupported action type ${action.type}`)
        }
    }
}

function RecipesProvider(props){
    const [state, dispatch] = React.useReducer(recipesReducer, [])
    const value = [state, dispatch]
    // const value = React.useMemo(() => [recipes, setRecipes], [recipes])
    return <RecipesContext.Provider value={value} {...props} />
}

export { RecipesProvider, useRecipes}