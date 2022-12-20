import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Gallery from "./Gallery";
import Store from "./store/Store";
import Counter from "./Counter";
import ReactModalVideo from "./ReactModalVideo";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import DynamicRouting from "./DynamicRouting";
import Api from "./Api";
import PostList from "./PostList";
import PostView from "./PostView";
import StoreApi from "./store-api/StoreApi";
import {ToastContainer} from "react-toastify";

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
                    <Route path="/api" exact component={Api}/>
                    <Route path="/posts" exact component={PostList}/>
                    <Route path="/posts/:id" exact component={PostView}/>
                    <Route path="/store-api" exact component={StoreApi}/>

                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
            <ToastContainer/>
        </div>
    );
};

export default Routing;