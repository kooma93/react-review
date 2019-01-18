import React from "react";
import ListEntry from "./ListEntry.jsx";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      string: '',
      arr: []
    };
    this.enterString = this.enterString.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  enterString(e) {
    this.setState({
      string: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      arr: [...this.state.arr, this.state.string]
    })
    document.getElementById("myForm").reset();
  }

  render() {
    return (
      <div>
        Hello from List component!
        <br />
        <form id="myForm">
          Enter String: <input type="text" name="string" onChange={this.enterString} />
          <input type="submit" value="submit" onClick={this.handleSubmit}/>
          <br />
        </form>
        {this.state.arr} <br />
        {this.state.arr.map(element => (
          <ListEntry listItem={element} />
        ))}
      </div>
    )
  }
}

export default List;