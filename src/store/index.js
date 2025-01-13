import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redusers";

export const store = createStore(rootReducer);
