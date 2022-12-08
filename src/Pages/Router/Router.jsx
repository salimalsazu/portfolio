import { createBrowserRouter } from "react-router-dom";
import ErrorElemnts from "../Error/ErrorElemnts";
import Home from "../Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Projects from "../Projects/Projects";

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
                element: <Projects></Projects>
            }
        ]
    }
])

export default router;