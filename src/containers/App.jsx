import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setMobileScreen } from "../rx-actions/dimension";
import { CLIENT_HOME, ADMIN_HOME } from "../constants/path";
import HomeAdmin from "./HomeAdmin";
import HomeClient from "./HomeClient";

class App extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.resize);
  }

  resize = () => {
    let isMobileScreen = window.innerWidth <= 760;

    if (isMobileScreen !== this.props.isMobile) {
      this.props.setMobileScreen(isMobileScreen);
    }
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path={CLIENT_HOME} component={HomeClient} exact/>
          <Route path={ADMIN_HOME} component={HomeAdmin} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.isMobile,
  };
};

export default connect(mapStateToProps, { setMobileScreen })(App);
