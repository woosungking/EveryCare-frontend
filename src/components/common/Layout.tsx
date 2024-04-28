import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>NavBar</nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
