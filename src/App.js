import React from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate'


function App() {
  return (
    <main className='App'>
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
      <TheDate />
    </main>
  )
}

export default App;