import React, { Component } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1 className="header">Simple To-Do List Application</h1>
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default App;
