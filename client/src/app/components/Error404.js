import * as React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-12'>
          <h1 className='display-1 text-danger text-center'>
            404
          </h1>
          <h1 className='display-4 text-danger text-center'>
            Page not found
          </h1>
          <Link to='/'>Go home</Link>
        </div>
      </div>
    </div>
  )
}

export default Error404
