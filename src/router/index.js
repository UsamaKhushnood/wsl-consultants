import Vue from "vue";
import Router from "vue-router";

// Containers
const TheContainer = () => import("@/containers/TheContainer");
// Views
const Dashboard = () => import("@/views/Dashboard");
const NewRequest = () => import("@/views/NewRequest");
// Views - Pages
const Page404 = () => import("@/views/pages/Page404");
const Page500 = () => import("@/views/pages/Page500");
const Login = () => import("@/views/login/Login");
const Register = () => import("@/views/pages/Register");

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});

function configRoutes() {
  return [
    {
      path: "/dashboard",
      redirect: "/dashboard",
      name: "Home",
      component: TheContainer,
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: Dashboard,
        },
        {
          path: "newrequest",
          name: "New Request",
          component: NewRequest,
        },
      ],
    },
    {
      path: "/",
      redirect: "/login",
      name: "Pages",
      component: {
        render(c) {
          return c("router-view");
        },
      },
      children: [
        {
          path: "404",
          name: "Page404",
          component: Page404,
        },
        {
          path: "500",
          name: "Page500",
          component: Page500,
        },
        {
          path: "login",
          name: "Login",
          component: Login,
        },
        {
          path: "register",
          name: "Register",
          component: Register,
        },
      ],
    },
  ];
}
