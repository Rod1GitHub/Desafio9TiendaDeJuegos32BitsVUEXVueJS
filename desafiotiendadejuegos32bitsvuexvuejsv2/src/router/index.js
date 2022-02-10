import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import Busquedas from "../views/Busquedas.vue";
import Ventas from "../views/Ventas.vue";
import Total from "../views/Total.vue";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    alias: ["/home", "/inicio", "/portada"],
    component: Inicio,
  },
  {
    path: "/busquedas",
    name: "Busquedas",
    alias: ["/search"],
    component: Busquedas,
  },
  {
    path: "/ventas",
    name: "ventas",
    alias: ["/sales"],
    component: Ventas,
  },
  {
    path: "/total",
    name: "total",
    component: Total,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
