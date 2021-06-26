import React from "react";
import styled from "styled-components";

const Score = (props) => {
  return (
    <ScoreContainer>
      <ScoreTitle>
        <span>{props.name}</span> 퀴즈에 <br />
        대한 내 점수는?
      </ScoreTitle>
      <ScoreMyScore>
        <span>100</span>점<p>{props.scoreMsg}</p>
      </ScoreMyScore>
      <ScoreBtn>랭킹보기</ScoreBtn>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
  flex-direction: column;
`;

const ScoreTitle = styled.h1`
  font-size: 28px;
  margin: 0px;
  line-height: 1.4;

  & span {
    background-color: #fef5d4;
    padding: 5px 10px;
    border-radius: 30px;
  }
`;

const ScoreMyScore = styled.div`
  text-align: center;
  & span {
    background-color: #fef5d4;
    padding: 5px 10px;
    border-radius: 30px;
  }

  font-weight: 600;
  font-size: 24px;
  margin: 24px;
  & > p {
    margin: 24px 0px;
    font-size: 16px;
    font-weight: 400;
  }
`;

const ScoreBtn = styled.button`
  padding: 8px 24px;
  background-color: #dadafc;
  border-radius: 30px;
  margin: 8px;
  border: 1px solid #dadafc;
  width: 80vw;
`;

export default Score;
