import React, {Component} from 'react';
import './App.css';
import {Link} from "react-scroll";
import {Link as Link2} from "react-router-dom";

class Portfolio extends Component {

  render() {
    return (
      <div className="App">
        {/* Back to top */}
        <div id="top"/>
        <Link className="hoverable btn-float" href="" id="floatingBtn" to="top" smooth={true} duration={500}>
          <i className="fa fa-chevron-up btn-icon-float"/>
        </Link>

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
        <main className="text-center py-5">

          <div className="container">

            {/* Section Main */}
            <section className="py-4 text-center text-lg-left">

              {/* Section heading */}
              <h1 className="h1 font-bold text-center mb-5 pt-4">My Projects</h1>
              {/* Section description */}
              <p className="text-center mb-5 pb-3">The projects below belong to many different categories
                including robotics, software, simulation and artificial intelligence.</p>


            </section>

          </div>
        </main>
        {/* Main Layout */}

      </div>
    );
  }
}

export default Portfolio;
