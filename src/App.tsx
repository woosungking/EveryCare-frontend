import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Layout from "./components/common/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Main /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
