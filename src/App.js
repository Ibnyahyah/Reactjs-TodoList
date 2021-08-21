import './App.css';
import React from 'react';
import Todo from './Component/Todo';

class App extends React.Component{
 
  state = {
    todos: [
      {
        id: 1,
        title: '',
        complete: false
      },
      {
        id: 1,
        title: 'bring up a new tod app',
        complete: false
      },
      {
        id: 1,
        title: 'bring up a new tod app',
        complete: false
      }
    ]
  }
   render() {
  return (
    <div>  
      <div  className="main">
        <header>
          <h1>Wee Todo</h1>
        </header>
          <Todo text='bring up a new tod app' />
          <Todo text='Still building its up'/>
          <Todo text='just a little more to go '/>
          <Todo text='follow me up'/>
          <Todo text='@bnibnibn or @ibnyahyah '/>
      </div>
    </div>
  );
  }
}

export default App;
