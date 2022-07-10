import React, { Component } from 'react'

export default class Button extends Component {
  clickedButton(add, e) {
    // add the product to the cart and proceed with some animations
    add()
    const button = e.target
    button.classList.add('clicked');
    setTimeout(function () {
      button.classList.remove('clicked')
      button.classList.add('check')
      // button.classList.add('done')
      button.innerText = "✓"
      setTimeout(function () {
        button.classList.remove('check')
        button.innerText = "ADD TO CART"
      }, 600);
    }, 600);


  }
  render() {
    return (
      <div className='button__container'>
        <button className="button" onClick={(e) => { this.clickedButton(this.props.add, e) }}>ADD TO CART</button>
      </div>
    )
  }
}
