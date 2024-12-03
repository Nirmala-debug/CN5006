import './App.css';

function AppBackgroundColor(props) {
  function greetUser(e) {
    const color = document.getElementById(props.color).value;
    document.body.style.backgroundColor = color;
    alert("Welcome Mr " + color); // Shows an alert with the color entered
  }
  return (
    <div className="App" style={{ backgroundColor: 'powderblue', color: 'black' }}>
      <h1>{props.heading}</h1>
      <p style={{ color: 'blue', fontSize: '30px', fontFamily: 'Arial' }}>
        How to create a function component.
      </p>

      <label className="label" id="lbl">{props.lbl}</label>
      <input id={props.color} type="text" placeholder="Enter color" />
      <button value={props.color} onClick={greetUser}>
        Colour me {props.color}
      </button>
    </div>
  );
}
export default AppBackgroundColor;
