import {
  createBrowserRouter
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignUp from "../pages/signIn/SignIn";
import JobDetail from "../pages/JobDetail/JobDetail";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";


const router = createBrowserRouter([
  {
    path : "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "/jobs/:id",
          loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`),
          Component: JobDetail
        },
        {
          path: "/jobApply/:id",
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: "/myApplications",
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        }
        ,
        {
            path : "/register",
            Component: Register
        },
        {
          path: "/signUp",
          Component: SignUp
        }
    ]
  },
]);

export default router;