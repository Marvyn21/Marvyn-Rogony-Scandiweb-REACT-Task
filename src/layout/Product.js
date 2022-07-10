import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { addItem } from '../redux/cartSlice';
// React Router
import { withRouter } from 'react-router-dom';
import Button from '../components/Button';
import DOMPurify from 'dompurify';

export class Product extends Component {

  state = {
    selectedImage: 0,
    selectedAtributes: {},
  }

  setSelectedImage(index) {
    this.setState({ selectedImage: index })
  }

  selectItem(index, attribute) {
    // set the selected attributes of the product, e.g capacity: "512gb"
    const name = attribute.name
    const item = attribute.items[index].value
    this.setState(state => (
      state.selectedAtributes = { ...state.selectedAtributes, [name]: item }
    ))
  }

  addToCart(product) {
    this.props.addItem({ attributes: this.state.selectedAtributes, item: product, amount: 1 })
  }

  componentDidMount() {
    // select the defaults attributes of the products automatically, e.g size="M"
    const attributes = this.props.product.attributes
    if (Object.keys(this.state.selectedAtributes).length === 0) {
      for (let attribute of attributes) {
        this.setState(state => (
          state.selectedAtributes = { ...state.selectedAtributes, [attribute.name]: attribute.items[0].value }
        ))
      }
    }
  }

  render() {
    const { product, symbol } = this.props
    return (
      <div className='product'>
        {product.inStock ? null : <span className='card__stock card__stock--big'>OUT OF STOCK</span>}
        <aside className='product__gallery'>
          {product.gallery.map((image, index) => {
            return <img className='product__miniimage' key={image} src={image} alt="product item" onClick={() => this.setSelectedImage(index)} />
          })}
        </aside>
        <div className='product__image-container'>
          <img className='product__image' src={product.gallery[this.state.selectedImage]} alt="product item" />
        </div>
        <article className='product__info'>
          <p className='product__name'><b>{product.brand}</b><br />{product.name}</p>
          {product.attributes.map(attribute => (
            <section className='product__attributes' key={attribute.name}>
              <b>{attribute.name}:</b>
              {attribute.type === "swatch" ?
                <div className='product__options'>
                  {attribute.items.map((item, index) => (
                    <span
                      className={item.value === this.state.selectedAtributes[attribute.name] || (index === 0 && !this.state.selectedAtributes[attribute.name]) ? 'product__swatch product__swatch--selected' : 'product__swatch'}
                      style={{ backgroundColor: item.value }}
                      key={item.value}
                      onClick={() => this.selectItem(index, attribute)}>
                    </span>
                  ))}
                </div>
                :
                <div className='product__options'>
                  {attribute.items.map((item, index) => (
                    <span
                      className={item.value === this.state.selectedAtributes[attribute.name] || (index === 0 && !this.state.selectedAtributes[attribute.name]) ? 'product__square product__square--selected' : 'product__square'}
                      key={item.value}
                      onClick={() => { this.selectItem(index, attribute) }}>
                      {item.value}
                    </span>
                  ))}
                </div>
              }
            </section>
          ))}
          <section className='product__checkout'>
            <b>PRICE:</b>
            <b>{symbol}{product.prices[product.prices.findIndex((e) => e.currency.symbol === symbol)].amount.toFixed(2)}</b>
            {product.inStock ?
              <Button type="big" add={() => this.addToCart(product)} />
              :
              <button className="button__container button__container--disabled">OUT OF STOCK</button>}
          </section>
          <span className='product__details' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }} />
        </article>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});



export default withRouter(connect(mapStateToProps, { addItem })(Product))