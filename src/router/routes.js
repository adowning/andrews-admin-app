import DefaultLayout from "layouts/default"
// import LoginLayout from "layouts/login"

import Home from "pages/index"
import LiveView from "pages/liveview"
import Login from "pages/login"
import Hardware from "pages/hardware"
import Consumables from "pages/consumables"
import Directory from "pages/directory"
import Profile from "pages/profile"
import auth from "../auth"

export default [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: DefaultLayout,
    beforeEnter: requireAuth,
    children: [
      { path: "/", component: Home, beforeEnter: requireAuth },

      { path: "/liveview", component: LiveView, beforeEnter: requireAuth },

      { path: "/hardware", component: Hardware, beforeEnter: requireAuth },

      {
        path: "/consumables",
        component: Consumables,
        beforeEnter: requireAuth,
      },

      { path: "/profile", component: Profile, beforeEnter: requireAuth },

      { path: "/directory", component: Directory, beforeEnter: requireAuth },
    ],
  },
  {
    // Always leave this as last one
    path: "*",
    component: () => import("pages/404"),
  },
]
function requireAuth(to, from, next) {
  console.log(auth.loggedIn())
  if (!auth.loggedIn()) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    })
  } else {
    next()
  }
}
