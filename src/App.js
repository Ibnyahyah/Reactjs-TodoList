import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './Component/Todo';
import { Link } from 'react-router-dom';
import TodoInput from './Component/TodoInput';

class App extends React.Component{
   render() {
  return (
    <Router>
    <div>  
      <div  className="main">
        <header>
          <h1>Wedo</h1>
          <nav>
            <Link to="/" style={getStyle}>Docs</Link>{'  |  '}<Link to="/addTodos" style={getStyle}> Add-Docs</Link>
          </nav>
        </header>
          <Route exact path="/" component={Todo}/>
          <Route path="/addtodos" component={TodoInput}/>
      </div>
    </div>
    </Router>
  );
  }
}
const getStyle={
  color: 'rgba(0,0,0,0.75)',
  textDecoration: 'none',
  fontWeight: '600',
  fontFamily: "'Lato', sans-serif",
}

export default App;
