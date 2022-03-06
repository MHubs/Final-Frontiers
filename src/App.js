import React, { Component } from 'react';
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";

import MainView from "./views/MainView.js";
import ScrollToTop from "./components/PageHeader/ScrollToTop";


class App extends Component {


    render() {
        return (
            <HashRouter basename={"/"}>
                <ScrollToTop/>
                <Switch>
                    <Route
                        exact path="/"
                        render={(props) => <MainView name={"Home"} {...props} />}
                    />
                </Switch>
            </HashRouter>


        );
    }
}
export default App;
