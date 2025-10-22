import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

const TestModule = lazy(() => import("./Test.module"));

export const testRoutes: RouteObject[] = [
  {
    path: "/test/*",
    element: <TestModule />,
  },
];

