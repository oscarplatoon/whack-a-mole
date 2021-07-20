import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {

  clicked =() => {
    this.props.onMoleClick(this.props.currentIndex)
  }

render() {
    this.isVisible = this.props.isVisible;
    let mole = this.isVisible ? <img src={MoleIcon} className="Mole" alt="Mole" onClick={this.clicked}/> : null

    return (
        <div className="den">
            {mole}
        </div>
    )
}
}

export default Mole