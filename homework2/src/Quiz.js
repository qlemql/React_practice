import React from "react";
import styled from "styled-components";
import img from "./images.jpg";
import TinderCard from "react-tinder-card";
import SwipeItem from "./SwipeItem";

const Quiz = (props) => {
  const [num, setNum] = React.useState(0);

  const onSwipe = (direction) => {
    setNum(num + 1);
    console.log("You swiped: " + direction);
  };
  return (
    <QuizContainer>
      <p>
        <span>{num + 1}번 문제</span>
      </p>

      {props.list.map((l, idx) => {
        if (num === idx) {
          return <QuizContent key={idx}>{l.question}</QuizContent>;
        }
      })}

      <QuizAnswerZone>
        <QuizAnswer>O</QuizAnswer>
        <QuizAnswer>X</QuizAnswer>
      </QuizAnswerZone>

      {props.list.map((l, idx) => {
        if (idx === num) {
          return <SwipeItem key={idx} onSwipe={onSwipe} />;
        }
      })}
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  text-align: center;

  & > p > span {
    padding: 5px;
    background-color: #fef5d5;
    border-radius: 15px;
  }
`;

const QuizContent = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const QuizAnswerZone = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const QuizAnswer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 600;
  color: black;
`;

const DragItem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  & img {
    max-width: 150px;
    border-radius: 50%;
  }
`;

export default Quiz;
