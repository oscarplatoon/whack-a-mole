import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {

  moleActive() {
    if(this.props.value) {
      return <img src={MoleIcon} className="Mole" alt="Mole" />
    }return null
  }

  render() {
  
    return (
      <div className="den">
        {this.moleActive()}
      </div>
    )
  }
}

export default Mole
