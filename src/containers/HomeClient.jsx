import React, { Component } from "react";
import ResponsiveMenu from "../components/ResponsiveMenu";
import Dashboard from "./dashboard";

export default class HomeClient extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef;
  }
  render() {
    return (
      <div id="home-body">
        <Dashboard />
      </div>
    );
  }
}
