import {Typography} from "@material-ui/core";

export const FoodCardBody = ({foodItem}) =><Typography variant='body2' color='textPrimary' component='p'>
    {foodItem.description}
</Typography>