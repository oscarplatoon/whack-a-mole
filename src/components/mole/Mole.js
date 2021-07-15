import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {
    constructor(props) {
        super(props)
        this.onMoleWhack = props.onMoleClick;
    }



    render() {
        this.isVisible = this.props.isVisible;
        let mole = this.isVisible ? <img src={MoleIcon} className="Mole" alt="Mole" onClick={this.onMoleWhack} /> : null

        return (
            <div className="den">
                {mole}
            </div>
        )
    }
}

export default Mole
