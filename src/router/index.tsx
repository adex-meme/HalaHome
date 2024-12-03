import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "@/components/layout";

import Home from "@/pages/home";
import DataGraph from "@/pages/dataGraph";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/data-graph",
        element: <DataGraph />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
