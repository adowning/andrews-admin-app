import auth from "../utils/auth"

import DefaultLayout from "layouts/default"

import Login from "pages/login"
import Dashboard from "pages/index"
import LiveView from "pages/liveview"
import Hardware from "../pages/hardware/"
import WorkShop from "pages/workshop"
import Consumables from "pages/consumables"
import Directory from "pages/directory"
import Applicants from "pages/applicants"
import Profile from "pages/profile"
import Documents from "pages/documents"
import Logs from "pages/logs"

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
      { path: "/dashboard", component: Dashboard, beforeEnter: requireAuth },

      { path: "/liveview", component: LiveView, beforeEnter: requireAuth },
      { path: "/workshop", component: WorkShop, beforeEnter: requireAuth },

      { path: "/hardware", component: Hardware, beforeEnter: requireAuth },

      {
        path: "/consumables",
        component: Consumables,
        beforeEnter: requireAuth,
      },
      { path: "/directory", component: Directory, beforeEnter: requireAuth },
      { path: "/applicants", component: Directory, beforeEnter: requireAuth },

      { path: "/profile", component: Profile, beforeEnter: requireAuth },
      { path: "/documents", component: Documents, beforeEnter: requireAuth },
      { path: "/logs", component: Logs, beforeEnter: requireAuth },
    ],
  },
  {
    // Always leave this as last one
    path: "*",
    component: () => import("pages/404"),
  },
]
function requireAuth(to, from, next) {
  // console.log(window.localStorage.getItem("token"))
  next()
  // if (!window.localStorage.getItem("token")) {
  //   next({
  //     path: "/login",
  //     query: { redirect: to.fullPath },
  //   })
  // } else {
  //   next()
  // }
}

