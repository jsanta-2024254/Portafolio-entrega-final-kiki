import AppShell from "./AppShell.jsx";
import PortfolioPage from "../pages/PortfolioPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

export const routeConfig = [
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <PortfolioPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
];