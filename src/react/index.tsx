import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';

render();

function render(): void {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById("root")
    );
}

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/history" component={History} />
                <Route path="/about" component={About} />
            </Switch>
        </main>
    );
}
