import {Card, CardActionArea, CardContent, CardMedia} from "@material-ui/core";
import history from "../../../core/history";
import {FoodCardTitle} from "./title/food-card-title";
import {FoodCardBody} from "./body/food-card-body";

export const FoodCard = ({foodItem}) => <Card>
    <CardActionArea onClick={() => history.push(`menu/${foodItem.path}`)}>
        <CardMedia component='img'
                   alt={foodItem.alt}
                   height='140'
                   image={foodItem.img}
                   title={foodItem.name}
                   className={'CardImage'}/>
    </CardActionArea>
    <CardContent>
        <FoodCardTitle foodItem={foodItem}/> 
        <FoodCardBody foodItem={foodItem} />
    </CardContent>
</Card>