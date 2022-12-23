import { Router } from "next/router";
import Home from "./index";
import About from "./about";
import Contact from "./contacts";

Router.events.on("routeChangeComplete", (url) => {
  // Aquí puedes ejecutar código cada vez que se cambie la ruta
});

const routes = [
  {
    path: "/",
    component: Home,
    label: "Inicio",
  },
  {
    path: "/about",
    component: About,
    label: "Acerca de",
  },
  {
    path: "/contacts",
    component: Contact,
    label: "Contacto",
  },
];

export default routes;
