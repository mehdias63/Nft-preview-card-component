import React from 'react'
import Nftcard from './components/Nftcard'


function App() {

  return (
    <main className='flex justify-center items-center min-h-screen text-white md:w-screen' style={{backgroundColor:"var(--very-dark-blue-main-bg, #0D192C)"}}>
      <Nftcard />
    </main>
  )
}

export default App
