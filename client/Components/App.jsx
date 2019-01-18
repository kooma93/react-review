import React from "react";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.enterFirstName = this.enterFirstName.bind(this);
    this.enterLastName = this.enterLastName.bind(this);
  }

  enterFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  enterLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  render() {
    return (
      <div>
        Hello from App Component! <br />
        First name: <input type="text" name="first" onChange={this.enterFirstName}/>
        <br />
        {this.state.firstName}
        <br />
        Last name: <input type="text" name="last" onChange={this.enterLastName}/>
        <br />
        {this.state.lastName}
        <br />
        <List />
        <br />
      </div>
    )
  }
}

export default App;