import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home"
import Portfolio from "./Portfolio"


const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/portfolio/" component={Portfolio} />

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