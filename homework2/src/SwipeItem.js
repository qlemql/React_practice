import React from "react";
import styled from "styled-components";
import img from "./images.jpg";

const SwipeItem = React.memo(({ onSwipe }) => {
  const swipe_div = React.useRef(null);

  let swipe_status = "ready";
  let target_className = "";
  let coordinate = {
    start_x: 0,
    start_y: 0,
    end_x: 0,
    end_y: 0,
  };

  React.useEffect(() => {
    const reset = () => {};

    const touchStart = (e) => {
      swipe_status = "touchstart";
      target_className = swipe_div.current.className;

      coordinate = {
        ...coordinate,
        start_x: e.touches[0].clientX,
        start_y: e.touches[0].clientY,
      };
    };

    const touchEnd = (e) => {
      swipe_status = "touchend";

      coordinate = {
        ...coordinate,
        end_x: e.changedTouched[0].clientX,
        end_y: e.changedTouched[0].clientY,
      };

      let diff_x = coordinate.end_x - coordinate.start_x;
      let direct = "left";

      if (diff_x > 0) {
        direct = "right";
      } else {
        direct = "left";
      }

      onSwipe(direct);
    };

    const touchMove = (e) => {};

    const touchCancel = (e) => {};

    return () => {
      if (!swipe_div.current) {
        return;
      }
      swipe_div.current.removeEventListener("touchstart", touchStart);
      swipe_div.current.removeEventListener("touchmove", touchMove);
      swipe_div.current.removeEventListener("touchend", touchEnd);
      swipe_div.current.removeEventListener("touchcancel", touchCancel);
    };
  }, []);
  return (
    <DragItem ref={swipe_div}>
      <img src={img} alt="penguin" />
    </DragItem>
  );
});

SwipeItem.defaultProps = {
  onSwipe: () => {},
};

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

export default SwipeItem;
