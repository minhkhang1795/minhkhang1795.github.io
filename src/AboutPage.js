import React, {Component} from 'react';
import './App.css';
import {Link} from "react-scroll";
import {Link as Link2} from "react-router-dom";
import MyMapComponent from "./MapComponent";

class AboutPage extends Component {

    initFunctions() {
        new global.WOW().init();
        // Listener bound to `.stop-propagation`, no delegation
        global.$('.stop-propagation').on('click', function (e) {
            e.stopPropagation();
        });

        const accordionSections = global.$(".collapse-section");
        const accordionIcons = global.$(".accordionIcon");
        for (let i = 0; i < accordionSections.length; i++) {
            accordionSections[i].addEventListener('click', function () {
                accordionIcons[i].getElementsByClassName("plus")[0].classList.toggle("plus-inactive");
                accordionIcons[i].getElementsByClassName("minus")[0].classList.toggle("minus-inactive");
            });
        }
    }

    componentDidMount() {
        this.initFunctions();
    }

    render() {
        return (
            <div className="App">
                {/* Main Navigation */}
                <header>
                    <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                        <div className="container">
                            <Link className="navbar-brand" href="/" to="top" smooth={true} duration={500}>
                                <strong>Minh-Khang Vu</strong>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item active mr-4">
                                        <Link className="nav-link" href="#about" to="about" smooth={true}
                                              duration={500}>About
                                            <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item mr-4">
                                        <Link2 className="nav-link" to="/portfolio/">Portfolio</Link2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="view intro hm-purple-light" id="background">
                        <div className="full-bg-img flex-center">
                            <div className="container text-center white-text wow fadeInUp">
                                <div className="row pt-5 mt-3">
                                    <div className="col-12 mb-3">
                                        <div className="intro-info-content text-center">
                                            <h3 className="display-3 mb-5 white-text font-bold wow fadeInDown"
                                                data-wow-offset="-500"
                                                data-wow-delay="0.3s">
                                                MINH-KHANG
                                                <a className="my-indigo-text font-bold"> VU</a>
                                            </h3>

                                            <Link className="btn my-btn-indigo btn-lg wow fadeInDown"
                                                  data-wow-delay="0.8s"
                                                  data-wow-offset="-500" href="#about"
                                                  to="about" smooth={true} duration={500}>About
                                                me</Link>
                                            <Link2 className="btn btn-outline-indigo btn-lg wow fadeInDown"
                                                   data-wow-delay="0.8s"
                                                   data-wow-offset="-500"
                                                   to="/portfolio/">portfolio</Link2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Main Navigation */}

                {/* Main Layout */}
                <div id="about" style={{display: "block", position: "relative", top: "-50px", visibility: "hidden"}}/>
                <main className="text-center my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <p align="justify">I'm a driven individual who's passionate about engineering projects
                                    that could make a positive impact on the lives of others. My previous experiences
                                    involve full-stack development, AR/VR development, ML/AI & robotics, and tech
                                    consulting.
                                </p>
                                <p align="justify">
                                    Check out <Link2 to="/portfolio/">the portfolio tab</Link2> to learn more about my
                                    projects. You can also find my contact information below.
                                </p>
                            </div>
                        </div>

                        {/* Section: Interests */}
                        <section className="text-center">

                            <h1 className="py-5 font-bold" style={{color: "#0D47A1"}}>
                                <strong>Interests</strong>
                            </h1>

                            <div className="row">

                                <div className="col-md-4 pb-4 pt-4 hoverable wow zoomIn" data-wow-delay="0.2s"
                                     data-wow-duration="0.4s">
                                    <i className="fa fa-code-fork fa-4x green-text"/>
                                    <h5 className="font-bold mt-4 mb-4 my-indigo-text">Software</h5>
                                    <p style={{color: "#616161"}}>I've built native Android and iOS apps over the last
                                        two years. I also
                                        gained
                                        some experience in developing web applications using Django in the Yale
                                        Hackathon 2017.
                                        I'm
                                        planning to learn
                                        NodeJs in the near future to expand my knowledge of server-side development.
                                    </p>
                                </div>

                                <div className="col-md-4 pb-4 pt-4 hoverable wow zoomIn" data-wow-delay="0.2s"
                                     data-wow-duration="0.4s">
                                    <i className="fa fa-cogs fa-4x pink-text"/>
                                    <h5 className="font-bold mt-4 mb-4 my-indigo-text">Robotics</h5>
                                    <p style={{color: "#616161"}}>I've just got involved in Robotics recently when I got
                                        to Olin. I'm
                                        very
                                        interested in this field because I can find many applications that can be used
                                        in real
                                        life. I
                                        hope
                                        to gain more experience in Robotics through my work in the Olin's Robolab.
                                    </p>
                                </div>

                                <div className="col-md-4 pb-4 pt-4 hoverable wow zoomIn" data-wow-delay="0.2s"
                                     data-wow-duration="0.4s">
                                    <i className="fa fa-connectdevelop fa-4x orange-text"/>
                                    <h5 className="font-bold mt-4 mb-4 my-indigo-text">Machine Learning</h5>
                                    <p style={{color: "#616161"}}>I got introduced to Machine Learning through an online
                                        course taught
                                        by Andrew Ng. By challenging myself to complete his course with a certificate, I
                                        became
                                        interested in this field. The knowledge from the course has helped me a lot in
                                        understanding
                                        basic machine learning techniques used in OpenCV and TensorFlow.
                                    </p>
                                </div>

                            </div>

                        </section>
                        {/* Section: Interests */}

                        {/* Section: Honors */}
                        <section className="text-center">

                            <h1 className="py-5 font-bold" style={{color: "#0D47A1"}}>
                                <strong>Certificates & Honors</strong>
                            </h1>

                            <div className="collapse-section" style={{cursor: "pointer"}}>
                                <div data-toggle="collapse" href="#collapseAccordion1" aria-expanded="false"
                                     aria-controls="collapseExample">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="font-weight-bold my-indigo-text"
                                                style={{textAlign: "left"}}>Front-End Web
                                                Developer
                                                Certificate</h4>
                                            <p className="black-text" style={{textAlign: "left"}}>2018 - Grow with
                                                Google Scholarship:
                                                Udacity Front-End Web Developer Nanodegree</p>
                                        </div>
                                        <div className="col-2">
                                            <div className="inactive square mx-auto accordionIcon">
                                                <span className="plus"><i className="fa fa-plus"/></span>
                                                <span className="minus minus-inactive"><i
                                                    className="fa fa-minus"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseAccordion1" style={{textAlign: "left"}}>
                                        <p style={{color: "#616161"}}>This scholarship provides 6 months of access to
                                            the <b>Udacity Front-End Web Developer Nanodegree</b>. Scholarship
                                            recipients will
                                            receive a robust community experience supported by dedicated community
                                            managers and Udacity
                                            mentors. <a href="https://confirm.udacity.com/MQRCMNAZ"
                                                        className="stop-propagation"
                                                        target="_blank" rel="noopener noreferrer">Certificate earned in
                                                October 2018</a>.</p>
                                        <p className="dark-grey-text" style={{fontWeight: "bold"}}>Projects:</p>
                                        <ul>
                                            <li><a href="https://minhkhang1795.github.io/neighborhood-map/"
                                                   target="_blank" rel="noopener noreferrer"
                                                   className="stop-propagation">
                                                Neighborhood Map</a></li>
                                            <li><a
                                                href="https://minhkhang1795.github.io/reactnd-project-myreads-starter/"
                                                target="_blank" rel="noopener noreferrer" className="stop-propagation">
                                                MyReads: A Book Tracking App</a></li>
                                            <li><a href="https://minhkhang1795.github.io/mws-restaurant-stage-1/"
                                                   target="_blank" rel="noopener noreferrer"
                                                   className="stop-propagation">
                                                Restaurant Reviews</a></li>
                                            <li><a
                                                href="https://minhkhang1795.github.io/frontend-nanodegree-arcade-game/"
                                                target="_blank" rel="noopener noreferrer" className="stop-propagation">
                                                Frogger Game</a></li>
                                            <li><a href="https://minhkhang1795.github.io/udacity-matching-game/"
                                                   target="_blank"
                                                   rel="noopener noreferrer" className="stop-propagation">Matching
                                                Game</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <hr className="mt-0"/>
                            </div>

                            <div className="collapse-section" style={{cursor: "pointer"}}>
                                <div data-toggle="collapse" href="#collapseAccordion2" aria-expanded="false"
                                     aria-controls="collapseExample">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="font-weight-bold my-indigo-text"
                                                style={{textAlign: "left"}}>Machine Learning
                                                Certificate</h4>
                                            <p className="black-text" style={{textAlign: "left"}}>2016 - Course by
                                                Stanford University on
                                                Coursera</p>
                                        </div>
                                        <div className="col-2">
                                            <div className="inactive square mx-auto accordionIcon">
                                                <span className="plus"><i className="fa fa-plus"/></span>
                                                <span className="minus minus-inactive"><i
                                                    className="fa fa-minus"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseAccordion2" style={{textAlign: "left"}}>
                                        <p style={{color: "#616161"}}>Machine Learning by Stanford University on
                                            Coursera.
                                            <a href="https://www.coursera.org/account/accomplishments/certificate/CCCYBDSQ3PJ6"
                                               target="_blank" rel="noopener noreferrer"
                                               className="stop-propagation"> Certificate
                                                earned in July 2016</a>.
                                        </p>
                                    </div>
                                </div>

                                <hr className="mt-0"/>
                            </div>

                            <div className="collapse-section" style={{cursor: "pointer"}}>
                                <div data-toggle="collapse" href="#collapseAccordion3" aria-expanded="false"
                                     aria-controls="collapseExample">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="font-weight-bold my-indigo-text"
                                                style={{textAlign: "left"}}>CoderSchool Second
                                                Prize
                                                for Group
                                                Project</h4>
                                            <p className="black-text" style={{textAlign: "left"}}>2016 - Android for
                                                Engineers course</p>
                                        </div>
                                        <div className="col-2">
                                            <div className="inactive square mx-auto accordionIcon">
                                                <span className="plus"><i className="fa fa-plus"/></span>
                                                <span className="minus minus-inactive"><i
                                                    className="fa fa-minus"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseAccordion3" style={{textAlign: "left"}}>
                                        <p style={{color: "#616161"}}>Based on the idea of the book "Never eat alone" by
                                            Keith Ferrazzi, JoinIn is an Android app that helps you find interesting
                                            people around your
                                            place. Whenever you go out, you should try to make new friends. JoinIn is a
                                            perfect
                                            application that helps expand your connections by suggesting like-minded
                                            people who could be
                                            your potential customers, your next best friends or maybe your future
                                            partner.</p>
                                    </div>
                                </div>
                                <hr className="mt-0"/>
                            </div>

                            <div className="collapse-section" style={{cursor: "pointer"}}>
                                <div data-toggle="collapse" href="#collapseAccordion4" aria-expanded="false"
                                     aria-controls="collapseExample">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="font-weight-bold my-indigo-text"
                                                style={{textAlign: "left"}}>CoderSchool Grand
                                                Prize
                                                for Best
                                                Group Project</h4>
                                            <p className="black-text" style={{textAlign: "left"}}>2015 - iOS (Swift) for
                                                Engineers course</p>
                                        </div>
                                        <div className="col-2">
                                            <div className="inactive square mx-auto accordionIcon">
                                                <span className="plus"><i className="fa fa-plus"/></span>
                                                <span className="minus minus-inactive"><i
                                                    className="fa fa-minus"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseAccordion4" style={{textAlign: "left"}}>
                                        <p style={{color: "#616161"}}>TeachMe helps connect college students with nearby
                                            tutors in minutes. Schoolwork is no longer your burden as now you can launch
                                            the app, tap
                                            the button and find experienced tutors nearby with reasonable prices.</p>
                                    </div>
                                </div>
                                <hr className="mt-0 pb-4"/>
                            </div>

                        </section>
                        {/* Section: Honors */}

                        {/* Section: Publications */}
                        <section className="text-center">

                            <h1 className="py-5 font-bold" style={{color: "#0D47A1"}}>
                                <strong>Publications</strong>
                            </h1>

                            <div className="collapse-section" style={{cursor: "pointer"}}>
                                <div data-toggle="collapse" href="#collapseAccordionBlockingZero" aria-expanded="false"
                                     aria-controls="collapseExample">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="font-weight-bold my-indigo-text"
                                                style={{textAlign: "left"}}>Blocking Zero Forcing Processes in Cartesian
                                                Products of Graphs</h4>
                                            <p className="black-text" style={{textAlign: "left"}}>Oct 15, 2020 •
                                                Discrete Applied Mathematics (Volume 285, Pages 380-396)</p>
                                        </div>
                                        <div className="col-2">
                                            <div className="inactive square mx-auto accordionIcon">
                                                <span className="plus"><i className="fa fa-plus"/></span>
                                                <span className="minus minus-inactive"><i
                                                    className="fa fa-minus"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseAccordionBlockingZero" style={{textAlign: "left"}}>
                                        <p style={{color: "#616161"}}>In a zero forcing process, an initial vertex
                                            coloring of a graph is updated iteratively according to the following
                                            conversion rule: an uncolored vertex becomes colored if it is the only
                                            uncolored neighbor of some colored vertex. In this process, a zero forcing
                                            set is an initial set of colored vertices such that all the remaining
                                            vertices will ultimately change from uncolored to colored, and the zero
                                            forcing number is the minimum cardinality of a zero forcing set. We
                                            investigate two related concepts: a zero blocking set is the complement of a
                                            set which is not a zero forcing set, and the zero blocking number is the
                                            minimum cardinality of a zero blocking set. We provide a tight upper bound
                                            for the zero blocking number of Cartesian products of two arbitrary graphs.
                                            Exact values that are smaller than this general upper bound are also
                                            established when one of the graphs in the product is a cycle and the other
                                            is a path with at least as many vertices as the cycle. <a
                                                href="https://doi.org/10.1016/j.dam.2020.06.002"
                                                target="_blank" rel="noopener noreferrer" className="stop-propagation">
                                                 View Publication
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <hr className="mt-0"/>
                            </div>

                            <div className="collapse-section" style={{cursor: "pointer"}}>
                                <div data-toggle="collapse" href="#collapseAccordionPneumask" aria-expanded="false"
                                     aria-controls="collapseExample">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="font-weight-bold my-indigo-text"
                                                style={{textAlign: "left"}}>Pneumask: Modified Full-Face Snorkel Masks
                                                as Reusable Personal Protective Equipment for Hospital Personnel</h4>
                                            <p className="black-text" style={{textAlign: "left"}}>Apr 29, 2020 •
                                                Preprint</p>
                                        </div>
                                        <div className="col-2">
                                            <div className="inactive square mx-auto accordionIcon">
                                                <span className="plus"><i className="fa fa-plus"/></span>
                                                <span className="minus minus-inactive"><i
                                                    className="fa fa-minus"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseAccordionPneumask" style={{textAlign: "left"}}>
                                        <p style={{color: "#616161"}}>I helped develop an Android app that can be used
                                            with Bluetooth earbuds to amplify healthcare workers' voices which got
                                            muffled behind a full-face snorkel mask. <a
                                                href="https://doi.org/10.1101/2020.04.24.20078907"
                                                target="_blank" rel="noopener noreferrer" className="stop-propagation">
                                                View Publication
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <hr className="mt-0"/>
                            </div>

                            <div className="collapse-section" style={{cursor: "pointer"}}>
                                <div data-toggle="collapse" href="#collapseAccordionAR" aria-expanded="false"
                                     aria-controls="collapseExample">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="font-weight-bold my-indigo-text"
                                                style={{textAlign: "left"}}>Leveraging Augmented Reality to Create Apps
                                                for People with Visual Disabilities: A Case Study in Indoor
                                                Navigation</h4>
                                            <p className="black-text" style={{textAlign: "left"}}>Oct 2019 •
                                                ASSETS '19: The 21st International ACM SIGACCESS Conference on Computers
                                                and Accessibility</p>
                                        </div>
                                        <div className="col-2">
                                            <div className="inactive square mx-auto accordionIcon">
                                                <span className="plus"><i className="fa fa-plus"/></span>
                                                <span className="minus minus-inactive"><i
                                                    className="fa fa-minus"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseAccordionAR" style={{textAlign: "left"}}>
                                        <p style={{color: "#616161"}}>I had an amazing opportunity to attend the ASSETS
                                            2019 conference with my research team, the Olin College Crowdsourcing and
                                            Machine Learning Laboratory, led by Professor Paul Ruvolo. Our work on
                                            leveraging augmented reality technology to create indoor navigation apps for
                                            people with visual disabilities won 1st place in the 2019 ASSETS Artifact
                                            Award. <a
                                                href="https://doi.org/10.1145/3308561.3353788"
                                                target="_blank" rel="noopener noreferrer" className="stop-propagation">
                                                View Publication
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <hr className="mt-0"/>
                            </div>

                        </section>
                        {/* Section: Publications */}

                        {/* Section: Contact */}
                        <section className="section my-5">

                            <div className="row">

                                <div className="col-md-12">

                                    <div className="card hoverable">
                                        <div className="row ml-0" style={{width: "100%"}}>
                                            <div className="col-lg-8 hidden-sm-down px-0">
                                                <MyMapComponent ll={{lat: 42.2931671, lng: -71.2636653}}/>
                                            </div>

                                            <div className="col-lg-4"
                                                 style={{backgroundColor: "#0D47A1"}}>

                                                <div className="container text-center" style={{color: "#ffffff"}}>
                                                    <div className="pt-5 pb-4">
                                                        <h3 className="font-bold">Contact Information</h3>
                                                    </div>

                                                    <div className="row align-items-center">
                                                        <div className="col-2">
                                                            <i className="fa fa-map-marker fa-1x"/>
                                                        </div>
                                                        <div className="col-10 text-left">
                                                            Olin College of Engineering
                                                            <br/> 1000 Olin Way, Needham MA
                                                        </div>
                                                    </div>

                                                    <div className="row align-items-center py-4">
                                                        <div className="col-2">
                                                            <i className="fa fa-phone fa-1x"/>
                                                        </div>
                                                        <div className="col-10 text-left">
                                                            (339) 213-0444
                                                        </div>
                                                    </div>

                                                    <div className="row align-items-center">
                                                        <div className="col-2">
                                                            <i className="fa fa-envelope fa-1x"/>
                                                        </div>
                                                        <div className="col-10 text-left">
                                                            <a href="mailto:minhkhang.vu@students.olin.edu?Subject=Hello"
                                                               target="_top" style={{color: "#ffffff"}}>
                                                                <u>minhkhang1795@gmail.com</u>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <hr className="hr-light mb-4 mt-4"/>

                                                    <ul className="inline-ul text-center list-unstyled pb-4">
                                                        <li>
                                                            <a className="icons-sm li-ic"
                                                               href="https://linkedin.com/in/minhkhang1795/"
                                                               target="_blank" rel="noopener noreferrer"
                                                               style={{color: "#ffffff"}}>
                                                                <i className="fa fa-linkedin fa-2x"> </i>
                                                            </a>
                                                        </li>
                                                        <li className="px-4">
                                                            <a className="icons-sm tw-ic"
                                                               href="https://github.com/minhkhang1795/"
                                                               target="_blank" rel="noopener noreferrer"
                                                               style={{color: "#ffffff"}}>
                                                                <i className="fa fa-github fa-2x"/>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a className="icons-sm ins-ic"
                                                               href="https://stackoverflow.com/users/6308776/khang-vu"
                                                               target="_blank" rel="noopener noreferrer"
                                                               style={{color: "#ffffff"}}>
                                                                <i className="fa fa-stack-overflow fa-2x"> </i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </section>
                        {/* Section: Honors */}

                    </div>
                </main>

            </div>
        );
    }
}

export default AboutPage;
