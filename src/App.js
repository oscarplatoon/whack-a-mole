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
  startGame() {
    //set the state of dense every 1.5 seconds to the result of getDensState()
    setInterval(() => {
      this.setState({
        dens: this.getDensState()
      })
    }, 1500)
  }
  getDensState() {
    //creating array of 9 elements which generate 0,1 assigning to true false value
    return new Array(9).fill({}).map(() => {
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    })
  }
  onMoleWhacked = ( ) => {
    //changing state of points if you click on visible moles
    this.setState({
      points: this.state.points + 1
    })
  }
  render() {
    const dens = this.state.dens.map((den, index) => {
      return (
        <Mole key={`mole-${index}`} isVisible= {this.state.dens[index].isMoleVisible} onMoleWhacked = {this.onMoleWhacked} />
      )
    })
    return (
      <div className="App">
        <h1>WHACK-A-MOLE!</h1>
        <h2>Points: {this.state.points}</h2>
        <div className="dens">
          <div style={{clear: 'both'}}>
            {dens}
          </div>
        </div>
      </div>
    )
  }
}

export default App
