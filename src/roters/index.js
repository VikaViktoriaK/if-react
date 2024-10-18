import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import { Hotels } from "../components/Hotels";
import { HOTEL } from "../constants/paths";

export const router = createBrowserRouter(
  createRoutesFromElements(
    // eslint-disable-next-line react/react-in-jsx-scope
    <Route path="/" element={<App />}>
      {/* eslint-disable-next-line react/react-in-jsx-scope,no-undef */}
      <Route path={HOTEL.hotel} element={<Hotels data={} />} />
    </Route>,
  ),
);
