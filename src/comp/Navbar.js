import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href='/'>NewsMonkey</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href='/'>Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href='/business'>Business</a></li>
                  <li><a class="dropdown-item" href='/entertainment'>Entertainment</a></li>
                  <li><a class="dropdown-item" href='/general'>General</a></li>
                  <li><a class="dropdown-item" href='/health'>Health</a></li>
                  <li><a class="dropdown-item" href='/science'>Science</a></li>
                  <li><a class="dropdown-item" href='/sports'>Sports</a></li>
                  <li><a class="dropdown-item" href='/technology'>Technology</a></li>
                </ul>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
