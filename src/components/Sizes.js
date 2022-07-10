import React, { Component } from 'react'
// Component
import Square from './Square'
export class Sizes extends Component {
  changeAttribute(attribute, product, index) {
    this.props.updateAttribute({ name: attribute.name, value: attribute.items[index].value, productId: product.item.id })
  }

  attributeIsSelected(item, attribute, index) {
    return item.value === this.props.selectedAttributes[attribute.name] || (index === 0 && !this.props.selectedAttributes[attribute.name])
  }

  render() {
    const { attributes, size } = this.props
    return (
      <div className='sizes'>
        {attributes.map(attribute => (
          <section className='product__attributes' key={attribute.name}>
            <b>{attribute.name}:</b>
            <div className='product__options'>
              {attribute.items.map((item, index) => (
                <Square item={item} key={item.value} type={attribute.type} size={size} selected={this.attributeIsSelected(item, attribute, index)} />
              ))}
            </div>
          </section>
        ))}
      </div>
    )
  }
}

export default Sizes;