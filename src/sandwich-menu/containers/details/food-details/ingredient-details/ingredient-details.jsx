import {Grid} from "@material-ui/core";
import React from "react";

export const IngredientDetails = ({foodType}) => <Grid item xs={12} sm={4} md={12} lg={5}>
    Contine : {foodType.name} {foodType.weight}
</Grid>