// Import App.css for styles
import './App.css';

// Define a functional component
function GreetingElement() {
  // Define a variable to hold the greeting message
  const greeting = "Hello Function Component";

  // Return JSX
  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

// Export the component so it can be used in other files
export default GreetingElement;
