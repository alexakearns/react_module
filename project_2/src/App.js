import React, { Component } from 'react'
import './App.css'
import NoteList from './NoteList'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <NoteList />
      </div>
    )
  }
}

export default App
