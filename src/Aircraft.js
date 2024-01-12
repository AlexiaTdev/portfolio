import React, { Component } from 'react'
import image from './img/airplane.png';


export default class Aircraft extends Component {


  render(props) {

    /**
     * first
     */
    if (this.props.scrollPosition<10) {
      return (
        <>
          <img src={image} alt="Logo" style={{transform: 'scaleX(-1)'}}/>
          <p>{this.props.scrollPosition}</p>
        </>
      )
    } else {
      if (this.props.scrollPosition< (this.props.pageWidth/2)) { //this.props.scrollPosition<500
        return (
          <>
            <img src={image} alt="Logo" style={{transform: 'scaleX(-1)', position : 'relative', left: this.props.scrollPosition,  top: this.props.scrollPosition}}/>
            <p>{this.props.scrollPosition}</p>
          </>
        )
      } else {
        if (this.props.scrollPosition+750<this.props.pageWidth) {
          return (
            <>
              <img src={image} alt="Logo" style={{transform: 'scaleX(-1) rotate(0.2rad)', position : 'relative', left: this.props.scrollPosition,  top: (this.props.pageWidth/2) + this.props.scrollPosition%5}}/>
              <p>{this.props.scrollPosition}</p>
            </>
          )
        } else {
          return (
            <>
              <img src={image} alt="Logo" style={{transform: 'scaleX(-1) rotate(0.2rad)', position : 'relative', left: this.props.pageWidth-750,  top: (this.props.pageWidth/2) + this.props.scrollPosition%5}}/>
              <p>{this.props.scrollPosition}</p>
            </>
          )
        }
        
      }
    }
    
    
  }
}
