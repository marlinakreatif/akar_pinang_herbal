import React, { Component } from "react";
import ResponsiveMenu from "../components/ResponsiveMenu";

export default class HomeClient extends Component {
  render() {
    return (
      <div>
        <ResponsiveMenu type="client" />
      </div>
    );
  }
}
