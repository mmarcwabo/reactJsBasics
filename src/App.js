import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      {name:'Marcellin', age:25},
      {name:'Kevine', age:18},
      {name: 'Patricia', age:20}
    ],

    products: 'iphone 6'
  }

  switchNameHandler = (newName)=>{
    this.setState({
      persons: [
        {name:'Km', age:25},
        {name:newName, age:18},
        {name: 'Paty', age:20}
      ],

    })

  }

  //Name changed handler 
  nameChangedHandler = (event)=>{

     this.setState({
      persons: [
        {name:'Km', age:25},
        {name:event.target.value, age:18},
        {name: 'Paty', age:20}
      ],

    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react developer!</h1>
        <p>This framework is really amazing</p>
        <button onClick={this.switchNameHandler.bind(this, 'Kevah')}>Switch names </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies : coding, dating and reading</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Bae')}
        ></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}
        changed={this.nameChangedHandler}
        ></Person>
      </div>
    );
    // return React.createElement();
  }
}

export default App;
