import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  } 

  render () {
    // let persons = null;

    // if(this.state.showPersons) {
    //   persons = (
    //     <div className='person'>
    //       <Person 
    //         name={this.state.persons[0].name} 
    //         age={this.state.persons[0].age} 
    //       />
    //       <Person 
    //         name={this.state.persons[1].name} 
    //         age={this.state.persons[1].age}
    //         click={this.switchNameHandler.bind(this, 'Max!')}
    //         changed={this.nameChangedHandler} >My Hobbies: Racing
    //       </Person>
    //       <Person 
    //         name={this.state.persons[2].name} 
    //         age={this.state.persons[2].age} 
    //       />
    //   </div>
    //   )

    // }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {/* {persons} */}
        { this.state.showPersons === true ? 
          <div className='person'>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler} >My Hobbies: Racing
            </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} 
            />
          </div> : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
