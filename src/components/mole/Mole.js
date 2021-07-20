import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {
  
  render() {
    return (
      <div className="den">
        {this.props.isVisible && <img onClick={this.props.onMoleWhacked} src={MoleIcon} />}
      </div>


  
    )
  }
}

export default Mole
