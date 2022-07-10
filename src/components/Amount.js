import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreaseAmount, incrementAmount } from '../redux/cartSlice'
export class Amount extends Component {
  render() {
    const { id, big, amount, incrementAmount, decreaseAmount } = this.props
    return (
      <div className='amount' >
        <span onClick={() => { incrementAmount(id) }} className={big ? 'amount__square amount__square--big' : 'amount__square'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 8V16" stroke="#1D1F22" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12H16" stroke="#1D1F22" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {big ? <p>{amount}</p> : <b>{amount}</b>}
        <span onClick={() => { decreaseAmount(id) }} className={big ? 'amount__square amount__square--big' : 'amount__square'}>
          <svg xmlns="http://www.w3.org/2000/svg" width={big ? "15" : "10"} height="4" viewBox="0 0 10 2" fill="none">
            <path d="M1 1H9" stroke="#1D1F22" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  currency: state.currency,
});

export default connect(mapStateToProps, { incrementAmount, decreaseAmount })(Amount);