const routeConfig = [
  { path: "/", component: "Home" },
  { path: "/my-account", component: "MyAccount" },
  {
    path: "/my-orders",
    component: "MyOrders",
    children: [{ path: "my-order", component: "MyOrder" }],
  },
  { path: "/sign-in", component: "SignIn" },
  { path: "*", component: "NotFound" },
];

export default routeConfig;
