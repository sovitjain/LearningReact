import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Saumya from './Person/Saumya'

class App extends Component {

  state = {
    sovit: [
      {length:7, weight:26}
    ],
    persons : [
      { name:"sovit", age:"33"},
      { name:"sovit1", age:"31"},
      { name:"sovit2", age:"32"},
      { name:"sovit3", age:"34"},
    ]
  }

  switchNameHandler = (newName) => {
    console.log ("inside switch handler");
    this.setState({
      persons : [
        { name:newName, age:"33"},
        { name:"sovit1", age:"31"},
        { name:"sovit2", age:"32"},
        { name:"sovit3", age:"36"},
      ]
    }
    )
  }

  nameChangeHandler =(event) => {
    this.setState({
      persons : [
        { name:"sovit", age:"33"},
        { name:event.target.value, age:"31"},
        { name:"sovit2", age:"32"},
        { name:"sovit3", age:"36"},
      ]
    }
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Saumya length={this.state.sovit[0].length} weight={this.state.sovit[0].weight}></Saumya>
        <button onClick={this.switchNameHandler.bind(this, 'sovi')}>Switch Name</button>
        <Person ></Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click={this.switchNameHandler.bind(this, 'sov')} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person click1={this.nameChangeHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobby is racing</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;
