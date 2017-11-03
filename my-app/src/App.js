import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    }
  }

  onChange = (event) => {
    this.setState({term: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault(); //this is to stop the form from autimatically submitting
    this.setState({
      term: "",
      items: [
        ...this.state.items,
        this.state.term
      ] //everything in the former item,
      //show it and then concatenate the term to it
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
      <List items={this.state.items}/>
    </div>
    )
  }
}

export default App;
