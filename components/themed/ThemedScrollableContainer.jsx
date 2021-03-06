import styled from "styled-components"

const ThemedScrollableContainer = styled.div`
  background: ${(props) =>
    props.theme.shade === "dark" ? "rgb(30,30,30)" : "rgb(252, 252, 252)"};
  color: ${(props) =>
    props.theme.shade === "dark" ? "rgb(252, 252, 252)" : "rgb(51,51,51)"};

  &::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) =>
      props.theme.shade === "dark" ? "rgb(60,60,60)" : " #f1f1f1"};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.theme.shade === "dark" ? "rgb(120,120,120)" : " #888"};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) =>
      props.theme.shade === "dark"
        ? "rgb(120,120,120)"
        : " rgb(110, 110, 110)"};
  }
`

export default ThemedScrollableContainer
