import { createBrowserRouter } from "react-router-dom";


import App from "../App";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageNotFound/>
    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <PageNotFound/>
    },
    {
        path: "/portfolio",
        element: <Portfolio/>,
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
])