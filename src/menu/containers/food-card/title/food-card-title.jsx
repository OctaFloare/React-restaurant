import {Typography} from "@material-ui/core";

export const FoodCardTitle = ({foodItem}) =><Typography gutterBottom variant='h5' component='h2'>
    {foodItem.name}
</Typography>