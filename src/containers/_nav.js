export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Dashboard",
        to: "/dashboard",
        icon: "cil-speedometer",
        // badge: {
        //   color: "primary",
        //   text: "NEW",
        // },
      },
      {
        _name: "CSidebarNavItem",
        name: "New Request",
        to: "/newrequest",
        fontIcon: "fa fa-flag-o",
        badge: {
          color: "primary",
          text: "NEW",
        },
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Pages"],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Activity",
        fontIcon: "fa fa-cubes",
        items: [
          {
            name: "Assign Queries",
            to: "/",
          },
        ],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Updates",
        fontIcon: "fas fa-sync",
        items: [
          {
            name: "Students Updates",
            to: "/",
          },
          {
            name: "New Queries",
            to: "/",
          },
          {
            name: "New Inquiries",
            to: "/",
          },
        ],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Students",
        fontIcon: "fas fa-graduation-cap",
        items: [
          {
            name: "New Students",
            to: "/",
          },
          {
            name: "Recent Students",
            to: "/",
          },
          {
            name: "Active Students",
            to: "/",
          },
          {
            name: "Intrested Students",
            to: "/",
          },
        ],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Sales Department",
        fontIcon: "fa fa-bar-chart-o",
        items: [
          {
            name: "Agent Status",
            to: "/",
          },
          {
            name: "Agent Status",
            to: "/",
          },
          {
            name: "Agent Status",
            to: "/",
          },
        ],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Call Center Department",
        fontIcon: "fa fa-users",
        items: [
          {
            name: "Agent Status",
            to: "/",
          },
          {
            name: "Agent Status",
            to: "/",
          },
          {
            name: "Agent Status",
            to: "/",
          },
        ],
      },
      // Portal Settings
      {
        _name: "CSidebarNavDropdown",
        name: "Dashboard Settings",
        fontIcon: "fa fa-gear",
        items: [
          {
            name: "Admin Control",
            to: "/",
          },
          {
            name: "Admin Control",
            to: "/",
          },
          {
            name: "Admin Control",
            to: "/",
          },
        ],
      },

      // {
      //     _name: 'CSidebarNavDivider',
      //     _class: 'm-5'
      // },
      // {
      //     _name: 'CSidebarNavTitle',
      //     _children: ['User']
      // },
      // {
      //     _name: 'CSidebarNavDropdown',
      //     name: 'Pages',
      //     route: '/pages',
      //     icon: 'cil-star',
      //     items: [{
      //             name: 'Login',
      //             to: '/pages/login'
      //         },
      //         {
      //             name: 'Register',
      //             to: '/pages/register'
      //         },
      //         {
      //             name: 'Error 404',
      //             to: '/pages/404'
      //         },
      //         {
      //             name: 'Error 500',
      //             to: '/pages/500'
      //         }
      //     ]
      // },
      // {
      //   _name: "CSidebarNavItem",
      //   name: "Logout",
      //   href: "/logout",
      //   fontIcon: "fa fa-sign-out",
      //   _class: "position-absolute w-100 b-0 sidebarLogoutBtn",
      //   // target: '_blank'
      // },
    ],
  },
];
