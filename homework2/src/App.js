// import Quiz from "./Quiz";
import React from "react";
import Start from "./start";
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "penguin",
      page: "quiz",
      scoreMsg: "이 정도면 펭귄 박사입니다!",
      list: [
        { question: "펭귄은 귀엽다", answer: "O" },
        { question: "펭귄은 커엽다", answer: "O" },
        { question: "펭귄은 qute하다", answer: "O" },
        { question: "펭귄은 귀엽다", answer: "O" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.page === "quiz" && <Quiz list={this.state.list} />}
        {this.state.page === "start" && <Start name={this.state.name} />}
        {this.state.page === "score" && (
          <Score name={this.state.name} scoreMsg={this.state.scoreMsg} />
        )}
      </div>
    );
  }
}

export default App;
