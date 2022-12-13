import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Gallery from "./Gallery";
import Store from "./store/Store";
import Counter from "./Counter";
import ReactModalVideo from "./ReactModalVideo";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import DynamicRouting from "./DynamicRouting";

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Gallery}/>
                    <Route path="/store" exact component={Store}/>
                    <Route path="/counter" exact component={Counter}/>
                    <Route path="/modal-video" exact component={ReactModalVideo}/>
                    <Route path="/news/category/:name" exact component={DynamicRouting}/>


                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Routing;