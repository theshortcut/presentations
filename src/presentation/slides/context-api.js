import React from "react";
import { Slide, SlideSet, Layout, List, ComponentPlayground } from "spectacle";
import { TitleHeading, AppearItem, InlineJavascript } from "../components";
import Examples from "../examples";

export default (
  <SlideSet>
    <Slide>
      <TitleHeading fit caps>
        New Context API
      </TitleHeading>
      <List>
        <AppearItem>
          <InlineJavascript>React.createContext(defaultData)</InlineJavascript>
        </AppearItem>
        <List margin="0 0 0 70px">
          <AppearItem>
            <span>Factory function that returns an </span>
            <InlineJavascript>Object</InlineJavascript>
            <span> with two </span>
            <InlineJavascript>Components</InlineJavascript>:
          </AppearItem>
          <AppearItem>
            <InlineJavascript>Provider</InlineJavascript> with a{" "}
            <InlineJavascript>value</InlineJavascript> prop
            <List margin="0 0 0 70px">
              <AppearItem>
                <span>changes to value cause the </span>
                <InlineJavascript>Consumer</InlineJavascript> to re-render
              </AppearItem>
            </List>
          </AppearItem>
          <AppearItem>
            <InlineJavascript>Consumer</InlineJavascript>
            <List margin="0 0 0 70px">
              <AppearItem>uses render props to provide data</AppearItem>
            </List>
          </AppearItem>
        </List>
        <AppearItem>Demo!</AppearItem>
      </List>
    </Slide>
    <Slide>
      <Layout>
        <ComponentPlayground code={Examples.get("context-api.example")} />
      </Layout>
    </Slide>
  </SlideSet>
);
