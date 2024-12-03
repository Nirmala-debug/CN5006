// mygreetingprop.js

import './App.css';  // Optional: This is for styling, you can use it if needed.

function GreetingElementwithProp(props) {
  return (
    <div className="App">
      <h1>{props.msg}</h1> {/* Display the message passed through the 'msg' prop */}
    </div>
  );
}

export default GreetingElementwithProp;  // Export the component to use in other files
