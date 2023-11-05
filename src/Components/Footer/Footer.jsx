import React from "react";
import {
  FaRegCopyright,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiMapPin, FiPhoneForwarded, FiMail } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import Logo from '../../assets/Logo.png'
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer_bg_color">
      <div className="container row text-center p-3 text-light">
        <div className="col">a</div>
        <div className="col">a</div>
        <div className="col">a</div>  
      </div>
      <div className="Footer"> 
        <div className="text-white">
          <div className="row">
            {/* Fist Colom items here */}
            <div className="col-md-6 col-lg-4 col-12 ft-1">
              <img src={Logo} alt="Logo" width='200' className="mx-5"/>
              <p className="mb-4">
                {" "}
                Join us on this exhilarating journey as we revolutionize the way
                businesses connect, engage, and thrive in the digital and crypto
                landscape.
              </p>
              <div className="footer-icons">
                <i className="fa-brands fa-facebook">
                 <a href="https://www.facebook.com/profile.php?id=100094073347799&is_tour_dismissed=true" target="_blank"><FaFacebook /></a>
                </i>
                <i className="fa-brands fa-twitter">
                 <a href="https://twitter.com/gradico1797" target="_blank"><FaTwitter /></a>
                </i>
                <i className="fa-brands fa-instagram">
                 <a href="https://instagram.com/ggradicoca?igshid=NGExMmI2YTkyZg==" target="_blank"><FaInstagram /></a>
                </i>
                <i className="fa-brands fa-linkedin">
                 <a href="https://www.linkedin.com/in/gradico-global-1720a3281/" target="_blank"><FaLinkedinIn /></a>
                </i>
                <i className="fa-brands fa-youtube">
                 <a href="https://www.linkedin.com/in/gradico-global-1720a3281/" target="_blank"><FaYoutube /></a>
                </i>
              </div>
            </div>
            {/* Second colom item here */}
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5 className="text-primary fw-semibold">About Company</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/about_us">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/testimonials">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/privacy">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/our_packages">
                    Packages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/terms_condition">
                    Terms & Conditions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/cancellation_policy">
                  Cancellation/Refund Policy
                  </a>
                </li>

              </ul>
            </div>
            {/* third colom items here */}
            <div className="col-md-6 col-lg-3 col-12 col-text-center ft-2">
              <h5 className="text-primary fw-semibold">Our Services</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/work_web_dev">
                    Website Development
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/work_web_design">
                    Website Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/work_smo">
                    Social Media Optimization
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/work_ppc">
                    Pay per Click
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="https://adhyantech.com/" target="_blank">
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div>
            {/* forth colom itmes here */}
            <div className="col-md-6 col-lg-2 col-12">
              <h5 className="text-primary fw-semibold">Contact Details</h5>
              <p>
                <i className="fa-solid fa-phone-volume">
                  <FiPhoneForwarded />{" "}
                </i>{" "}
                +91 7759958233
              </p>
              <p>
                <i className="fa-solid fa-envelope">
                  <MdWhatsapp />{" "}
                </i>{" "}
                <a
                  href="https://wa.me/7759958233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  +91 7759958233 {" "}
                </a>
              </p>
              <p>
                <i className="fa-solid fa-envelope">
                  <FiMail />{" "}
                </i>{" "}
                <a
                  href="mailto:support@adhyantech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  support@adhyantech
                </a>
              </p>
              <p>
                <i className="fa-solid fa-paper-plane">
                  <FiMapPin />{" "}
                </i>{" "}
                New Delhi, INDIA.
              </p>
              <span className="btn btn-danger">Make a Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow p-4 w-100 border">
        <p className="text-danger text-center fw-bold mt-2">
          COPYRIGHT <FaRegCopyright /> 2023 | AdhyanTech | All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
