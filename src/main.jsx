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
import JobDetails from './component/JobDetails/JobDetails'
import Job from './component/Job/Job'
import NotFind from './component/NotFind/NotFind'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <First />,
        loader: () => fetch('/categories.json'),

      },
      {
        path: 'jobdetails/:jobdetailsId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobsfile.json'),
      },
      {
        path: "jobs",
        element: <Job></Job>
      },

      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'appliedjobs',
        element: <AppliedJobs />,
        loader: () => fetch('/jobsfile.json'),
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: '*',
        element: <NotFind></NotFind>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
