import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./components/App"
import {Provider as StoreProvider} from "react-redux"
import Store from "./app/store"
import CartMap from "./components/CartMap";
 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(
 <StoreProvider store={Store}>
 <App/>

 </StoreProvider>
 )