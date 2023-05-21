import React from "react";
import rootReducers from "./rootReducer"
import { legacy_createStore as createStore } from "redux";
const store = createStore(rootReducers)
export default store ;