import React from "react";
import { useRoutes } from "react-router-dom";
import routeConfig from "./RouteConfig";
import ComponentLoader from "./ComponentLoader";

const AppRoutes = () => {
  let routes = useRoutes(
    routeConfig.map((route) => ({
      path: route.path,
      element: ComponentLoader(route.component),
    }))
  );

  return <>{routes}</>;
};

export default AppRoutes;
