import React, { Component } from 'react'
// React Router
import { withRouter } from 'react-router-dom'
// GraphQL
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCTS } from '../utils/queries';
// Component
import Card from '../components/Card'
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';

class Category extends Component {
  render() {
    const categoryName = this.props.match.params.title;
    return (
      <div className='category'>
        <Query query={GET_PRODUCTS} variables={{ category: categoryName }}>
          {({ loading, data, error }) => {
            if (loading) return <Spinner />
            if (error) return <ErrorMessage />
            const { products } = data.category
            return (
              <>
                <h2 className='category__name'>{categoryName}</h2>
                <main className='category__container'>
                  {products.map(product => <Card product={product} key={product.id} />)}
                </main>
              </>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default withRouter(Category)