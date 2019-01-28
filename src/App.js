/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component, Fragment } from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import Gradient from "./Gradient";
import gradients from "./gradients";
import { reveal } from "./animations";

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    background: #f5f6fa;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 125%;
    line-height: 1.5;
  }

  body {
    padding: 0;
    margin: 0;
  }

  html,
  body,
  #root {
    min-height: 100vh;
  }
`;

const Heading = styled.h1`
  animation: ${reveal} 0.5s ease-out;
  font-family: "Carter One", cursive;
  font-size: 8vw;
  margin: 0 0 1em;
  text-align: center;
  @media (min-width: 35rem) {
    font-size: 300%;
  }
`;

const Container = styled.main`
  background: ${props =>
    gradients.find(gradient => gradient.id === props.selected).from};
  background: linear-gradient(
    180deg,
    ${props => gradients.find(gradient => gradient.id === props.selected).from}
      0%,
    ${props => gradients.find(gradient => gradient.id === props.selected).to}
      100%
  );
  background-attachment: fixed;
  min-height: 100vh;
  overflow: auto;
  padding: 5%;
`;

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-auto-rows: minmax(9rem, auto);
  grid-gap: 10vw;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      selected: gradients[0].id
    };
  }

  onClick(id) {
    this.setState({ selected: id });
  }

  render() {
    return (
      <Fragment>
        <Global styles={globalStyles} />
        <Container selected={this.state.selected}>
          <Heading>Gradient Picker</Heading>
          <div css={gridStyles}>
            {gradients.map(({ id, from, to }, index) => (
              <Gradient
                key={id}
                delay={(index + 1) / 8}
                fromColor={from}
                toColor={to}
                onClick={() => this.onClick(id)}
              />
            ))}
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default App;
