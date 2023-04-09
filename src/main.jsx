import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './component/Home/Home'
import Blog from './component/Blog/Blog'
import First from './component/First/First'
import Statistics from './component/Statistics/Statistics'
import AppliedJobs from './component/AppliedJobs/AppliedJobs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <First />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'appliedjobs',
        element: <AppliedJobs />
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
