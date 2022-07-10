import React, { Component } from 'react'

export class EmptyCart extends Component {
  render() {
    return (
      <div className='minicart__emptycart'>
        <svg width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M45.962 35.288a3.125 3.125 0 1 0 -4.425 4.425L48.706 46.875 41.538 54.038a3.125 3.125 0 1 0 4.425 4.425L53.125 51.294l7.162 7.169a3.125 3.125 0 0 0 4.425 -4.425L57.544 46.875l7.169 -7.162a3.125 3.125 0 0 0 -4.425 -4.425L53.125 42.456 45.962 35.288z" /><path d="M3.125 6.25a3.125 3.125 0 0 0 0 6.25h6.938l2.506 10.044 9.363 49.906A3.125 3.125 0 0 0 25 75h6.25a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0 -25h43.75a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0 -25h6.25a3.125 3.125 0 0 0 3.069 -2.55l9.375 -50A3.125 3.125 0 0 0 90.625 18.75H18.063l-2.531 -10.131A3.125 3.125 0 0 0 12.5 6.25H3.125zm24.469 62.5L19.387 25h67.475l-8.206 43.75h-51.063zM37.5 87.5a6.25 6.25 0 1 1 -12.5 0 6.25 6.25 0 0 1 12.5 0zm43.75 0a6.25 6.25 0 1 1 -12.5 0 6.25 6.25 0 0 1 12.5 0z" /></svg>
        <p className='minicart__emptytitle'>Cart is empty</p>
        <p className='minicart__emptytext'>Looks like you have no items in your shopping cart</p>
      </div>
    )
  }
}

export default EmptyCart