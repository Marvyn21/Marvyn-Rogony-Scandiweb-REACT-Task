import React, { Component } from 'react'
import { connect } from 'react-redux'
import Amount from './Amount'
import Carousel from './Carousel'
import Sizes from './Sizes'



export class CartItem extends Component {
  render() {
    const { product, big } = this.props
    const { symbol } = this.props.currency
    return (
      <>
        <section className={big ? "cartitem cartitem--big" : "cartitem"}>
          < div className='cartitem__left' >
            {big ?
              <p className='cartitem__name'><b>{product.item.brand}</b> <br />{product.item.name}</p>
              :
              <p className='cartitem__name'>{product.item.brand}<br />{product.item.name}</p>
            }
            < p className='cartitem__price' > <b>{symbol}{product.item.prices[product.item.prices.findIndex((e) => e.currency.symbol === symbol)].amount.toFixed(2)}</b></p >
            {big ?
              <Sizes size="big" attributes={product.item.attributes} selectedAttributes={product.attributes} product={product} />
              :
              <Sizes size="small" attributes={product.item.attributes} selectedAttributes={product.attributes} product={product} />
            }
          </div >
          <div className='cartitem__right'>
            {big ?
              <Amount id={product.id} big amount={product.amount} />
              :
              <Amount id={product.id} amount={product.amount} />
            }
            {big ?
              <Carousel images={product.item.gallery} />
              :
              <img className='cartitem__image' src={product.item.gallery[0]} alt='product' />
            }
          </div>
        </section >
        {big ? <hr className='cartitem__separator' /> : null}
      </>
    )
  }
}

const mapStateToProps = state => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(CartItem);