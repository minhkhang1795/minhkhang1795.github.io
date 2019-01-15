import React, {Component} from 'react';
import './App.css';
import {Link as Link2} from "react-router-dom";

class SetgamePage extends Component {

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
            {/* Section */}
            <section className="section pt-5 mt-4 pb-3">

              {/* Grid row */}
              <div className="row">
                <div className="col-md-12">
                  {/* Featured image */}
                  <div className="card hoverable wider reverse">

                    <div className="view">
                      <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                          {/*<li data-target="#carousel" data-slide-to="0" class="active"></li>*/}
                          <li data-target="#carousel" data-slide-to="1" className="active"/>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <div style={{maxHeight: "50vh", backgroundColor: "#fafafa"}} align="center">
                              <img className="d-block img-fluid" style={{maxHeight: "80vh", maxWidth: "100%"}}
                                   alt="Set team members"
                                   src={process.env.PUBLIC_URL + "/img/post_set_2.jpg"}/>
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
                    <div className="card-body text-center">
                      <h2><a className="font-bold">Robotic Arm Plays the Card Game Set</a></h2>
                      September - December 2017
                    </div>
                  </div>
                </div>

                {/* Excerpt */}
                <div className="section mt-5 px-3">
                  <p align="justify">This was another project in the Olin's Robotics Lab where I worked with three
                    other members to make the robotic arm play the card game Set. I was mainly responsible for
                    creating an algorithm to find a set and actuating the arm.
                  </p>

                  <p align="justify">Check out the project on our
                    <a target="_blank" rel="noopener"
                       href="https://github.com/olinrobotics/irl/tree/master/irl_archive/Fall_2017/set"> <i
                      className="fa fa-github"/> Github
                      repo</a>.
                  </p>

                  <div className="card reverse hoverable d-block mb-3" style={{maxWidth: "560px"}}>
                    <div className="view" style={{backgroundColor: "#fafafa"}}>
                      <iframe width="100%" height="500" src="https://www.youtube.com/embed/5ltQUJUsTWg?rel=0"
                              frameBorder="0" allow="encrypted-media" allowFullScreen/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">Robotic Arm playing Set in action</p>
                    </div>
                  </div>

                  {/* Algorithm */}
                  <h3 align="justify" className="font-weight-bold">Algorithm to find a set</h3>
                  <p align="justify">
                    The basic idea is to look through all possible combinations of 3 cards and check whether they
                    make a set. The algorithm is encapsulated into a class, which can be found <a
                    href="https://github.com/olinrobotics/irl/blob/master/irl_archive/Fall_2017/set/scripts/Set.py"
                    target="_blank" rel="noopener">here</a>.
                  </p>

                  {/* Actuation */}
                  <h3 align="justify" className="font-weight-bold">Robotic arm's actuation</h3>
                  <p align="justify">
                    In this project, the arm will firstly move to the center position above the Set board to take
                    a good picture of the board. After processing the picture and finding 3 cards that make a set,
                    the arm would then move to those cards and pick them up.
                  </p>
                  <div className="card reverse hoverable d-block mb-3 half-screen-img">
                    <div className="view">
                      <img src={process.env.PUBLIC_URL + "/img/post_set_1.jpg"} alt="Robotic arm ready to play the Set game"
                           className="img-fluid"/>
                        <div className="mask"/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">Robotic arm ready to play the Set game</p>
                    </div>
                  </div>

                  {/* Other Links */}
                  <h3 align="justify" className="font-weight-bold">Github repo</h3>
                  <a href="https://github.com/olinrobotics/irl/tree/master/irl_archive/Fall_2017/set"
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

export default SetgamePage;
