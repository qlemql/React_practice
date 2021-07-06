import React from "react";
import styled from "styled-components";

function Text(props) {
  const { bold, size, color, children } = props;

  const styles = {
    bold: bold,
    size: size,
    color: color,
  };
  return (
    <>
      <P {...styles}>{children}</P>
    </>
  );
}

Text.defaultProps = {
  bold: false,
  color: "#222831",
  size: "14px",
  children: null,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
`;

export default Text;
