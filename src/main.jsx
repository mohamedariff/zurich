import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";
import ErrorPage from "./pages/Error.jsx";

import store from "./redux/store.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <User />,
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        cacheLocation="localstorage"
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
