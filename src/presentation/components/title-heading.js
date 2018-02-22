import React, { Component } from "react";

import { Heading } from "spectacle";

class TitleHeading extends Component {
  render() {
    return <Heading {...this.props}>{this.props.children}</Heading>;
  }
}

export default TitleHeading;
