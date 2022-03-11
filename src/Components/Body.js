import { RecipeList } from "./RecipeList"
import { RecipeTable } from "./RecipeTable"
import { InputRow } from "./InputRow"
import Grid from '@mui/material/Grid';
import { RecipeNetwork } from "./RecipeNetwork";

export function Body() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputRow />
                </Grid>
                <Grid item xs={4}>
                    <RecipeList />
                </Grid>
                <Grid item xs={8}>
                    <RecipeTable />
                </Grid>
                {/* <Grid item xs={12}>
                    <RecipeNetwork />
                </Grid> */}
            </Grid>
        </>
    )

}