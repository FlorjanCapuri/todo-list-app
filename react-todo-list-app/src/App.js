import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Title from './components/Title';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <div className='title'><Title /></div>
      <div className="todo-app"><TodoList /></div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
