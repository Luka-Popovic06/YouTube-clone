import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/error/Error";
import HomePage from "./pages/home/HomePage";
import ChannelPage from "./pages/channel/ChannelPage";
import VideoPage from "./pages/video/VideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <VideoPage />,
      },
      {
        path: "/channel",
        element: <ChannelPage />,
      },
    ],
  },
]);
export default router;
