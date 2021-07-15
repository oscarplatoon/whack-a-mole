import React, { Component } from 'react'
import './App.css'
import Mole from './components/mole/Mole.js'

class App extends Component {
    state = {
        dens: this.getDensState(),
        points: 0,
    }
    constructor(props) {
        super(props);
        this.onMoleWhacked = this.onMoleWhacked.bind(this)
    }

    componentDidMount() {
        this.startGame();
    }

    // calls getDensState every 1.5 secs. 
    startGame() {
        setInterval(() => {
            this.setState({
                dens: this.getDensState()
            });
        }, 1500)
    }

    // fills an array randomly with either {isMoleVisible: true} or {isMoleVisible: false}
    getDensState() {
        return new Array(9).fill({}).map(() => {
            return {
                isMoleVisible: [true, false][Math.round(Math.random())]
            }
        })
    }

    // when mole is whacked, increase points (which is part of the state of App) by 1
    onMoleWhacked() {
        this.setState({
            points: this.state.points + 1
        })
    }
    render() {
        const dens = this.state.dens.map((den, index) => {
            return (
                <Mole key={`mole-${index}`} isVisible={den.isMoleVisible} onMoleClick={this.onMoleWhacked} />
            )
        })
        return (
            <div className="App">
                <h1>WHACK-A-MOLE!</h1>
                <h2>Points: {this.state.points}</h2>
                <div className="dens">
                    {dens}
                    <div style={{ clear: 'both' }}></div>
                </div>
            </div>
        )
    }
}

export default App;
