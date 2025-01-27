import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./redusers";
import { hotelsReducer } from "./redusers/hotelReducer";

export const store = createStore(rootReducer);

export const hotelStore = createStore(hotelsReducer, applyMiddleware());
