import React from "react";
import { ComponentPlayground, Slide, SlideSet, List } from "spectacle";
import {
  TitleHeading,
  SubTitleHeading,
  AppearItem,
  InlineJavascript
} from "../components";
import Examples from "../examples";

export default (
  <SlideSet>
    <Slide>
      <TitleHeading fit caps>
        Strict Mode
      </TitleHeading>
      <SubTitleHeading>
        the new <InlineJavascript>'use strict'</InlineJavascript>?
      </SubTitleHeading>
      <List>
        <AppearItem>
          New component <InlineJavascript>StrictMode</InlineJavascript>
        </AppearItem>
        <AppearItem>Can wrap whole app or any subtree</AppearItem>
        <AppearItem>
          Opts in to deprecation notices and warnings to prep for async
          rendering
        </AppearItem>
      </List>
    </Slide>

    <Slide>
      <ComponentPlayground code={Examples.get("strict-mode.example")} />
    </Slide>
  </SlideSet>
);
