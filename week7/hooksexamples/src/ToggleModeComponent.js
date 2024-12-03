import React from 'react';
import sad from './image/sad.png';  // Correct path for sad image
import happy from './image/happy.png';  // Correct path for happy image

class ToggleMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pic: happy };  // Initially set to happy
    this.Toggle_Mode = this.Toggle_Mode.bind(this);
  }

  Toggle_Mode() {
    // Toggle between happy and sad images
    this.setState((prevState) => {
      if (prevState.pic === sad) {
        return { pic: happy };  // Switch to "happy"
      } else {
        return { pic: sad };  // Switch to "sad"
      }
    });
  }

  render() {
    return (
      <div>
        {/* Display the current mode dynamically */}
        <h3>This is output of Task2: {this.state.pic === sad ? 'Sad' : 'Happy'}</h3>
        
        {/* Button to toggle the mode */}
        <button onClick={this.Toggle_Mode}>
          <img src={this.state.pic} alt="Emoji" />
        </button>
      </div>
    );
  }
}

export default ToggleMode;
