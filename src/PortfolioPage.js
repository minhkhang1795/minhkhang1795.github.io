import React, {Component} from 'react';
import './App.css';
import {Link} from "react-scroll";
import {Link as Link2} from "react-router-dom";
import * as DBHelper from "./DBHelper";
import CardOneComponent from "./CardOneComponent";
import CardTwoComponent from "./CardTwoComponent";

class PortfolioPage extends Component {

  state = {
    posts: [],
    categories: [],
    layoutMode: 'masonry',
    controlToggled: false
  };

  componentDidMount() {
    this.fetchPosts();
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({controlToggled: window.innerWidth > 1800});
  };

  handleBadgeClicked(code) {
    let categories = this.state.categories;

    // Deactivate the category with the corresponding code
    for (let cat of categories) {
      if (cat.code === code) {
        // If it's the last one, don't deactivate (do nothing)
        let activeCats = categories.filter((cat) => !cat.inactive);
        if (!cat.inactive && (!activeCats || activeCats.length === 1))
          return;

        cat.inactive = cat.inactive ? !cat.inactive : "white";
        break;
      }
    }

    this.setState({categories: categories});
  }

  handleMasonryView(gridType) {
    this.setState({layoutMode: gridType});
  }

  filterByCategories(activeCats) {
    let posts = this.state.posts;
    let filteredPosts = [];
    for (let post of posts) {
      loopBreak:
        for (let cat of activeCats) {
          for (let postCat of post.categories) {
            if (postCat.code === cat.code) {
              filteredPosts.push(post);
              break loopBreak;
            }
          }
        }
    }

    return filteredPosts;
  }

  fetchPosts() {
    if (sessionStorage.getItem('data') && sessionStorage.getItem('data').length > 0) {
      let data = JSON.parse(sessionStorage.getItem('data'));
      this.setState({posts: data.posts, categories: data.categories});
    } else {
      DBHelper.getAll().then((data) => {
        if (data) {
          sessionStorage.setItem('data', JSON.stringify(data));
          data.posts.sort((a, b) => new Date(a.startTime) < new Date(b.startTime) ? 1 : -1);
          this.setState({posts: data.posts, categories: data.categories});
        }
      }).catch((e) => {

      })
    }
  }

  toggleControl() {
    this.setState({controlToggled: !this.state.controlToggled})
  }

  render() {
    let {posts, categories, layoutMode, controlToggled} = this.state;
    let activeCats = categories.filter((cat) => !cat.inactive);
    posts = this.filterByCategories(activeCats);

    return (
      <div className="App">

        {/* Left Control */}
        {categories && categories.constructor === Array &&
        <div className={"sticky " + (controlToggled ? "show" : "hide")}>
          <div className="card">
            <div className="control-main" style={{width: "90%"}}>
              <p className="text-right mb-0">
                <i
                  className={"fa fa-th-list fa-1x mr-2 " + (layoutMode === '!masonry' ? "my-indigo-text" : "text-muted")}
                  onClick={() => this.handleMasonryView('!masonry')}/>
                <i className={"fa fa-th fa-1x " + (layoutMode === 'masonry' ? "my-indigo-text" : "text-muted")}
                   onClick={() => this.handleMasonryView('masonry')}/>
              </p>
              <hr className="mb-2 mt-2"/>
              <h5>Categories <span
                className="text-muted h6">({posts.length} {posts.length === 1 ? " project" : " projects"})</span></h5>
              <div className="card-cascade">
                {categories && categories.constructor === Array && categories.map((cat) =>
                    <a key={cat.code} onClick={() => this.handleBadgeClicked(cat.code)}>
                <span
                  className={"badge " + (cat.inactive ? "white text-dark" : cat.color) + " mb-3 mr-1 font-weight-normal"}>
                  #{cat.code}
                </span>
                    </a>
                )}
              </div>
            </div>

            <div className="control-close"
                 style={{width: "10%", height: "100%", right: 0, position: "absolute", cursor: "pointer"}}
                 onClick={() => this.toggleControl()}>
              <i style={{top: "45%", position: "absolute"}}
                 className={"fa ml-2 my-indigo-text " + (controlToggled ? "fa-times" : "fa-chevron-right")}
              />
            </div>
          </div>
        </div>
        }

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

              {layoutMode !== 'masonry' &&
              posts && posts.constructor === Array && posts.map((post, index) =>
                <CardOneComponent key={index} post={post} index={index} isLast={index + 1 === posts.length}/>
              )}

              {layoutMode === 'masonry' &&
              <div className="card-columns">
                {posts && posts.constructor === Array && posts.map((post, index) =>
                  <CardTwoComponent key={index} post={post} index={index} isLast={index + 1 === posts.length}/>
                )}
              </div>
              }

            </section>

          </div>
        </main>
        {/* Main Layout */}

      </div>
    );
  }
}

export default PortfolioPage;
