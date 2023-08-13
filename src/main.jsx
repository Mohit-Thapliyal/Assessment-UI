import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './components/error-page'
// import Dashboard from './components/dashboard'
import Assessment from './components/assessment'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Assessment/>
      },
      {
        path: "/dashboard",
        element: <Assessment/>
      },
      {
        path: "/assessment",
        element: <Assessment/>
      },
      {
        path: "/my-library",
        element: <Assessment/>
      },
      {
        path: "/round-status",
        element: <Assessment/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
