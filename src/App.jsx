import { useState, useCallback,useEffect,useRef } from 'react'

import Card from './components/card'
import Color from './components/BgChanger'
import PasswordGeneraotr from './components/PasswordGeneraotr'
function App() {
  return (
    <>
      <div className='flex space-x-5'>
        <Card />
        <Card />
        <Card />
        <PasswordGeneraotr />
      </div>
      <div> <Color /></div>
      
    </>
  )
}

export default App
