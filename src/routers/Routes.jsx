import {
  Navigate,
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsDetails from "../Layout/NewsDetails";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
     path: '/' ,
     element: <LoginLayout/>,
     children:[
      {
        path: '/',
        element: <Navigate to={'/category/0'}/>
      }
      ,
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/register',
        element: <Register/>
      }
     ]
  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [
      {
        path: ':id',
        element: <Category />,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: '/news',
    element: <NewsDetails></NewsDetails>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><News></News></PrivateRoute>
        , loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);
export default router;