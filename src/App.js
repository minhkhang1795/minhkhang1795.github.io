import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home"
import Portfolio from "./Portfolio"
import Sudoku from "./Sudoku"
import {Link} from "react-scroll/modules";


const AppRouter = () => (
  <Router>
    <div>
      {/* Back to top */}
      <div id="top"/>
      <Link className="hoverable btn-float" href="" id="floatingBtn" to="top" smooth={true} duration={500}>
        <i className="fa fa-chevron-up btn-icon-float"/>
      </Link>

      <Route path="/" exact component={Home} />
      <Route path="/portfolio/" exact component={Portfolio} />
      <Route path="/portfolio/sudoku" component={Sudoku} />

      {/* Copyright */}
      <hr className="mb-4"/>
      <div className="text-center footer-copyright mb-4">
        <div className="container-fluid">
          © Minh-Khang Vu. All rights reserved.
          <br/>Powered by
          <a href="https://www.MDBootstrap.com" target="_blank" rel="noopener noreferrer"> MDBootstrap.com </a>
        </div>
      </div>
      {/* Copyright*/}
    </div>
  </Router>
);

export default AppRouter;