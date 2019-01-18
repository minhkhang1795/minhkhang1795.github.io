import React, {Component} from 'react';
import './App.css';
import {Link as Link2} from "react-router-dom";

class IARCPage extends Component {

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
                    <Link2 className="nav-link" to="/">About</Link2>
                  </li>
                  <li className="nav-item active mr-4">
                    <Link2 className="nav-link" to="/portfolio/">Portfolio
                      <span className="sr-only">(current)</span>
                    </Link2>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* Main Navigation */}

        {/* Main Layout */}
        <main className="text-center py-5">

          <div className="container">
            <section className="section pt-5 mt-4 pb-3">

              <div className="row">
                <div className="col-md-12">
                  <div className="card hoverable wider reverse card-cascade">

                    <div className="view view-cascade">
                      <div id="carousel" className="carousel slide carousel-fade" data-interval="2500"
                           data-wrap="false" data-ride="carousel">
                        <ol className="carousel-indicators">
                          <li data-target="#carousel" data-slide-to="0" className="active"/>
                          <li data-target="#carousel" data-slide-to="1"/>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <div style={{maxHeight: "65vh", backgroundColor: "transparent"}} align="center">
                              <img className="d-block img-fluid"
                                   alt="Drone and roomba image"
                                   src={process.env.PUBLIC_URL + "/img/post_iarc_1.jpg"}/>
                                <div className="mask"/>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div style={{maxHeight: "65vh", backgroundColor: "transparent"}} align="center">
                              <video className="video-fluid" autoPlay muted loop>
                                <source src={process.env.PUBLIC_URL + "/img/post_iarc_video.mp4"}
                                        type="video/mp4"/>
                              </video>
                              <div className="mask"/>
                            </div>
                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel" role="button"
                           data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"/>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" role="button"
                           data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"/>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>

                    </div>
                    <div className="card-body text-center card-body-cascade">
                      <h2><a className="font-bold">PID Controller for Drone to Track a Target</a></h2>
                      September - December 2017
                    </div>
                  </div>
                </div>

                <div className="section mt-5 px-3">
                  <p align="justify">I'm devoting to Olin AERO - IARC, a
                    student-run organization in which we’re making a drone to compete in the
                    <strong>International Aerial Robotics Competition</strong>, an autonomous multirotor competition
                    where a multirotor is programmed to herd roombas on a basketball court.
                  </p>

                  <p align="justify">I joined the Prediction & Strategy Team and was assigned to design the
                    proportional–integral–derivative (PID) controller for our drone to follow ground targets. Using
                    the PID controller, I then applied our team’s strategies and effectively herded 7 out of 8
                    roombas towards the desired destination in the simulator we built.
                  </p>

                  <p align="justify">Check out the project on our
                    <a target="_blank" rel="noopener"
                       href="https://github.com/Olin-Aero/iarc-2017"> <i
                      className="fa fa-github"/> Github
                      repo</a>.
                  </p>

                  <div className="card reverse hoverable d-block mb-3" style={{maxWidth: "560px"}}>
                    <div className="view">
                      <iframe width="100%" height="315" src="https://www.youtube.com/embed/GmPvm6Nuec0?rel=0"
                              frameBorder="0" allowFullScreen/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">Drone following a ground target (2x speed)</p>
                    </div>
                  </div>

                  <h3 align="justify" className="font-weight-bold">PID controller</h3>
                  <p align="justify">
                    A PID controller was implemented based on <a
                    href="https://en.wikipedia.org/wiki/PID_controller"
                    target="_blank" rel="noopener">the pseudocode on Wikipedia</a>.
                    The K parameters (Kp, Ki, Kd) were tuned appropriately by trial and error.
                  </p>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="card reverse hoverable d-block mb-3 half-screen-img">
                        <div className="view">
                          <img src={process.env.PUBLIC_URL + "/img/post_iarc_follow_1.gif"}
                               alt="follow behavior image 1"
                               className="img-fluid"/>
                            <div className="mask"/>
                        </div>
                        <div className="card-body text-center">
                          <p className="mb-0">Follow behavior with Kp only (proportional). Ki = Kd = 0.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card reverse hoverable d-block mb-3 half-screen-img">
                        <div className="view">
                          <img src={process.env.PUBLIC_URL + "/img/post_iarc_follow_2.gif"}
                               alt="follow behavior image 2"
                               className="img-fluid"/>
                            <div className="mask"/>
                        </div>
                        <div className="card-body text-center">
                          <p className="mb-0">Follow behavior with well-tuned K parameters</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card reverse hoverable d-block mb-3 half-screen-img">
                        <div className="view">
                          <img src={process.env.PUBLIC_URL + "/img/post_iarc_follow_3.gif"}
                               alt="follow behavior image 3"
                               className="img-fluid"/>
                            <div className="mask"/>
                        </div>
                        <div className="card-body text-center">
                          <p className="mb-0">Following a target one meter ahead with well-tuned parameters</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 align="justify" className="font-weight-bold">Initial strategy used with the PID controller</h3>
                  <p align="justify">
                    Our team came up with a very simple strategy that could effectively herd 7/8 roombas out of the
                    field. Our drone will follow one roomba at a time. Every time the roomba heading to
                    the undesired, opposite direction (red region), our drone would land in front of the roomba to
                    stop it and make it turn 180 degrees. If the roomba is heading to either left or right, our
                    drone will hit the button on the top of the roomba in order to rotate it 45 degrees, making sure
                    that the roomba would be heading to the desired destination.
                  </p>
                  <div className="card reverse hoverable d-block mb-3" style={{maxWidth: "560px"}}>
                    <div className="view" style={{backgroundColor: "#fafafa"}}>
                      <iframe width="100%" height="500" src="https://www.youtube.com/embed/cC2sxUrBbjg?rel=0"
                              frameBorder="0" allow="encrypted-media" allowFullScreen/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">Simple strategy herding 7/8 roombas out of the field</p>
                    </div>
                  </div>

                  <h3 align="justify" className="font-weight-bold">Github repo</h3>
                  <a href="https://github.com/Olin-Aero/iarc-2017"
                     style={{color: "#000"}}
                     target="_blank" rel="noopener"><i className="fa fa-github fa-3x mr-2 float-left"/></a>
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

export default IARCPage;
