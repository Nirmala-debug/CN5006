
import React from 'react';

class FacebookEmojiCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.increment = this.increment.bind(this);
    this.pic = null;

    // Dynamically set the image based on the 'type' prop passed.
    if (this.props.type === "Love") {
      this.pic = require('./image/Love.png');  // Correct path for Love image
    } else if (this.props.type === "Like") {
      this.pic = require('./image/like.png');  // Correct path for Like image
    } else if (this.props.type === "happy") {
      this.pic = require('./image/happy.png');  // Correct path for Happy image
    }
  }

  increment() {
    this.setState((prevState) => {
      return { number: prevState.number + 1 };
    });
  }

  render() {
    return (
      <div>
        <h5>It is {this.state.number} {this.props.type}.</h5>
        <button onClick={this.increment}>
          <img src={this.pic} alt="Emoji" />
          <b>{this.state.number}</b>
        </button>
      </div>
    );
  }
}

export default FacebookEmojiCounter;
