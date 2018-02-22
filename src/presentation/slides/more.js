import React from "react";
import { Slide, List, Link } from "spectacle";
import { TitleHeading, AppearItem, InlineJavascript } from "../components";

export default (
  <Slide>
    <TitleHeading caps>More?</TitleHeading>
    <List>
      <AppearItem>
        <InlineJavascript>componentDidServerRender</InlineJavascript>
        <Link
          href="https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md"
          textColor="fifth"
        >
          RFC
        </Link>
      </AppearItem>
      <List margin="0 0 0 70px">
        <AppearItem>New server-side lifecycle method</AppearItem>
      </List>
      <AppearItem>
        <InlineJavascript>React.createRef</InlineJavascript>
        <Link
          href="https://github.com/reactjs/rfcs/blob/master/text/0017-new-create-ref.md"
          textColor="fifth"
        >
          RFC
        </Link>
      </AppearItem>
      <List margin="0 0 0 70px">
        <AppearItem>Proposed replacement for string refs</AppearItem>
        <AppearItem>Callback refs aren't going anywhere</AppearItem>
      </List>
    </List>
  </Slide>
);
