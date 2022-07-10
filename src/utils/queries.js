import { gql } from '@apollo/client';
// It’s considered best practice to name all your GraphQL operations because it helps people understand their purpose and helps when debugging.
const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      name
    }
  }
`
const GET_CURRENCIES = gql`
  query getCurrencies{
    currencies {
      label
      symbol
    }
  }
`
const GET_PRODUCTS = gql`
  query getProducts($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        id
        name
        brand
        inStock
        gallery
        attributes {
          name
          type
          items {
            displayValue
            value
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`
const GET_PRODUCT = gql`
  query getProduct($id: String!) {
      product(id: $id) {
        id
        name
        brand
        inStock
        gallery
        description
        attributes {
          name
          type
          items {
            displayValue
            value
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
  }
`


export { GET_CATEGORIES, GET_CURRENCIES, GET_PRODUCTS, GET_PRODUCT }