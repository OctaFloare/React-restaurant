import {NavBar} from "./core/navbar/navbar";
import './App.css';
import {Routes} from "./core/routes/routes";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from "./core/store/store"

const App = () =>
    <Provider store={store}>
        <Router>
            <NavBar />
            <Routes />
        </Router>
    </Provider>

export default App;
