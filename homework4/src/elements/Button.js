import React from "react";
import styled from "styled-components";

function Button(props) {
  const { text, children, is_float, margin, width, padding, _onClick } = props;

  const styles = {
    margin: margin,
    padding: padding,
    width: width,
  };
  return (
    <>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </>
  );
}

Button.defaultProps = {
  text: false,
  children: null,
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
  _onClick: () => {},
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #212121;
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Button;
