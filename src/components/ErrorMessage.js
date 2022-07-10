import React, { Component } from 'react'

export class ErrorMessage extends Component {
  render() {
    return (
      <div className='error'>
        <p className='error__title'><span className='error__span'>Oops...</span> an error has occurred :c</p>
        <p>but don't reject me yet!</p>
        <p>This project fetch data from an GraphQL Endpoint</p>
        <ul>
          <li>
            <a href='https://github.com/scandiweb/junior-react-endpoint' target="_blank" rel="noreferrer" className='error__link'>DOWNLOAD</a> and install the GraphQL Endpoint
          </li>
          <li>
            Reinstall all dependencies
          </li>
          <li>
            Restart the GraphQL Server
          </li>
        </ul>
      </div>
    )
  }
}

export default ErrorMessage