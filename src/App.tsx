import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/layout';
import Main from './pages/Main';
import { server } from './mock/server';

server.listen();

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
