import React, { Component } from "react";
import { Code } from "spectacle";

class InlineJavascript extends Component {
  render() {
    return (
      <Code lang="javascript" textColor="secondary" {...this.props}>
        {this.props.children}
      </Code>
    );
  }
}

export default InlineJavascript;
