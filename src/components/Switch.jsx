import React, { Component } from "react";
import Switch from "react-switch";

export default class MySwitch extends Component {
  constructor() {
    super();
    this.state = { checked: "dark" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}
