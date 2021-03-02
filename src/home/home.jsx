import logo from '../logo.svg'
import {Link} from "react-router-dom";

export const Home = () =>
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to React Restaurant
            </p>
            <Link className="App-link" to="/menu">
                Go to menu
            </Link>
        </header>
    </div>