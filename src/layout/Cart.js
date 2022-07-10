import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// Component
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart';
import Modal from '../components/Modal';
export class Cart extends Component {
  state = {
    isModalOpen: false
  }
  openCloseModal = () => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen
    }))
  }
  render() {
    const { products } = this.props.cart
    const { symbol } = this.props.currency
    const total = {} 
    let count = 0
    for (const item of products) {
      count += item.amount
    }
    for (const item of products) {
      // calculate the total amount in the different currencies
      for (const price of item.item.prices) {
        if (total[price.currency.symbol] === undefined) {
          total[price.currency.symbol] = price.amount * item.amount
        } else {
          total[price.currency.symbol] += price.amount * item.amount
        }
      }
    }
    return (
      <div className='cart'>
        <p className='cart__title'>CART</p>
        {products.length > 0 ?
          products.map(product => (
            <CartItem big product={product} key={product.id} />
          ))
          :
          <EmptyCart />
        }
        <div className='cart__checkout'>
          <p>Tax 21%: <b>{symbol}{total[symbol] ? (total[symbol] * 0.21).toFixed(2) : "0.00"}</b></p>
          <p>Quantity: <b>{count}</b></p>
          <p>Total: <b> {symbol}{total[symbol] ? total[symbol].toFixed(2) : "0.00"} </b></p>
          {count > 0 ?
            <button className='cart__button' onClick={this.openCloseModal}>ORDER</button>
            :
            <Link to={"/"}>
              <button className='cart__button'>SEE PRODUCTS</button>
            </Link>
          }
          {this.state.isModalOpen ? <Modal close={this.openCloseModal} symbol={symbol} amount={total[symbol].toFixed(2)} /> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  currency: state.currency
});

export default connect(mapStateToProps)(Cart);