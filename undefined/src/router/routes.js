export default [
  {
    // Always leave this as last one
    path: "*",
    component: () => import("pages/404"),
  },
  {
    path: "/",
    component: () => import("layouts/default"),
    children: [{ path: "", component: () => import("pages/Login") }],
  },

  {
    // Always leave this as last one
    path: "*",
    component: () => import("pages/404"),
  },
]
