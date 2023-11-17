import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/clients/Login.jsx'
import Cadastro from './routes/clients/Cadastro.jsx'
import Forgot from './routes/clients/ForgotPassword.jsx'
import Index from './routes/clients/Index.jsx'

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
  {
    path: "index",
    element: <Index />
  },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
