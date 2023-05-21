import Blog from "../Page/Blog";
import Collection from "../Page/Collection";
import Home from "../Page/Home";
import HomeLibrary from "../Page/HomeLibrary";
import HomeLogin from "../Page/HomeLogin";

import Login from "../Page/Login";
import Mac from "../Page/Mac";
import Pricing from "../Page/Pricing";
import Signup from "../Page/Signup";
import Support from "../Page/Support";
import DefaultLogin from "../components/DefaultLogin";
import LibraryDefault from "../components/LibraryDefault";
export const publicRouter = [
  { path: "/", component: Home, ke: "home" },
  { path: "/blog", component: Blog, ke: "home" },
  { path: "/pricing", component: Pricing, ke: "pricing" },
  { path: "/signup", component: Signup, layout: null },
  {
    path: "/home",
    component: HomeLogin,
    layout: DefaultLogin,
    mau: true,
    mau1: false,
    mau2: false,
  },
  {
    path: "/library",
    component: HomeLibrary,

    layout: LibraryDefault,
    ke: "pricing",
    key: "co",
  },
  {
    path: "/libraryhom",
    component: HomeLibrary,

    layout: LibraryDefault,
    ke: "pricing",
    key: "co",
  },
  {
    path: "/collection",
    component: Collection,

    layout: LibraryDefault,
    ke: "pricing",
    key: "col",
  },
  {
    path: "/30day/login",
    component: Login,

    layout: null,
  },
  {
    path: "/pricing/login",
    component: Login,

    layout: null,
  },
  { path: "/support", component: Support, ke: "home" },
  { path: "/learn", component: Home },
  { path: "/mac", component: Mac, ke: "pricing" },
  { path: "/30day", component: Pricing, ke: "pricing", k: true },
  { path: "/login", component: Login, layout: null },
  { path: "/libraryhom", component: HomeLibrary, ke: "home" },
  // { path: Routesconfig.Upload, component: Upload, layout: headerOnly },
];
export const privateRouter = [];
