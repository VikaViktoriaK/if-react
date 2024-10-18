import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { Loader } from "./components/Loader";
import { router } from "./roters";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} fallbackElement={<Loader />} />);
