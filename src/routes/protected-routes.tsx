import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");
  const tokenProtected = ["/", "movie", "/movie/:id", "/tv-show/:id"];
  const publicProtected = ["/login"];

  console.log(pathname);
  if (tokenProtected.includes(pathname)) {
    if (!token) {
      console.log("test");
      return <Navigate to={"/login"} />;
    }
  }
  if (publicProtected.includes(pathname)) {
    if (token) {
      return <Navigate to={"/"} />;
    }
  }
  return <Outlet />;
};

export default ProtectedRoutes;
