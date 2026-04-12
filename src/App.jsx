import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Applayout } from "./components/layouts/Applayout"

import "./App.css"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Country } from "./pages/Country"
import { Contact } from "./pages/Contact"
import { Errorpage } from "./pages/Errorpage"
import { CountryDetails } from "./components/layouts/CountryDetails"

// Create Navigation Routes in React router dome using create browser router of modern approach

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
      // Dynamic Route is created and remeber always used this vertical dots : as a dynamic route
      {
        path: "country/:id",
        element: <CountryDetails />
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