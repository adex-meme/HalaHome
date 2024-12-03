import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "@/components/layout";

import Home from "@/pages/home";
import DataGraph from "@/pages/dataGraph";
import Policy from "@/pages/policy";
import DocPage from "@/pages/docs";

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
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/doc",
    element: <DocPage />,
  },
]);

export default router;
