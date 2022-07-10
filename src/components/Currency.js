import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { setCurrency } from '../redux/currencySlice';
// GraphQL
import { Query } from '@apollo/client/react/components';
import { GET_CURRENCIES } from '../utils/queries';
export class Currency extends Component {
  handleClose(close) {
    const element = document.querySelector(".currency__background")
    element.classList.add("up")
    setTimeout(() => {
      close()
    }, 500);
  }
  render() {
    const { close, setCurrency } = this.props
    return (
      <div className='currency__background' onClick={() => this.handleClose(close)}>
        <ul className='currency'>
          <Query query={GET_CURRENCIES}>
            {({ data, loading, error }) => {
              if (loading) return <span>Loading...</span>
              const { currencies } = data
              return currencies.map(currency => <li onClick={() => setCurrency({ label: currency.label, symbol: currency.symbol })} className='currency__item' key={currency.symbol}>{currency.symbol} {currency.label}</li>)
            }}
          </Query>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currency: state.currency,
});

export default connect(mapStateToProps, { setCurrency })(Currency);
