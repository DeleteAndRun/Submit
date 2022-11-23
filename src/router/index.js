
import { createRouter, createWebHistory } from "vue-router";
import { message } from "ant-design-vue";
import layout from "../layout/index.vue";

export const routes = [
  {
    path: "/overview",
    meta: {
      title: "overview",
      hidden: false,
      keepAlive: false,
      icon: "appstore-outlined",
    },
    component: layout,
    children: [
      {
        path: "/overview",
        meta: { title: "Overview", hidden: false, icon: "appstore-outlined" },
        component: () => import("../views/overview/index.vue"),
      },
    ],
  },
  {
    path: "/submissions",
    meta: {
      title: "Submissions",
      hidden: false,
      keepAlive: false,
      icon: "appstore-outlined",
    },
    component: layout,
    children: [
      {
        path: "/submissions",
        meta: {
          title: "Submissions",
          hidden: false,
          icon: "appstore-outlined",
        },
        component: () => import("../views/submissions/index.vue"),
      },
    ],
  },
  {
    path: "/submissionsDetail",
    meta: {
      title: "submissionsDetail",
      hidden: true,
      keepAlive: false,
      icon: "appstore-outlined",
    },
    component: layout,
    children: [
      {
        path: "/submissionsDetail",
        meta: {
          title: "submissionsDetail",
          hidden: true,
          icon: "appstore-outlined",
        },
        component: () => import("../views/submissions/detail.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "/",
      redirect: "/overview",
    },
    {
      path: "/login",
      component: () => import("../views/login/index.vue"),
    },
    ...routes,
  ],
});

export default router;
