import React from 'react'
import Navbar from './NavBar/NavBar'
import './App.css'
import Home from './Container/Home'
import About from './Container/About'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const  router= createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/> </>
    },
    {
      path:"/About",
      element:<><Navbar/><About/>  </>
    },    
  ])
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App



