import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blogs";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>,
            },
        

        ],
    },
]);
export default router;