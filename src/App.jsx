import { useState } from 'react'
import Form from './components/Form'

import './App.css'

function App() {

  return (
    <>
    <div className='flex items-center justify-center'>
    <div className="flex flex-col">
      <div className='w-40 flex justify-center items-center mx-68'><h1 className='text-white text-2xl'>CV Generator by VJ_15</h1></div>
      <Form />
      </div>
      </div>
    <div className='fixed bottom-5'><a className='text-white text-2xl mx-5' href="https://github.com/Vinayak-Joshi15" target="_blank">vj_15</a></div>
    </>
  )
}

export default App
