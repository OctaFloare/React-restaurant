import {AppBar, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {RestaurantMenu} from "@material-ui/icons";
import {NavbarIcons} from "./navbar-icons/navbar-icons";
import {NavbarTitle} from "./navbar-title/navbar-title";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export const NavBar = () =>
    <AppBar position ='static'>
        <Toolbar variant ='dense'>
            <NavbarIcons link={'/'} icon={<MenuIcon/>} />
            <NavbarIcons link={'/menu'} icon={<RestaurantMenu/>} />
            <NavbarTitle text={'React Restaurant'} />
            <NavbarIcons link={'/menu/shopping-cart'} icon={<AddShoppingCartIcon/>} edge={'end'} />
        </Toolbar>
    </AppBar>