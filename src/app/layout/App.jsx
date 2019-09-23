import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
//import './App.css';

class App extends Component{
  render() {
    return (
      <div className='app'>
        <h1>Re-vents</h1>
        <button className="ui icon button">
          <i className="smile icon">
            CSS Button
          </i>
        </button>
        <Button icon="smile" content="React Button" />
      </div>
    );
  }
}

export default App;