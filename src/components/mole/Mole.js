import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {
  render() {

    const {isMoleVisible, onMoleWhacked} = this.props

    return (
      <div  className="den">
      {isMoleVisible &&
        <img src={MoleIcon} className="Mole" 
        onClick={onMoleWhacked}
        alt="Mole" />
        }
      </div>
    )
  }
}

export default Mole
