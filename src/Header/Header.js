import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";


// class Header extends React.Component {
//     render() {
 const Header=()=>{
        return (
            <div>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <Link to ="/">Home</Link> &nbsp;&nbsp;
        </li>
        <li class="nav-item">
        <Link to ="/about">About</Link>
        &nbsp;&nbsp;

        </li>
        <li class="nav-item">
        <Link to ="/contact">Contact</Link>
        &nbsp;&nbsp;

        </li>
        <li class="nav-item">
        <Link to ="/login">login</Link>
        </li>
       
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        )

    


}
 export default Header