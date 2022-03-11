import React, { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useRecipes, recipeReducerActions } from '../Hooks/recipesHook'
import { getRecipesByName } from '../Services/recipe.service'

export const InputRow = (props) => {
    const [userRecipeInput, setUserRecipeInput] = useState("")
    const {dispatch} = useRecipes()

    const handleRecipeInputChange = (e) => {
        setUserRecipeInput(e.target.value)
        const recipes = getRecipesByName(e.target.value)
        dispatch({
            recipes: recipes,
            type: recipeReducerActions.SETALL
        })
    }

    return (
        <>
            <div className="filter-row">
                <TextField
                    fullWidth
                    label="Dish name"
                    variant="standard"
                    value={userRecipeInput}
                    onChange={(e) => handleRecipeInputChange(e)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </>
    )
}
