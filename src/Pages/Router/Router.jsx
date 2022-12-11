import { createBrowserRouter } from "react-router-dom";
import AllBlogs from "../Blogs/AllBlogs";
import ErrorElemnts from "../Error/ErrorElemnts";
import Home from "../Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import AllProject from "../Projects/AllProject";
import ContactWithMe from "../Contact/ContactWithMe";
import Achievement from "../Achievement/Achievement";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElemnts></ErrorElemnts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/projects",
                element: <AllProject></AllProject>
            },
            {
                path: "/blogs",
                element: <AllBlogs></AllBlogs>
            },
            {
                path: "/achivements",
                element: <Achievement></Achievement>
            },
            {
                path: "/contact",
                element: <ContactWithMe></ContactWithMe>
            }
        ]
    }
])

export default router;