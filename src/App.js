import { Fragment, useReducer } from 'react'
import './App.css'

const reducer = (state, action) => {
  if (action === 'red' || action === 'yellow' || action === 'green') return action

  return state
}

function App() {

  const [click, setClick] = useReducer(reducer, null)

  return (
    <Fragment>
      <div className='boxs'>
        <div className='box' onClick={(e) => setClick(e.currentTarget.classList.toggle('red'))}>
          {click}
        </div>
      </div>
      <div className='boxs'>
        <div className='box' onClick={(e) => setClick(e.currentTarget.classList.toggle('yellow'))}>
        </div>
      </div>
      <div className='boxs'>
        <div className='box' onClick={(e) => setClick(e.currentTarget.classList.toggle('green'))}>
        </div>
      </div>
    </Fragment>
  )
}

export default App
