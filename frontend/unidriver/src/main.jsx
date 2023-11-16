import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/client/Login.jsx'
import Cadastro from './routes/client/Cadastro.jsx'
import Forgot from './routes/client/ForgotPassword.jsx'

import{ createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "cadastro",
    element: <Cadastro />
  },
  {
    path: "forgot",
    element: <Forgot />
  },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
