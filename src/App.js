import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

// Import Materialize
import M from "materialize-css";

class App extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    //const { classes } = this.props;
    return (
      <Fragment>
        {/* Nav bar */}
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <Link id="logo-container" to="#" className="brand-logo">
              Dataclan Ltd
            </Link>
            <ul className="right hide-on-med-and-down text-darken-2">
              <li>
                <Link to="#">Contact us</Link>
              </li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li>
                <Link to="#">Navbar Link</Link>
              </li>
            </ul>
            <Link href="#" data-target="nav-mobile" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
          </div>
        </nav>

        <div id="index-banner" class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <br />
              <br />
              <h1 class="header center teal-text text-lighten-2">
                A Ugandan based AI startup
              </h1>
              <div class="row center">
                <h5 class="header col s12 light">
                  A pace setter in realtime analytics leveraging machine
                  learning powered data pipelines
                </h5>
              </div>
              <div class="row center">
                <Link
                  href=""
                  id="download-button"
                  class="btn-large waves-effect waves-light teal lighten-1"
                >
                  Contact us
                </Link>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div class="parallax">
            <img src="background1.jpg" alt="Unsplashed background img 1" />
          </div>
        </div>

        <div class="container">
          <h3 class="header center teal-text text-lighten-2">Portfolios</h3>
          <div class="section">
            {/* Icon Section*/}
            <div class="row">
              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center brown-text">
                    <i class="material-icons">flash_on</i>
                  </h2>
                  <h5 class="center">Data Analytics</h5>

                  <p class="light">
                    We did most of the heavy lifting for you to provide a
                    default stylings that incorporate our custom components.
                    Additionally, we refined animations and transitions to
                    provide a smoother experience for developers.
                  </p>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center brown-text">
                    <i class="material-icons">group</i>
                  </h2>
                  <h5 class="center">Machine Learning</h5>

                  <p class="light">
                    By utilizing elements and principles of Material Design, we
                    were able to create a framework that incorporates components
                    and animations that provide more feedback to users.
                    Additionally, a single underlying responsive system across
                    all platforms allow for a more unified user experience.
                  </p>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center brown-text">
                    <i class="material-icons">settings</i>
                  </h2>
                  <h5 class="center">Software Development</h5>

                  <p class="light">
                    We have provided detailed documentation as well as specific
                    code examples to help new users get started. We are also
                    always open to feedback and can answer any questions a user
                    may have about Materialize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="parallax-container valign-wrapper">
          <div class="section no-pad-bot">
            <div class="container">
              <div class="row center">
                <h5 class="header col s12 light">
                  A modern responsive front-end framework based on Material
                  Design
                </h5>
              </div>
            </div>
          </div>
          <div class="parallax">
            <img src="background2.jpg" alt="Unsplashed background img 2" />
          </div>
        </div>

        <div class="container">
          <div class="section">
            <div class="row">
              <div class="col s12 center">
                <h3>
                  <i class="mdi-content-send brown-text"></i>
                </h3>
                <h4>Contact Us</h4>
                <p class="left-align light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam scelerisque id nunc nec volutpat. Etiam pellentesque
                  tristique arcu, non consequat magna fermentum ac. Cras ut
                  ultricies eros. Maecenas eros justo, ullamcorper a sapien id,
                  viverra ultrices eros. Morbi sem neque, posuere et pretium
                  eget, bibendum sollicitudin lacus. Aliquam eleifend
                  sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet
                  semper molestie. Morbi massa odio, condimentum sed ipsum ac,
                  gravida ultrices erat. Nullam eget dignissim mauris, non
                  tristique erat. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia Curae;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="parallax-container valign-wrapper">
          <div class="section no-pad-bot">
            <div class="container">
              <div class="row center">
                <h5 class="header col s12 light">
                  A Ugandan AI start-up with over 10 years experience innovating
                  technology solutions.
                </h5>
              </div>
            </div>
          </div>
          <div class="parallax">
            <img src="background3.jpg" alt="Unsplashed background img 3" />
          </div>
        </div>

        {/* Footer */}
        <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">
                  We are a team of software engineers coming from diverse
                  backgrounds including engineering, computer science among
                  others working on building soltions to complex problems using
                  data science, software development and analytics.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Designed by{" "}
              <a
                className="brown-text text-lighten-3"
                href="http://materializecss.com"
              >
                Dataclan Ltd
              </a>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
