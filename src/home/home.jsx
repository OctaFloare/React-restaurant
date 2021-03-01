import logo from "../logo.svg";

export const Home = () =>
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to React Restaurant
            </p>
            <a className="App-link" href="http://localhost:3000/menu">
                Go to menu
            </a>
        </header>
    </div>