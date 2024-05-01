import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/layout';
import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
