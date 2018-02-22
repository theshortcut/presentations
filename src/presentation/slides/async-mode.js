import React from "react";
import { Slide, List, Link } from "spectacle";
import { TitleHeading, AppearItem, InlineJavascript } from "../components";

export default (
  <Slide>
    <TitleHeading fit caps>
      Async Mode
    </TitleHeading>
    <List>
      <AppearItem>
        <InlineJavascript style={{ textDecoration: "line-through" }}>
          React.unstable_AsyncComponent
        </InlineJavascript>
      </AppearItem>
      <AppearItem>
        <InlineJavascript>React.unsafe_AsyncMode</InlineJavascript>
      </AppearItem>
      <AppearItem>
        <span>Provides the same warnings as </span>
        <InlineJavascript>StrictMode</InlineJavascript>
      </AppearItem>
      <AppearItem>
        <span>Demo at </span>
        <Link href="https://build-mbfootjxoo.now.sh/" textColor="fifth">
          https://build-mbfootjxoo.now.sh/
        </Link>
      </AppearItem>
    </List>
  </Slide>
);
