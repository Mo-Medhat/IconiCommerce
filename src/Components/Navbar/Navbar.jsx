import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { APIContext } from './../Context/APIContext';

function Navbar() {

  const { cardItem } = useContext(APIContext)


  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      document.querySelector(".navLinks").classList.remove("turning")
    }
  })
  function turningNavbar() {
    document.querySelector(".navLinks").classList.toggle("turning")
  }

  return (
    <>
      <nav className="navbar bg-white py-3 position-relative">
        <div className="container-lg container-fluid">
          <div className="navContent w-100 d-flex align-items-center mb-2">
            <div className="brand me-2">
              <Link to="/" className="mb-0 fw-bold">Iconic</Link>
            </div>
           <div className="rightBar d-flex align-items-center w-100 justify-content-around">
           <div className="searchBar d-flex position-relative w-75 me-auto rounded-pill flex-grow-1">
            <i className="fa-solid fa-magnifying-glass position-absolute p-2 start-0 top-50 translate-middle-y"></i>
              <input type="text" placeholder="" className="input-group py-2 ps-4 w-100"/>
              <span className="">All Category</span> 
            </div>
            <div className="personalInfo d-flex align-items-center justify-content-end">
            <div className="personalSitting">
              <i className="fa-solid fa-user fa-fw"></i>
              </div>
              <Link to="/Cart" className="shoppingCart position-relative">
              <i className="fa-solid fa-bag-shopping fa-fw"></i>
              <span className="selected">{cardItem.length == 0? 0: cardItem.length}</span>
              </Link>
            </div>
           </div>
          </div>
            <div className="navbarLinks w-100">
              <div className="categories"><i class="fa-solid fa-table-cells-large fa-fw fs-5 me-1"></i> Categories <i class="fa-solid fa-angle-down fa-fw fs-5 ms-1"></i></div>
              <div onClick={() => turningNavbar()} className="bars"><i class="fa-solid fa-bars fa-fw fs-4"></i></div>
              <div className="navLinks">
                <div onClick={() => turningNavbar()} className="close"><i class="fa-solid fa-xmark fa-fw fs-5"></i></div>
                <ul className="navbar-nav d-flex">
                  <li className="nav-item"><NavLink className="nav-link px-1 mx-1 active" to="/IconiCommerce">Home</NavLink></li>
                  <li className="nav-item"><span className="nav-link px-1 mx-1">Pages</span></li>
                  <li className="nav-item"><span className="nav-link px-1 mx-1">User Account</span></li>
                  <li className="nav-item"><span className="nav-link px-1 mx-1">Vendor Account</span></li>
                  <li className="nav-item"><span className="nav-link px-1 mx-1">Track My Order</span></li>
                  <li className="nav-item"><span className="nav-link px-1 mx-1">Contact</span></li>
                </ul>
              </div>
            </div>
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
