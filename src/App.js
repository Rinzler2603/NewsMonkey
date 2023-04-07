import './App.css';

import React, { Component } from 'react'
import Navbar from './comp/Navbar';
import News from './comp/News';

import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/business",
    element: <News pageSize={6} country="in" category="business"/>
  },
  {
    path: "/general",
    element: <News pageSize={6} country="in" category="general"/>
  },
  {
    path: "/",
    element: <News pageSize={6} country="in" category="general"/>
  },
  {
    path: "/sports",
    element: <News pageSize={6} country="in" category="sports"/>
  },
  {
    path: "/health",
    element: <News pageSize={6} country="in" category="health"/>
  },
  {
    path: "/entertainment",
    element: <News pageSize={6} country="in" category="entertainment"/>
  },
  {
    path: "/science",
    element: <News pageSize={6} country="in" category="science"/>
  },
  {
    path: "/technology",
    element: <News pageSize={6} country="in" category="technology"/>
  }
]);


export default class App extends Component {
  

  name="Hardik";

  render() {
    return (
      <div>
        <Navbar/>
        {/* <News pageSize={6} country="in" category="general"/> */}
        <RouterProvider router={router} />
      </div>
    )
  }
}
