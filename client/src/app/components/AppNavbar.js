import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchItem } from '../modules/Home/homeSlice'

const AppNavbar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const onSubmit = () => {
    const data = {
      text: text
    }

    dispatch(fetchItem(data))
    setText('')
  }

  return (
    <header>
      <nav
        className='navbar navbar-expand-md navbar-dark bg-danger'
        id='navbarApp'
      >
        <a className='navbar-brand' href='javascript;' />
        <div className='flex-grow-1 p-2 bd-highlight' id='navbarCollapse'>
          <form className='form-inline d-flex justify-content-center mt-6 mt-md-0'>
            <input
              className='form-control w-50 mr-sm-2'
              type='text'
              placeholder='Insert Text'
              aria-label='Search'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className='btn btn-primary my-2 my-sm-0'
              type='button'
              onClick={onSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </nav>
    </header>
  )
}

export default AppNavbar
