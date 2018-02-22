import React, { Component } from "react";

import { BlockQuote, Quote, Cite } from "spectacle";

class TitleHeading extends Component {
  render() {
    return (
      <BlockQuote>
        <Quote textSize="1em" textColor="secondary">
          {this.props.children}
        </Quote>
        <Cite textColor="tertiary">{this.props.by}</Cite>
      </BlockQuote>
    );
  }
}

export default TitleHeading;
