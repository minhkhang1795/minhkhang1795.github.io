import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-scroll/modules";
import AboutPage from "./AboutPage"
import PortfolioPage from "./PortfolioPage"
import SudokuPage from "./SudokuPage"
import ScrollToTop from "./ScrollToTop";


const AppRouter = () => (
  <Router onUpdate={() => console.log("update")}>
    <ScrollToTop>
      <div>
        {/* Back to top */}
        <div id="top"/>
        <Link className="hoverable btn-float" href="" id="floatingBtn" to="top" smooth={true} duration={500}>
          <i className="fa fa-chevron-up btn-icon-float"/>
        </Link>

        <Route path="/" exact component={AboutPage}/>
        <Route path="/portfolio/" exact component={PortfolioPage}/>
        <Route path="/portfolio/sudoku" component={SudokuPage}/>

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
    </ScrollToTop>
  </Router>
);

export default AppRouter;