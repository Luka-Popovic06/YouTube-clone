import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Error";
import CardList from "./CardList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CardList />,
      },
    ],
  },
]);
export default router;
