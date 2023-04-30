import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';
import {
  RouterProvider
} from "react-router-dom";
import router from './routers/Routes';
import AuthProvider from './Provider/AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
)
