import Vue from "vue";
import Router from "vue-router";

// Containers
const TheContainer = () => import("@/containers/TheContainer");
// Views
const Dashboard = () => import("@/views/Dashboard");
const NewRequest = () => import("@/views/NewRequest");
const AddNewAgent = () => import("@/views/dashboard/AddNewAgent");
const LoginTimeSettings = () => import("@/views/settings/LoginTimeSettings");
const AllLeads = () => import("@/views/leads/AllLeads");
const ApprovedLeads = () => import("@/views/leads/Approved");
const InProgress = () => import("@/views/leads/InProgress");
const OnHold = () => import("@/views/leads/OnHold");
const Rejected = () => import("@/views/leads/Rejected");
// Views - Pages
const StudentForm = () => import("@/views/call-center/StudentForm");
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
        {
          path: "newagent",
          name: "Add New Agent",
          component: AddNewAgent,
        },
        {
          path: "time-setting",
          name: "Login/Logout Settings",
          component: LoginTimeSettings,
        },
        {
          path: "all-leads",
          name: "All Leads",
          component: AllLeads,
        },
        {
          path: "leads/approved",
          name: "Approved Leads",
          component: ApprovedLeads,
        },
        {
          path: "leads/in-progress",
          name: "In Progress Leads",
          component: InProgress,
        },
        {
          path: "leads/rejected",
          name: "Rejected Leads",
          component: Rejected,
        },
        {
          path: "leads/on-hold",
          name: "On Hold Leads",
          component: OnHold,
        },

        {
          path: "*",
          name: "Page Not Found",
          component: Page404,
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
        {
          path: "form",
          name: "Student Form",
          component: StudentForm,
        },
      ],
    },
  ];
}
