import React, { Component } from 'react'
import './App.css'
import Mole from './components/mole/Mole.js'

class App extends Component {
  state = {
    dens: this.getDensState(),
    points: 0,
  }

  componentDidMount() {
    this.startGame()
  }
  
  /**
   * runs when page loads (using componentDidMount)
   * Then, sets the den state using 'getDenState()' every 1500ms (1.5s)
   * This is where the board gets refreshed, and game can be tuned using the interval.
   */
  startGame() {
    setInterval(() => {
      this.setState({
        dens: this.getDensState()
      })
    }, 1500)
  }

  /**
   * Generates a 9 item array of {isMoleVisible:True/False} values using Math.random
   * Each item of the array can be accessed by it's .isMoleVisible value (true/false)
   */
  getDensState() {
    return new Array(9).fill({}).map(() => {
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    })
  }

  // Have to rewrite this to fat arrow style to use 'this'
  // Otherwise, have to bind 'this' in the mole.js component class
  onMoleWhacked = () => {
    this.setState({
      points: this.state.points + 1
    })
  }

  render() {
    const dens = this.state.dens.map((den, index) => {
      return (
        <Mole key={`mole-${index}`} 
        isMoleVisible={this.state.dens[index].isMoleVisible} 
        onMoleWhacked={this.onMoleWhacked}
        />
      )
    })

    return (
      <div className="App">
        <h1>WHACK-A-MOLE!</h1>
        <h2>Points: {this.state.points}</h2>
        <div className="dens">
          {dens}
          <div style={{clear: 'both'}}></div>
        </div>
      </div>
    )
  }
}

export default App
