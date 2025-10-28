import "./App.css";
import Addpost from "./components/addpost";
import Loadingspinner from "./components/loadingspinner";
import Notfound from "./components/notfound";
import Postlist from "./components/postlist";
import Updatepost from "./components/updatepost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { index: true, element: <Postlist /> },
  { path: "/create", element: <Addpost /> },
  { path: "/update/:postid", element: <Updatepost /> },
  { path: "*", element: <Notfound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
