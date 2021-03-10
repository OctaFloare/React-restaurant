import {IconButton} from "@material-ui/core";
import {useRoutesOnClick} from "../hooks/use-routes-on-click";

export const NavbarIcons = ({link, icon, edge = 'start'}) => {
    const onClick = useRoutesOnClick(link);
    
    return <IconButton onClick={onClick} edge={edge} aria-label='menu'>
        {icon}
    </IconButton>
}