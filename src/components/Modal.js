import React, { Component } from 'react'

export class Modal extends Component {
  render() {
    const { symbol, amount, close } = this.props
    return (
      <div className='modal__background'>
        <div className='modal'>
          <p className='modal__title'>Check Out Completed!</p>
          <p className='modal__text'>Total: {symbol}{amount}</p>
          <div className='modal__buttons'>
            <button className='minicart__button' onClick={close}>CLOSE</button>
            <button className='minicart__button minicart__button--right' onClick={close}>OKEY</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal