import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home/home";
import About from "./pages/about";
import Accommodation from "./pages/Accommodation/accommodation";
import Error from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Navigate to="/error404" />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "accommodation/:id",
        element: <Accommodation />,
      },
      {
        path: "error404",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
