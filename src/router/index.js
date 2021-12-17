import Vue from "vue";
import Router from "vue-router";

// Containers
const TheContainer = () => import("@/containers/TheContainer");
// Views
const Dashboard = () => import("@/views/Dashboard");
const NewRequest = () => import("@/views/NewRequest");
const AddNewAgent = () => import("@/views/dashboard/AddNewAgent");
const LoginTimeSettings = () => import("@/views/settings/LoginTimeSettings");
const Agents = () => import("@/views/settings/Agents");
const Agent = () => import("@/views/profiles/agent");
const AllLeads = () => import("@/views/leads/AllLeads");
const Applied = () => import("@/views/leads/Applied");
const Expected = () => import("@/views/leads/Expected");
const NotExpected = () => import("@/views/leads/NotExpected");
const NewLeads = () => import("@/views/leads/NewLeads");
const InProgress = () => import("@/views/leads/InProgress");
const OnHold = () => import("@/views/leads/OnHold");
const Rejected = () => import("@/views/leads/Rejected");
// Views - Pages
const StudentForm = () => import("@/views/call-center/StudentForm");
const Page404 = () => import("@/views/pages/Page404");
const Page500 = () => import("@/views/pages/Page500");
const Login = () => import("@/views/login/Login");
const Register = () => import("@/views/pages/Register");

// charts
const MainChartExample = () => import("@/views/charts/MainChartExample");
const Charts = () => import("@/views/charts/Charts");
const Widgets = () => import("@/views/widgets/Widgets");

Vue.use(Router);

function configRoutes() {
  return [
    {
      path: "/dashboard",
      redirect: "/dashboard",
      name: "Home",
      component: TheContainer,
      children: [
        {
          path: "/widgets",
          name: "Widgets",
          component: Widgets,
        },
        {
          path: "/charts",
          name: "Charts",
          component: Charts,
        },
        {
          path: "/charts-example",
          name: "MainChartExample",
          component: MainChartExample,
        },
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
          path: "agents",
          name: "All Agents",
          component: Agents,
        },
        {
          path: "agent/:id",
          name: "Agents Profile",
          component: Agent,
        },
        {
          path: "all-leads",
          name: "All Leads",
          component: AllLeads,
        },
        {
          path: "leads/applied",
          name: "Applied Leads",
          component: Applied,
        },
        {
          path: "leads/expected",
          name: "Expected Leads",
          component: Expected,
        },
        {
          path: "leads/not-expected",
          name: "Not Expected Leads",
          component: NotExpected,
        },
        {
          path: "leads/new-leads",
          name: "New Leads",
          component: NewLeads,
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

let router = new Router({
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("token")) {
    // checking to avoid loop
    if (
      to.name === "Login" ||
      to.name === "ForgetPassword" ||
      to.name === "Student Form"
    )
      return next();
    next({
      path: "/",
    });
  } else {
    next();
  }
});

export default router;
