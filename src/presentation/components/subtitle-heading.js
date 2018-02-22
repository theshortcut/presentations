import React, { Component } from "react";

import { Heading } from "spectacle";

class TitleHeading extends Component {
  render() {
    return (
      <Heading
        size={5}
        textColor="secondary"
        margin="0 0 50px 0"
        {...this.props}
      >
        {this.props.children}
      </Heading>
    );
  }
}

export default TitleHeading;
