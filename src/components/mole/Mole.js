import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'


class Mole extends Component {

  render() {
    return (
      <div className="den">
        {this.props.isMoleVisible === true ? <img onClick={this.props.functionName} src={MoleIcon} className="Mole" alt="Mole" /> : <p></p>}
      </div>
    )
  }
}

export default Mole
