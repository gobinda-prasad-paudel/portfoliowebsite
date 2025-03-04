import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Pagenotfound from "./pages/Pagenotfound";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Default route
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },

      {
        path: "*", // ✅ Catch-all route for 404 pages
        element: <Pagenotfound />,
      },
    ],
  },
]);

export default router;
