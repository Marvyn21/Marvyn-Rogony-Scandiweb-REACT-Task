import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
// React Router
import { Link } from 'react-router-dom'
// Components
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import Modal from './Modal'

export class MiniCart extends Component {
  state = {
    isModalOpen: false
  }
  openCloseModal = () => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen
    }))
  }

  shouldCloseCart = (e) => {
    if (e.target.className === "minicart__background") {
      const element = document.querySelector(".minicart")
      element.classList.add("up")
      setTimeout(() => {
        this.props.close()
      }, 500);
    }
  }

  render() {
    const { products } = this.props.cart
    const { symbol } = this.props.currency
    const { close } = this.props
    const total = {} // {$:100, ¥: 200, etc}
    let count = 0
    for (const item of products) {
      count += item.amount
    }
    for (const item of products) {
      // calculate the total amount in every currency
      for (const price of item.item.prices) {
        if (total[price.currency.symbol] === undefined) {
          total[price.currency.symbol] = price.amount * item.amount
        } else {
          total[price.currency.symbol] += price.amount * item.amount
        }
      }
    }

    return (
      <div className='minicart__background' onClick={this.shouldCloseCart}>
        <article className='minicart'>
          <p><b>My Bag.</b> {count} items</p>
          {products.length > 0 ?
            <div className='minicart__itemcontainer'>
              {products.map(product => (
                <CartItem product={product} key={product.id} />
              ))}
            </div>
            :
            <EmptyCart />
          }
          <section className='minicart__checkout'>
            <b>Total</b>
            <b className='minicart__total'>{symbol}{total[symbol] ? total[symbol].toFixed(2) : "0.00"}</b>
            {products.length > 0 ?
              <>
                <Link to={"/cart"}>
                  <button className='minicart__button' onClick={close}>VIEW BAG</button>
                </Link>
                <button className='minicart__button minicart__button--right' onClick={close && this.openCloseModal}>CHECK OUT</button>
              </>
              :
              null
            }
          </section>
        </article>
        {this.state.isModalOpen ? <Modal close={this.openCloseModal} symbol={symbol} amount={total[symbol].toFixed(2)} /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps)(MiniCart);