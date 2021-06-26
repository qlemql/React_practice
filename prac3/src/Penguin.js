import React from "react";

const Penguins = (props) => {
  const [count, setCount] = React.useState(3);

  const count_penguins = Array.from({ length: count }, (v, i) => i);

  const penguinAdd = () => {
    setCount(count + 1);
  };

  const penguinRemove = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div className="Penguins">
      {count_penguins.map((num, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: "150px",
              height: "150px",
              margin: "10px",
              backgroundColor: "#eee",
            }}
          >
            PenguiN!
          </div>
        );
      })}
      <button onClick={penguinAdd}>펭귄 추가</button>
      <button onClick={penguinRemove}>펭귄 제거</button>
    </div>
  );
};

export default Penguins;
