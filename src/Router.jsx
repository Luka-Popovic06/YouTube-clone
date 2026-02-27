import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Error";
import Home from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
export default router;
