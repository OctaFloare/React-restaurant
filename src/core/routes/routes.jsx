import {Router, Route, Switch} from "react-router-dom";
import {Home} from "../../home/home";
import {FoodMenu} from "../../menu/containers";
import history from '.././history';
import {SandwichMenu} from "../../sandwich-menu/containers";
import {ShoppingCart} from "../../shopping-cart/components/shopping-cart";

export const Routes = () =>
    <Router history={history}>
        <Switch>
            <Route path={'/'} component={Home} exact/>
            <Route path={'/menu'} component={FoodMenu} exact/>
            <Route path={'/menu/sandwiches'} component={SandwichMenu}/>
            <Route path={'/menu/shopping-cart'} component={ShoppingCart} />
        </Switch>
    </Router>