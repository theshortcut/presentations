import React from "react";
import {
  Appear,
  ComponentPlayground,
  Slide,
  SlideSet,
  List,
  Table,
  TableHeaderItem,
  TableItem,
  TableRow,
  TableBody,
  TableHeader
} from "spectacle";
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
        Lifecycle Method Changes
      </TitleHeading>
      <SubTitleHeading fit>
        One new method, 3 deprecated in strict or async modes
      </SubTitleHeading>
      <List>
        <AppearItem>Deprecation notices slated for 16.4</AppearItem>
        <AppearItem>Removals planned for 17.0</AppearItem>
        <AppearItem>Why?</AppearItem>
        <List margin="0 0 0 70px">
          <AppearItem>Preparing for async rendering</AppearItem>
          <AppearItem>Encouraging best practices</AppearItem>
        </List>
      </List>
    </Slide>

    <Slide>
      <TitleHeading fit caps>
        Lifecycle Method Changes
      </TitleHeading>
      <Table margin="50px 0">
        <TableHeader>
          <TableRow>
            <TableHeaderItem>Deprecating</TableHeaderItem>
            <TableHeaderItem>Replacement</TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableItem>
              <Appear>
                <InlineJavascript textSize="2vw">
                  componentWillMount
                </InlineJavascript>
              </Appear>
            </TableItem>
            <TableItem>
              <Appear>
                <InlineJavascript textSize="2vw">
                  componentDidMount
                </InlineJavascript>
              </Appear>
            </TableItem>
          </TableRow>

          <TableRow>
            <TableItem>
              <Appear>
                <InlineJavascript textSize="2vw">
                  componentWillUpdate
                </InlineJavascript>
              </Appear>
            </TableItem>
            <TableItem>
              <Appear>
                <InlineJavascript textSize="2vw">
                  componentDidUpdate
                </InlineJavascript>
              </Appear>
            </TableItem>
          </TableRow>

          <TableRow>
            <TableItem>
              <Appear>
                <InlineJavascript textSize="2vw">
                  componentWillReceiveProps
                </InlineJavascript>
              </Appear>
            </TableItem>
            <TableItem>
              <Appear>
                <InlineJavascript textSize="1.5vw" textColor="fifth">
                  static getDerivedStateFromProps
                </InlineJavascript>
              </Appear>
            </TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>

    <Slide>
      <TitleHeading fit>getDerivedStateFromProps</TitleHeading>
      <List>
        <AppearItem>
          <span>Static method so no access to </span>
          <InlineJavascript>this</InlineJavascript>
        </AppearItem>
        <AppearItem>Receives two arguments:</AppearItem>
        <List margin="0 0 0 70px">
          <AppearItem>
            <InlineJavascript>(nextProps, previousProps)</InlineJavascript>
          </AppearItem>
        </List>
        <AppearItem>Should return:</AppearItem>
        <List margin="0 0 0 70px">
          <AppearItem>
            <span>Updated state data or </span>
            <InlineJavascript>null</InlineJavascript>
          </AppearItem>
          <AppearItem>
            <span>Shallow merged like </span>
            <InlineJavascript>setState</InlineJavascript>
          </AppearItem>
        </List>
      </List>
    </Slide>

    <Slide>
      <ComponentPlayground code={Examples.get("get-derived-state.example")} />
    </Slide>
  </SlideSet>
);
