import {Box, Grid} from "@material-ui/core";
import {useMenuContext} from "../hooks/use-menu-context";
import {FoodCard} from "../food-card/food-card";

export const FoodCards = () =><Box mr={5} mb={2} ml={5}>
    <Grid container direction='row' justify='space-around' spacing={8}>
        {useMenuContext().data.map(foodItem =>
            <Grid item xs={12} sm={12} md={12} lg={3} key={foodItem.id}>
                <FoodCard foodItem={foodItem} />
            </Grid>
        )}
    </Grid>
</Box>