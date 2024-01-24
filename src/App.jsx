import './App.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './Onboarding/SignUp/SignUp'
import Login from './Onboarding/Login/Login'
import HomePage from './assets/HomePage'
import Admin from './assets/Admin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/admin",
    element: <Admin />
  }
])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
