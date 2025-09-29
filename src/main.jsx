import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/nav.jsx'
import Footer from './components/Footer.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import PageNotFound from './components/pages/pageNotFound.jsx'
import AboutMe from './components/pages/aboutMe.jsx'
import SteelStrings from "./components/pages/SteelStrings.jsx"
import Pillscribe from "./components/pages/Pillscribe.jsx"
import Parkour from "./components/pages/Parkour.jsx"
import Abroad from "./components/pages/Abroad.jsx"
import Art from "./components/pages/Art.jsx"
import ScrollToTop from './components/functions/ScrollToTop.jsx'

const Layout = () => {
  return (
    <>
    <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([{

  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <App />
    },
    {
      path: '*',
      element: <PageNotFound />
    },
    {
      path: '/AboutMe',
      element: <AboutMe />
    },
    {
      path: '/SteelStrings',
      element: <SteelStrings />
    },
    {
      path: '/Pillscribe',
      element: <Pillscribe />
    },
    {
      path: '/Parkour',
      element: <Parkour />
    },
    {
      path: '/Abroad',
      element: <Abroad />
    },
    {
      path: '/Art',
      element: <Art />
    },

  ]
}
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
