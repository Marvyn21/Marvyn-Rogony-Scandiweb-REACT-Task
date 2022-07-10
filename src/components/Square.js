import React, { Component } from 'react'

export default class Square extends Component {
  render() {
    const { selected, size, type } = this.props
    const { value } = this.props.item
    return (
      type === "swatch" ?
        <span
          className={selected ?
            size === "small" ?
              'product__swatch--small product__swatch--selected incart'
              :
              'product__swatch product__swatch--selected incart incart'
            :
            size === "small" ?
              'product__swatch--small incart'
              :
              'product__swatch incart'
          }
          style={{ backgroundColor: value }}
          key={value}
        />
        :

        <span
          className={selected ?
            size === "small" ?
              'product__square product__square--small product__square--selected incart'
              :
              'product__square product__square--selected incart'
            :
            size === "small" ?
              'product__square product__square--small incart'
              :
              'product__square incart'
          }
          key={value}
        >
          {value}
        </span>
    )
  }
}
