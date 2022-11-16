import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";

const routes = createRoutesFromElements(
    <Route element={<App />}>
        <Route
            index
            element={<Home />}
            loader={Home.loader}
            errorElement={<div>Some thing wrong :</div>}
        />
        <Route path="*" element={<div>404 | Page Not Found</div>} />
    </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
