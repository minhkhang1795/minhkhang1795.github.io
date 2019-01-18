import React, {Component} from 'react';
import './App.css';
import {Link as Link2} from "react-router-dom";

class SudokuPage extends Component {

  render() {
    return (
      <div className="App">
        {/* Main Navigation */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark my-indigo fixed-top scrolling-navbar">
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
        <main className="text-center my-5">

          <div className="container">
            {/* Section */}
            <section className="section pt-5 mt-4 pb-3">

              {/* Grid row */}
              <div className="row">
                <div className="col-md-12">
                  {/* Featured image */}
                  <div className="card hoverable wider reverse card-cascade">

                    <div className="view view-cascade">
                      {/* Carousel Wrapper */}
                      <div id="carousel" className="carousel slide carousel-fade" data-interval="2500"
                           data-wrap="false" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                          <li data-target="#carousel" data-slide-to="0" className="active"/>
                          <li data-target="#carousel" data-slide-to="1"/>
                        </ol>
                        {/* Indicators */}

                        {/* Slides */}
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <div style={{maxHeight: "50vh", backgroundColor: "transparent"}} align="center">
                              <img className="d-block img-fluid"
                                   src={process.env.PUBLIC_URL + "/img/post_sudoku_1.jpg"} alt="Sudoku team members"/>
                                <div className="mask"/>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div style={{maxHeight: "50vh", backgroundColor: "transparent"}} align="center">
                              <video className="video-fluid" autoPlay muted loop>
                                <source src={process.env.PUBLIC_URL + "/img/post_sudoku_video.mp4"} type="video/mp4"/>
                              </video>
                              <div className="mask"/>
                            </div>
                          </div>
                        </div>
                        {/* Slides */}

                        {/* Controls */}
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
                        {/* Controls */}
                      </div>
                      {/* Carousel Wrapper */}

                    </div>
                    {/* Post data */}
                    <div className="card-body text-center card-body-cascade">
                      <h2><a className="font-bold">Robotic Arm Solves Sudoku</a></h2>
                      September - December 2017
                    </div>
                    {/* Post data */}
                  </div>

                </div>

                {/* Excerpt */}
                <div className="section mt-5 px-3">
                  <p align="justify">This was one of my projects in the Olin's Robotics Lab in the first semester
                    of my freshman year. I joined the Interactive Robotics Laboratory subteam whose goal is
                    to control robotic arms to interact with humans or to complete a task. I then teamed up with
                    two other Oliners to work on the Sudoku project, which was quite challenging but very
                    interesting to me because I love solving puzzles.
                  </p>

                  <p align="justify">I developed algorithms to solve Sudoku puzzles and to capture a physical Sudoku
                    board including locating and recognizing digits using the k-NN algorithm.
                  </p>

                  <p align="justify">Check out the project on our
                    <a target="_blank" rel="noopener noreferrer"
                       href="https://github.com/olinrobotics/irl/tree/master/irl_archive/Fall_2017/sudoku_solver"> <i
                      className="fa fa-github"/> Github repo</a>.
                  </p>

                  <div className="card reverse hoverable d-block mb-3" style={{maxWidth: "560px"}}>
                    <div className="view">
                      <iframe width="100%" height="315" src="https://www.youtube.com/embed/daD_tu2qKgI?rel=0"
                              frameBorder="0" allowFullScreen/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">Robotic arm solving Sudoku in action (2x speed)</p>
                    </div>
                  </div>

                  <div className="card reverse hoverable d-block mb-3" style={{maxWidth: "560px"}}>
                    <div className="view">
                      <iframe width="100%" height="315" src="https://www.youtube.com/embed/GbFAwwxgSCA?rel=0"
                              frameBorder="0" allowFullScreen/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">Robotic arm solving Sudoku in action (2x speed)</p>
                    </div>
                  </div>

                  {/* Sudoku Algorithm */}
                  <h3 align="justify" className="font-weight-bold">Algorithm to solve a Sudoku puzzle</h3>
                  <p align="justify">
                    An algorithm to solve a sudoku puzzle was inspired by the paper: <a
                    href="https://www.ams.org/notices/200904/tx090400460p.pdf" target="_blank" rel="noopener noreferrer">A
                    Pencil-and-Paper
                    Algorithm for
                    Solving Sudoku Puzzles</a>.
                  </p>
                  <p align="justify">
                    You can find the algorithm written in Python here: <a
                    href="https://github.com/olinrobotics/irl/tree/master/irl_archive/Fall_2017/sudoku_solver/scripts/sudoku_algorithm"
                    target="_blank" rel="noopener noreferrer">
                    Sudoku algorithm</a>.
                  </p>
                  <div className="card reverse hoverable d-block mb-3 half-screen-img">
                    <div className="view">
                      <img src={process.env.PUBLIC_URL + "/img/post_sudoku_6.jpg"} alt="Printing sudoku board" className="img-fluid"/>
                        <div className="mask"/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">A 4x4 sudoku board used in this project (24" x 24")</p>
                    </div>
                  </div>

                  {/* Board Processing */}
                  <h3 align="justify" className="font-weight-bold">Capturing the board and processing the digits</h3>
                  <p align="justify">
                    The picture taken by the robotic arm would be processed using <a
                    href="https://docs.opencv.org/3.3.1/d7/d4d/tutorial_py_thresholding.html" target="_blank"
                    rel="noopener noreferrer">adaptive
                    thresholding techniques</a> in OpenCV.
                  </p>
                  <div className="card reverse hoverable d-block mb-3 half-screen-img">
                    <div className="view">
                      <img src={process.env.PUBLIC_URL + "/img/post_sudoku_7.jpg"} alt="Sudoku raw" className="img-fluid"/>
                        <div className="mask"/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">Picture taken from the robotic arm</p>
                    </div>
                  </div>

                  <p align="justify">
                    We then find the contour of the Sudoku board from
                    the processed image and apply <a
                    href="https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_imgproc/py_geometric_transformations/py_geometric_transformations.html#perspective-transformation"
                    target="_blank" rel="noopener noreferrer">perspective transformation</a> on the contour to get a
                    perfect-square image
                    of the Sudoku grid.
                  </p>
                  <div className="card hoverable d-block mb-3 half-screen-img">
                    <div className="view" align="center">
                      <img src={process.env.PUBLIC_URL + "/img/post_sudoku_9.jpg"} alt="Sudoku picture processed" className="img-fluid"/>
                        <div className="mask"/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">Processed image after adaptive thresholding <br/> and perspective
                        transformation</p>
                    </div>
                  </div>

                  <p align="justify">
                    Finally, we crop out each digit and apply <a
                    href="https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_ml/py_knn/py_knn_understanding/py_knn_understanding.html#knn-in-opencv"
                    target="_blank" rel="noopener noreferrer">k-NN algorithm in OpenCV</a> to predict the digits.
                  </p>
                  <div className="card hoverable d-block mb-3 half-screen-img">
                    <div className="view" align="center">
                      <img src={process.env.PUBLIC_URL + "/img/post_sudoku_8.jpg"} alt="Sudoku result" className="img-fluid"/>
                        <div className="mask"/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">Final result</p>
                    </div>
                  </div>

                  <p align="justify">
                    Using the Sudoku algorithm above, we'll find a solution for this puzzle.
                  </p>
                  <div className="card hoverable d-block mb-3 half-screen-img">
                    <div className="view" align="center">
                      <img src={process.env.PUBLIC_URL + "/img/post_sudoku_10.jpg"} alt="A solved Sudoku puzzle" className="img-fluid"/>
                        <div className="mask"/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">A solved Sudoku puzzle</p>
                    </div>
                  </div>

                  {/* Actuation */}
                  <h3 align="justify" className="font-weight-bold">Actuation of the Robotic Arm</h3>
                  <p align="justify">
                    In this project, the arm will move to the center position above the Sudoku board to take
                    a good picture of the board. After processing the picture and solving the Sudoku puzzle, the arm
                    would then move to each empty cell and write the solution.
                  </p>
                  <div className="card reverse hoverable d-block mb-3 half-screen-img">
                    <div className="view">
                      <img src={process.env.PUBLIC_URL + "/img/post_sudoku_5.jpg"} alt="The arm writing digits" className="img-fluid"/>
                        <div className="mask"/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">The arm is writing digits on the board</p>
                    </div>
                  </div>

                  <div className="card reverse hoverable d-block mb-3 half-screen-img">
                    <div className="view">
                      <img src={process.env.PUBLIC_URL + "/img/post_sudoku_11.jpg"} alt="The arm solved the puzzle" className="img-fluid"/>
                        <div className="mask"/>
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0">The arm solved the puzzle</p>
                    </div>
                  </div>

                  <p align="justify">
                    Check out the <a
                    href="https://github.com/olinrobotics/irl/blob/master/irl_archive/Fall_2017/sudoku_solver/scripts/sudoku_main.py#L358"
                    target="_blank" rel="noopener noreferrer">main function</a> to see how the arm moves.
                  </p>

                  {/* Other Links */}
                  <h3 align="justify" className="font-weight-bold">Github repo</h3>
                  <a href="https://github.com/olinrobotics/irl/tree/master/irl_archive/Fall_2017/sudoku_solver"
                     style={{color: "#000"}}
                     target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-3x mr-2 float-left"/></a>
                </div>
              </div>
              {/* Grid row */}

            </section>
            {/* Section */}

          </div>
        </main>
        {/* Main Layout */}

      </div>
    );
  }
}

export default SudokuPage;
