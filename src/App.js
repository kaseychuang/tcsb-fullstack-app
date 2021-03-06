import './App.css';
import TodoList from './components/todoList';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path ="/todoList" exact component={TodoList} />
    </Router>
  );
}

export default App;
