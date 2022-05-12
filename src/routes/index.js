import Upload from "../pages/Upload/Upload";
import Following from "../pages/Following/Following";
import Home from "../pages/HomePage/Home";
import Profile from "../pages/Profile";
import HeaderOnlyLayout from "../components/Layout/haederOnly/HeaderOnlyLayout";

const publicRoute = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnlyLayout },
  { path: "/search", component: Upload },
];

const privateRoute = [];

export { publicRoute, privateRoute };
