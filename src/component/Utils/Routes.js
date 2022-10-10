import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage'


import Header from '../Header/Header'
import Home from '../Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
    ],
  },
])

export default router