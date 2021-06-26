import React from "react";
import styled from "styled-components";

const FriendShip = ({ name }) => {
  return (
    <Child>
      <Title>
        나는 <Name>{name}</Name> 에 대해서
        <br /> 얼마나 알고 있을까?
      </Title>
      <ChildInput placeholder="내 이름" />
      <ChildBtn>시작하기</ChildBtn>
    </Child>
  );
};

const Child = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Title = styled.div`
  color: black;
  text-align: center;
  padding-bottom: 20px;
  line-height: 30px;
`;

const Name = styled.span`
  background-color: yellow;
  border-radius: 15px;
  padding: 3px;
`;

const ChildInput = styled.input`
  color: #eee;
  border-radius: 15px;
  border: none;
  background-color: rgb(199, 199, 199);
  width: 150px;
  height: 10px;
  margin-bottom: 20px;
  padding: 10px;
`;

const ChildBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: #218be6;
  color: #eee;
`;

export default FriendShip;
