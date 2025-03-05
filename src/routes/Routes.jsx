import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Dashbord from "../Pages/Dashbord";
import CoffeeCarts from "../components/CoffeeCarts";
import Coffees from "../Pages/Coffees";
import CoffeesDetails from "../components/CoffeesDetails";

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/categories.json'),
                children: [
                    {
                        path: '/',
                        element: <CoffeeCarts></CoffeeCarts>,
                        loader: () => fetch('/coffees.json'),
                    },
                    {
                        path: '/category/:categoryName',
                        element: <CoffeeCarts></CoffeeCarts>,
                        loader: () => fetch('/coffees.json'),
                    }
                ]
            },
            {
                path: '/dashbord',
                element: <Dashbord></Dashbord>
            },
            {
                path: '/coffes',
                element: <Coffees></Coffees>,
                loader: () => fetch('/coffees.json'),
            },
            {
                path: '/coffes/:id',
                loader: () => fetch('/coffees.json'),
                element: <CoffeesDetails></CoffeesDetails>,
            },
        ]
    }
]);

export { route };