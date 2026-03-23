import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Applayout } from "./components/layouts/Applayout"

import "./App.css"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Country } from "./pages/Country"
import { Contact } from "./pages/Contact"
import { Errorpage } from "./pages/Errorpage"

// Create Navigation Routes in React router dome using create browser router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App