import styled from "@emotion/styled";
import { reveal } from "./animations";

const Gradient = styled.button`
  animation: ${reveal} 0.5s ease-out ${props => props.delay}s;
  animation-fill-mode: forwards;
  appearance: none;
  cursor: pointer;
  display: block;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: ${props => props.fromColor};
  background: linear-gradient(
    180deg,
    ${props => props.fromColor} 0%,
    ${props => props.toColor} 100%
  );
  opacity: 0;
  transition: all 0.1s ease-out;
  will-change: opacity, transform;
  :focus,
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export default Gradient;
