import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    // Calls the constructor method on the Component class
    super();
    // Default value for state
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Robots Rolodex</h1>
        <SearchBox 
          placeholder='search robots...'
          handleChange={this.handleChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
