import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import { GET_CATEGORIES } from './utils/queries';
import "./sass/main.scss"
import Navbar from './layout/Navbar';
import Cart from "./layout/Cart";
import Category from "./layout/Category";
import ErrorMessage from './components/ErrorMessage';
import ProductContainer from './layout/ProductContainer';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Query query={GET_CATEGORIES}>
          {({ loading, data, error }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <ErrorMessage />
            return (
              <Switch>
                <Route path='/category/:title' component={Category} />
                <Route path='/product/:id' component={ProductContainer} />
                <Route path='/cart' component={Cart} />
                <Redirect to={`/category/${data.categories[0].name}`} />
              </Switch>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default App
