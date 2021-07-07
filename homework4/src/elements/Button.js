import React from "react";
import styled from "styled-components";

function Button(props) {
  const { text, children, is_float, margin, width, padding, _onClick } = props;

  if (is_float) {
    return (
      <>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </>
    );
  }

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

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  position: fixed;
  bottom: 50px;
  right: 16px;
  border: none;
  border-radius: 50px;
`;

export default Button;
