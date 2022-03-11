import { recipeReducerActions, useRecipes } from "../Hooks/recipesHook";
import { Checkbox, FormControlLabel } from "@mui/material";

export function RecipeList(){
    const {state:recipes, dispatch } = useRecipes()

    const handleCheck = (event, id) => {
        const actionType = event.target.checked ? recipeReducerActions.INCLUDE : recipeReducerActions.EXCLUDE
        dispatch({
            type: actionType,
            ids: [id]
        })
    }

    return (
        <>
            {recipes.map(recipe => {
                return (
                    <div key={recipe.id}>
                        <FormControlLabel control={<Checkbox checked={recipe.included} onChange={(e) => handleCheck(e, recipe.id)} />} label={recipe.name}/>
                    </div>
                )
            })}
        </>
    )
}