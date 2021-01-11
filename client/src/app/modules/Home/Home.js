import React from 'react'
import { useSelector } from 'react-redux'

import {
  selectItems
} from './homeSlice'

const Items = () => {
  const { items } = useSelector(selectItems)

  return (
    <>
      <main role='main' className='container mt-5'>
        <div className='my-3 p-5 bg-white rounded box-shadow vertical-center'>
          <h2 className='mt-3'>Results:</h2>
          {items && items.length > 0 ? (
            items.map((item, index) => {
              return (
                <div className='row especial-row' key={index} role='alert'>
                  <div className={`${item.palindrome ? 'alert-success' : 'alert-light'} col-md-6 offset-md-3 especial-cell`}>
                    {item?.text}
                  </div>
                </div>
              )
            })
          ) : (
            <p className='lead'>Sin información</p>
          )}
        </div>

      </main>
    </>
  )
}

export default Items
