import React, { Component } from 'react'
import Product from './Product';
// GraphQl
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from '../utils/queries';
// Redux
import { connect } from 'react-redux'
// React Router
import { withRouter } from 'react-router-dom';

export class ProductContainer extends Component {
  render() {
    const productId = this.props.match.params.id;
    const { symbol } = this.props.currency
    return (
      <Query query={GET_PRODUCT} variables={{ id: productId }}>
        {({ loading, data }) => {
          if (loading) return <p>loading</p>
          const { product } = data
          return (
            <Product product={product} symbol={symbol} />
          )
        }}
      </Query>
    )
  }
}


const mapStateToProps = state => ({
  currency: state.currency,
});



export default withRouter(connect(mapStateToProps)(ProductContainer))