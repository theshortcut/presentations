import React, { Component } from "react";
import { Appear, ListItem } from "spectacle";

class AppearItem extends Component {
  render() {
    return (
      <Appear>
        <ListItem textAlign="left" {...this.props}>
          {this.props.children}
        </ListItem>
      </Appear>
    );
  }
}

export default AppearItem;
