import React, { Component } from 'react'

export default class Spinner extends Component {
  // source of this spinner: https://loading.io/css/
  render() {
    return (
      <div className='spinner__background' >
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}
