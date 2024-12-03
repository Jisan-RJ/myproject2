import React from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Home from './pages/Home'
import AllLaptop from './pages/AllLaptop'
import AllMobile from './pages/AllMobile'
import Layout from './components/root/Layout'
import Signup from './pages/Signup'
import AllTablet from './pages/AllTablet'

let multipage = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/laptop' element={<AllLaptop/>}></Route>
    <Route path='/mobile' element={<AllMobile/>}></Route>
    <Route path='/tablet' element={<AllTablet/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </Route>
))
const App = () => {
  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App