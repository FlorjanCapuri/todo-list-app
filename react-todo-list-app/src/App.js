import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Title from './components/Title';
import TodoList from './components/TodoList';
import Description from './components/Description';

function App() {
  return (
    <div className='general'>
      <div className='title'><Title /></div>
      <div className='todo-app'><TodoList /></div>
      <div className='description'><Description /></div>
      <div className='footer'><Footer /></div>
    </div>
  );
}

export default App;
