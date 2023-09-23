import './App.css';

import React, { useState } from 'react'
import Navbar from './comp/Navbar';
import News from './comp/News';

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/business",
    element: <News setProgress={(progress)=>{this.setState({progress:progress})}} pageSize={6} country="in" category="business"/>
  },
  {
    path: "/general",
    element: <News setProgress={(progress)=>{this.setState({progress:progress})}} pageSize={6} country="in" category="general"/>
  },
  {
    path: "/",
    element: <News setProgress={(progress)=>{this.setState({progress:progress})}} pageSize={6} country="in" category="general"/>
  },
  {
    path: "/sports",
    element: <News setProgress={(progress)=>{this.setState({progress:progress})}} pageSize={6} country="in" category="sports"/>
  },
  {
    path: "/health",
    element: <News setProgress={(progress)=>{this.setState({progress:progress})}} pageSize={6} country="in" category="health"/>
  },
  {
    path: "/entertainment",
    element: <News setProgress={(progress)=>{this.setState({progress:progress})}} pageSize={6} country="in" category="entertainment"/>
  },
  {
    path: "/science",
    element: <News setProgress={(progress)=>{this.setState({progress:progress})}} pageSize={6} country="in" category="science"/>
  },
  {
    path: "/technology",
    element: <News setProgress={(progress)=>{this.setState({progress:progress})}} pageSize={6} country="in" category="technology"/>
  }
]);


const App =()=>{
    return (
      <div>
        <Navbar/>
        {/* <News  pageSize={6} country="in" category="general"/> */}
        <RouterProvider router={router} />
      </div>
    )
}

export default App
