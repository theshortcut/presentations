import React from "react";
import { Slide } from "spectacle";
import { TitleHeading, SubTitleHeading, AppearItem } from "../components";

export default (
  <Slide>
    <TitleHeading fit caps>
      Overview
    </TitleHeading>
    <SubTitleHeading fit>React 16.3.0-alpha.1 has hit NPM</SubTitleHeading>
    <AppearItem>New Context API</AppearItem>
    <AppearItem>New Life-Cycle Methods</AppearItem>
    <AppearItem>Strict Mode</AppearItem>
    <AppearItem>Async Mode</AppearItem>
    <AppearItem>More?</AppearItem>
  </Slide>
);
