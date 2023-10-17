import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

const AppRoot = () => (
  <div className="app-root">
    <Header />
    <Outlet />
  </div>
);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    children: [
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

// rootReact.render(<AppRoot />);
rootReact.render(<RouterProvider router={appRouter} />);
