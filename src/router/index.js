import {createRouter, createWebHashHistory} from "vue-router";
import EventList from "../views/EventList.vue";


const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    props: true,
    component: () => import('../views/EventDetail')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
