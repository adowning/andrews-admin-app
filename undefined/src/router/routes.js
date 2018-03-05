import AuthGuard from "./auth-guard"

export default [
  {
    // Always leave this as last one
    path: "/login",
    component: () => import("pages/Login"),
  },
  {
    path: "/",
    component: () => import("layouts/default"),
    children: [
      {
        path: "/profile",
        component: () => import("pages/Profile"),
      },
    ],
  },

  {
    // Always leave this as last one
    path: "*",
    component: () => import("pages/404"),
  },
]