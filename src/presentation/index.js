import React from "react";
import { Deck } from "spectacle";
import * as Slides from "./slides";
import theme from "./theme";

const Presentation = () => (
  <Deck theme={theme} transition={["zoom", "slide"]} transitionDuration={500}>
    {Slides.Intro}
    {Slides.Overview}
    {Slides.ContextAPI}
    {Slides.LifecycleMethods}
    {Slides.StrictMode}
    {Slides.AsyncMode}
    {Slides.More}
  </Deck>
);

export default Presentation;
