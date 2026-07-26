import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeConfig } from "./routeConfig.jsx";

const router = createBrowserRouter(routeConfig);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}