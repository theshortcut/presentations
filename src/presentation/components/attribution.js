import React, { Component } from "react";
import { Text } from "spectacle";

class Attribution extends Component {
  render() {
    const { name, author, source, link, license, licenseLink } = this.props;

    return (
      <Text textAlign="left" textSize="1em" textColor="alternate">
        <a href={link}>{name}</a> by
        {author}, {source}. <a href={licenseLink}>{license}</a>{" "}
      </Text>
    );
  }
}

export default Attribution;
