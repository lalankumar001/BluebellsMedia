import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { BsList } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top ForBackground">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand"></Link>
          <Link to="/home">
            <img src={Logo} alt="Logo" width='155%' height='80'/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggle text-white fs-2"><BsList/></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-dark text-white"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body text-center p-0 gap-0">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fw-semibold fs-4">  
              <li className="nav-item btn btn- fs-6">
                 <Link  to='/home'
                    activeClassName="menu_active"
                    className="nav-link text-white"
                  >
                    Home
                   </Link>
                </li>
                <li className="nav-item">
                  <a
                    activeClassName="menu_active"
                    className="nav-link"
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn- dropdown-toggle fs-6 text-white"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Who We Are
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to='/about_us' className="dropdown-item" href="#">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to='/our_team' className="dropdown-item" href="#">
                            Our team
                          </Link>
                        </li>
                        <li>
                          <Link to='/testimonials' className="dropdown-item" href="#">
                            Our Testimonials
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    activeClassName="menu_active"
                    className="nav-link"
                    
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn- dropdown-toggle fs-6 text-white"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        What We Do
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to='/work_web_dev' className="dropdown-item" href="#">
                            Web Development
                          </Link>
                        </li>
                        <li>
                          <Link to='/work_web_design' className="dropdown-item" href="#">
                            Web Designing
                          </Link>
                        </li>
                        <li>
                          <Link to='/work_digital_marketing' className="dropdown-item" href="#">
                            Digital Marketing
                          </Link>
                        </li>
                        <li>
                          <Link to='/work_smo' className="dropdown-item" href="#">
                            Social Media Optimization 
                          </Link>
                        </li>
                        <li>
                          <Link to='/work_ppc' className="dropdown-item" href="#">
                           Pay Per Click (PPC)
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <Link
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/Contact"
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn- dropdown-toggle fs-6 text-white"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Courses
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                             Web Designing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </li>

                <li className="nav-item btn btn- fs-6">
                 <Link  to='/careers'
                    activeClassName="menu_active"
                    className="nav-link text-white"
                  >
                    Careers
                   </Link>
                </li>
                <li className="nav-item btn btn- fs-6">
                 <Link  to='/blog'
                    activeClassName="menu_active"
                    className="nav-link text-white"
                  >
                    Blog
                   </Link>
                </li>
                
                <li className="nav-item d-grid gap-3 btn btn-  mb-2 Contact_btn">
                  <Link
                    activeClassName="menu_active"
                    className="nav-link text-white"
                    to="/Contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
