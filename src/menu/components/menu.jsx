import background from '../../core/images/background.jpg'
import {FoodCards} from "../containers/food-cards/food-cards";


export const Menu = () => 
    <div className={'fullPage'} style={{backgroundImage: `url(${background}`}}>
        <FoodCards />
    </div>
