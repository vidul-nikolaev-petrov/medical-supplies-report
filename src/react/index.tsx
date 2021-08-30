import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import History from "./history/history";
import About from "./about/about";
import Error from "./error/error";

render();

function render(): void {
    ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>,
        document.getElementById("root")
    );
}

function App(): JSX.Element {
    return (
        <main>
            <div>
                <Link to="/">Home</Link> &nbsp;
                <Link to="/history">History</Link> &nbsp;
                <Link to="/about">About</Link>
            </div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/history" component={History} />
                <Route path="/about" component={About} />
                <Route component={Error} />
            </Switch>
        </main>
    );
}