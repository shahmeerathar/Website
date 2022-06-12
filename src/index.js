import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Shahmeer Athar</h1>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);