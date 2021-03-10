import {Box, Grid, TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {FoodDetails} from "../details/food-details/food-details"

export const ShowDetails = (value) => {
    const ingredients= value.value;
    
    return <TableRow>
    <TableCell colSpan={5}>
        <Box ml={15}>
            <Grid container direction='row' justify='space-between' spacing={2}>
                <FoodDetails ingredients={ingredients}/>
            </Grid>
        </Box>
    </TableCell>
</TableRow>
}