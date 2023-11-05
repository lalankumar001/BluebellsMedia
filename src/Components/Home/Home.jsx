import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUniversity, FaCcVisa } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BsCheck2Square } from "react-icons/bs";

// Working process images from assets/heropages folder
import PlaningSvg from "../../assets/HeroPageImg/Discussion.svg";
import DesigningSvg from "../../assets/HeroPageImg/Design.svg";
import OptamizeSvg from "../../assets/HeroPageImg/Optamize.svg";
import resultSvg from "../../assets/HeroPageImg/result.svg";
import FeedbacSvg from "../../assets/HeroPageImg/Feedback.svg";

// All images imported here
import HeroImg from "../../assets/HeroPageImg/HomeHeroImg.svg";
import Trainimg from "../../assets/HeroPageImg/Train.svg";
import UniversityImg from "../../assets/HeroPageImg/CourseAndUniversity.svg";

import "./Home.css";
import ContactUs from "../../Pages/ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <div className="ForBackground">
        <div className="Adhyan_about">
          <div className="p-5 mt-5">
            <div className="row AbroadEdu_Hero">
              <div
                className="col"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h1 className="text-white fw-semibold mt-5">
                  <span className="Welcome_title">W</span>elcome to{" "}
                  <b className="text-info"> Adhyan</b> , <br /> where your digital
                  dreams come to life! Are you ready to embark on a
                  transformative online journey?
                </h1>
                <br />
                <span className="text-white p-3  AbroadEdu_Hero_text">
                 " Together, let's shape a future where innovation knows no
                  bounds and possibilities are limitless. Join our mission to
                  create a seamless synergy between technology and success,
                  propelling your business to new heights in this exciting
                  digital era."
                </span>
                <p className="fs-5 mt-3 text-light fw-bold">
                  Your adventure 🚀 awaits – are you ready?
                </p>
                <Link to='/home' className="btn btn-danger mt-2 AbroadEdu_StartJourny_btn">
                  Start Your Journey <FaArrowRight />
                </Link>
              </div>
              <div
                className="col text-end"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <img src={HeroImg} alt="Img" width="95%" />
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#a2d9ff"
              fill-opacity="1"
              d="M0,128L80,106.7C160,85,320,43,480,69.3C640,96,800,192,960,197.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          {/* Our Offerings Section Start from here */}
          <div className="Home_Our_offerings">
            <div className="p-3 w-100 row text-center ">
              <h1 className="fw-bold  text-primary text-center ">
                Our Offerings
              </h1>
              <p className="pb-2 text-danger fs-4">
                " Unlocking Growth in the Digital Era with Marketing Prowess and
                Ironclad Security. "
              </p>
              <div className="col-md-4">
                <div
                  className="card service-card animate_animated animate_fadeIn"
                  data-aos="fade-up"
                >
                  <div className="card-body">
                    <span className="card-icon fs-1 text-white">
                      <FaUniversity />
                    </span>
                    <h5 className="card-title fs-6 fw-bold text-white mt-1">
                      Web Development
                    </h5>
                    <p className="card-text text-white">
                      We are passionate about creating top-notch web
                      applications with the newest web technologies
                    </p>
                  </div>
                </div>
              </div>
              {/* Supporting you all the way */}
              <div className="col-md-4">
                <div className="card" data-aos="fade-up">
                  <div className="card-body">
                    <span className="card-icon text-white fs-1">
                      <MdSupportAgent />
                    </span>
                    <h5 className="card-title text-white fw-semibold fs-6">
                      Supporting you all the way
                    </h5>
                    <p className="card-text text-white fs-6">
                      Let us guide your university selection for your goals.
                    </p>
                  </div>
                </div>
              </div>
              {/* FaCcVisa services */}
              <div className="col-md-4">
                <div
                  className="card service-card animate_animated animate_fadeIn"
                  data-aos="fade-up"
                >
                  <div className="card-body">
                    <span className="card-icon fs-1 text-white">
                      <FaCcVisa />
                    </span>
                    <h5 className="card-title text-white fw-semibold fs-6">
                      Visa Consultancy
                    </h5>
                    <p className="card-text text-white">
                      Experience seamless immigration services with us.
                    </p>
                  </div>
                </div>
              </div>
              {/* FaCcVisa services */}
              <div className="col-md-4">
                <div
                  className="card service-card animate_animated animate_fadeIn"
                  data-aos="fade-up"
                >
                  <div className="card-body">
                    <span className="card-icon fs-1 text-white">
                      <FaCcVisa />
                    </span>
                    <h5 className="card-title text-white fw-semibold fs-6">
                      Visa Consultancy
                    </h5>
                    <p className="card-text text-white">
                      Experience seamless immigration services with us.
                    </p>
                  </div>
                </div>
              </div>
              {/* FaCcVisa services */}
              <div className="col-md-4">
                <div
                  className="card service-card animate_animated animate_fadeIn"
                  data-aos="fade-up"
                >
                  <div className="card-body">
                    <span className="card-icon fs-1 text-white">
                      <FaCcVisa />
                    </span>
                    <h5 className="card-title text-white fw-semibold fs-6">
                      Visa Consultancy
                    </h5>
                    <p className="card-text text-white">
                      Experience seamless immigration services with us.
                    </p>
                  </div>
                </div>
              </div>
              {/* FaCcVisa services */}
              <div className="col-md-4">
                <div
                  className="card service-card animate_animated animate_fadeIn"
                  data-aos="fade-up"
                >
                  <div className="card-body">
                    <span className="card-icon fs-1 text-white">
                      <FaCcVisa />
                    </span>
                    <h5 className="card-title text-white fw-semibold fs-6">
                      Visa Consultancy
                    </h5>
                    <p className="card-text text-white">
                      Experience seamless immigration services with us.
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
{/* OUR WORKING PROCESS START FRMO HERE */}
        <div className="Our_working_process">
          <h1 className="text-center fw-semibold p-4 text-light ">Our Working Process</h1>
          {/* First Step Planning Process START FROM HERE */}
          <div className="w-100 row">
            <div className="col-5">
              <img src={PlaningSvg} alt="img" />
            </div>
            <div className="col-1 mt-5 p-5">
              <img
                src={Trainimg}
                alt="img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
            </div>
            <div className="col-6">
              <h1 className="text-dark fw-semibold mt-5">Planning</h1>
              <span className="text-danger-emphasis mt-5">
                Your Dreams, Your Path - Unveiling the Ideal Academic Choices
                for Your Career through Expert Counseling.
              </span>
              <h5 className="fs-4 p-3 fw-semibold">Our Offerings</h5>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Career-oriented counselling
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Course and University Selection
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Application Assistance & Visa Support
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Documentation Support
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Post-Arrival Support
              </p>
              <span className="btn btn-danger">Enquire Now</span>
            </div>
          </div>
          {/* First Step End here */}

          {/* Second Step Designing selection  START FROM HERE*/}
          <div className="w-100 row">
            <div className="col-6">
              <h2 className="text-dark fw-semibold mt-5 mx-3">
                Ui Design & Development
              </h2>
              <p className="text-danger-emphasis mt-3 mx-3 fs-5">
                Unlocking your path to success,We help you choose the ideal
                course, university & country that perfectly match your career,
                academic and budget preferences.
              </p>
              <h5 className="fs-4 p-3 fw-semibold">Our Offerings</h5>
              <p className="fs-5 text-dark mx-3">
                <BsCheck2Square /> Career-oriented counselling
              </p>
              <p className="fs-5 text-dark mx-3">
                <BsCheck2Square /> Course and University Selection
              </p>
              <p className="fs-5 text-dark mx-3">
                <BsCheck2Square /> Application Assistance & Visa Support
              </p>
              <p className="fs-5 text-dark mx-3">
                <BsCheck2Square /> Documentation Support
              </p>
              <p className="fs-5 text-dark mx-3">
                <BsCheck2Square /> Post-Arrival Support
              </p>
              <span className="btn btn-danger mx-3 mb-2">Enquire Now</span>
            </div>
            <div className="col-1 mt-5 p-5">
              <img
                src={Trainimg}
                alt="img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
              <img
                src={Trainimg}
                alt="img"
                className="mt-2"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
            </div>

            <div className="col-5">
              <img src={DesigningSvg} alt="img" />
            </div>
          </div>
          {/*SECOND End Here */}
  {/* THIRD SECTION OR ROW START FROM HERE , OR OPTAMIZE / Quality Analysis SECTION START FORM HERE */}
  <div className="w-100 row">
            <div className="col-5">
              <img src={OptamizeSvg} alt="img" />
            </div>
            <div className="col-1 mt-5 p-5">
              <img
                src={Trainimg}
                alt="img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
              <img
                src={Trainimg}
                alt="img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
              <img
                src={Trainimg}
                alt="img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
            </div>
            <div className="col-6">
              <h1 className="text-dark fw-semibold mt-5">Quality Analysis</h1>
              <span className="text-danger-emphasis mt-5">
                Your Dreams, Your Path - Unveiling the Ideal Academic Choices
                for Your Career through Expert Counseling.
              </span>
              <h5 className="fs-4 p-3 fw-semibold">Our Offerings</h5>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Career-oriented counselling
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Course and University Selection
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Application Assistance & Visa Support
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Documentation Support
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Post-Arrival Support
              </p>
              <span className="btn btn-danger">Enquire Now</span>
            </div>
          </div>
          {/* Third Step End here */}

          {/* FORTH selection  START FROM HERE , OR RESULT SECTION */}
          <div className="w-100 row">
            <div className="col-6">
              <h2 className="text-dark fw-semibold mt-5 mx-3">
              Result 
              </h2>
              <p className="text-danger-emphasis mt-3 mx-3 fs-5">
                Unlocking your path to success,We help you choose the ideal
                course, university & country that perfectly match your career,
                academic and budget preferences.
              </p>
              <h5 className="fs-4 p-3 fw-semibold">Our Offerings</h5>
              <p className="fs-5 text-dark mx-3">
                <BsCheck2Square /> Career-oriented counselling
              </p>
              <p className="fs-5 text-dark mx-3">
                <BsCheck2Square /> Course and University Selection
              </p>
              <p className="fs-5 text-dark mx-3">
                <BsCheck2Square /> Application Assistance & Visa Support
              </p>
              <p className="fs-5 text-dark mx-3">
                <BsCheck2Square /> Documentation Support
              </p>
              <p className="fs-5 text-dark mx-3">
                <BsCheck2Square /> Post-Arrival Support
              </p>
              <span className="btn btn-danger mx-3 mb-2">Enquire Now</span>
            </div>
            <div className="col-1 mt-5 p-5">
              <img
                src={Trainimg}
                alt="img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
              <img
                src={Trainimg}
                alt="img"
                className="mt-2"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
              <img
                src={Trainimg}
                alt="img"
                className="mt-2"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
            </div>

            <div className="col-5">
              <img src={resultSvg} alt="img" />
            </div>
          </div>
{/* Forth Section end here */}
{/* FIFTH SECTION START FORM HERE OR FEEDBACK SECTION START */}
          <div className="w-100 row">
            <div className="col-5">
              <img src={FeedbacSvg} alt="img" />
            </div>
            <div className="col-1 mt-5 p-5">
              <img
                src={Trainimg}
                alt="img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
              <img
                src={Trainimg}
                alt="img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
              <img
                src={Trainimg}
                alt="img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
            </div>
            <div className="col-6">
              <h1 className="text-dark fw-semibold mt-5">Client Feedback & Product Release</h1>
              <span className="text-danger-emphasis mt-5">
                Your Dreams, Your Path - Unveiling the Ideal Academic Choices
                for Your Career through Expert Counseling.
              </span>
              <h5 className="fs-4 p-3 fw-semibold">Our Offerings</h5>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Career-oriented counselling
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Course and University Selection
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Application Assistance & Visa Support
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Documentation Support
              </p>
              <p className="fs-5 text-dark">
                <BsCheck2Square /> Post-Arrival Support
              </p>
              <span className="btn btn-danger">Enquire Now</span>
            </div>
          </div>
          {/* Step End here */}
        </div>
{/* Moving Heading */}
<marquee behavior="scroll" direction="left" className='text-white'>
  <div className="row">
    <div className="col">a</div>
    <div className="col">2</div>
    <div className="col">3</div>
    <div className="col">3</div>
    <div className="col">3</div>
    <div className="col">3</div>
    <div className="col">3</div>
    <div className="col">3</div>
    <div className="col">3</div>
    <div className="col">3</div>
  </div>
</marquee>

<div class="marquee-container">
    <div class="marquee-content">
       <div className="row gap-2">
        <div className="col card">
          <h3>yes</h3>
        </div>
        <div className="col card">
          <h3>yes</h3>
        </div>
        <div className="col card">
          <h3>yes</h3>
        </div>
        <div className="col card">
          <h3>yes</h3>
        </div>
        <div className="col card">
          <h3>yes</h3>
        </div>
        <div className="col card">
          <h3>yes</h3>
        </div>
        <div className="col card">
          <h3>yes</h3>
        </div>
       </div>
    </div>
</div>
          <ContactUs />
      </div>
    </div>
  );
};

export default Home;
