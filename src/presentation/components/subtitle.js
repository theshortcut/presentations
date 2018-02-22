import React, { Component } from "react";

import { Text } from "spectacle";

class TitleHeading extends Component {
  render() {
    return (
      <Text textSize="1.5em" textColor="tertiary">
        {this.props.children}
      </Text>
    );
  }
}

export default TitleHeading;
