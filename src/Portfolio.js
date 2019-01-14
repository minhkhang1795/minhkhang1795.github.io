import React, {Component} from 'react';
import './App.css';
import {Link} from "react-scroll";
import {Link as Link2} from "react-router-dom";

class Portfolio extends Component {

  render() {
    return (
      <div className="App">
        {/* Main Navigation */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark indigo fixed-top scrolling-navbar">
            <div className="container">
              <Link2 className="navbar-brand" to="/">
                <strong>Minh-Khang Vu</strong>
              </Link2>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item mr-4">
                    <Link2 className="nav-link" to="/">About
                    </Link2>
                  </li>
                  <li className="nav-item active mr-4">
                    <Link className="nav-link" to="#top" smooth={true} duration={500}>Portfolio
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* Main Navigation */}

        {/* Main Layout */}
        <main className="text-center my-5">

          <div className="container">

            {/* Section Main */}
            <section className="py-4 text-center text-lg-left">

              {/* Section heading */}
              <h1 className="h1 font-bold text-center mb-5 pt-4">My Projects</h1>
              {/* Section description */}
              <p className="text-center mb-5 pb-3">The projects below belong to many different categories
                including robotics, software, simulation and artificial intelligence.</p>

              <div className="row">

                <div className="col-lg-7 col-xl-7 pb-3">
                  <a>
                    <span className="badge pink mb-3 mr-1 font-weight-normal">#robotics</span>
                  </a>
                  <a>
                    <span className="badge purple mb-3 mr-1 font-weight-normal">#simulation</span>
                  </a>
                  <h3 className="mb-4 font-bold dark-grey-text">
                    <strong>Project Gemini - Collaborative Building</strong>
                  </h3>
                  <p>In the Spring of 2018, our team pulled off our most ambitious project yet, a collaborative
                    building interaction between our twin arms, Pollux and Castor, where any model built by a human
                    could be built by the robotic arms in its life-size form.</p>
                  <p>In this project, I developed perception algorithms to utilize RGB and depth data from the Intel
                    RealSense camera to recognize 3D structures. I also incorporated transformation algorithms to
                    reposition a captured 3D model to a desired coordinate system.</p>
                  <p className="font-italic">February - May 2018</p>
                  <a className="btn btn-indigo btn-md mb-3 ml-0"
                     href="https://www.youtube.com/watch?v=DGbLDu6VkR0&feature=youtu.be" rel="noopener"
                     target="_blank">Read more</a>
                </div>
                <div className="col-lg-5 col-xl-5 mb-5">
                  <div className="view overlay hm-white-slight rounded z-depth-2">
                    <img src={process.env.PUBLIC_URL + '/img/gemini.jpg'}
                         alt="Project gemini picture"
                         className="img-fluid"/>
                    <a href="https://www.youtube.com/watch?v=DGbLDu6VkR0&feature=youtu.be" rel="noopener"
                       target="_blank">
                      <div className="mask"/>
                    </a>
                  </div>
                </div>
              </div>

              <hr className="mb-5 mt-5 pb-3"/>

              <div className="row">

                <div className="col-lg-5 col-xl-5 pb-3">
                  <div className="view overlay hm-white-slight rounded z-depth-2">
                    <img src={process.env.PUBLIC_URL + '/img/main_sudoku.jpg'}
                         alt="Sudoku picture"
                         className="img-fluid"/>
                    <Link2 to="/portfolio/sudoku/">
                      <div className="mask"/>
                    </Link2>
                  </div>
                </div>

                <div className="col-lg-7 col-xl-7">
                  <a>
                    <span className="badge pink mb-3 mr-1 font-weight-normal">#robotics</span>
                  </a>
                  <a>
                    <span className="badge orange mb-3 mr-1 font-weight-normal">#AI</span>
                  </a>
                  <h3 className="mb-4 font-bold dark-grey-text">
                    <strong>Robotic Arm Solves Sudoku</strong>
                  </h3>
                  <p>We programmed a robotic arm to solve a 4x4 Sudoku puzzle by itself (ROS in Python). The robot can
                    be stopped anytime by the user using a built-in command interface. This was one of the team
                    projects in the <a href="https://olinrobotics.github.io/" target="_blank" rel="noopener">Olin's
                      Robotics
                      Lab</a> in the Fall
                    semester of 2017.</p>
                  <p className="font-italic">September - December 2017</p>
                  <Link2 className="btn btn-indigo btn-md mb-3 ml-0"
                     to="/portfolio/sudoku/">Read more</Link2>
                </div>

              </div>

            </section>

          </div>
        </main>
        {/* Main Layout */}

      </div>
    );
  }
}

export default Portfolio;
