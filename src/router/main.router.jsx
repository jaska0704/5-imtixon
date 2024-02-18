import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Shop } from "../pages/shop";
import { ShopSingle } from "../pages/shop-single/shop-single";
import { NotFound } from "../pages/not-found/not-found";

export const main_pages = [
    {
        component: <Home/>
    },
    {
        component: <About/>,
        path: "About",
    },
    {
        component: <Shop/>,
        path: "Shop"
    },
    {
        component: <NotFound/>,
        path: "*"
    },
    // {
    //     component: <ShopSingle/>,
    //     path: "/Shopsingle/:id"
    // },
]