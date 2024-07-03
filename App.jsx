import React from 'react'
import Heading from './components/Heading'
import Navbar from './components/Navbar'
import ProductCards from './components/ProductCards'

export default function App() {
  return (
    <div>
      <h1>OlxClone</h1>
      <Navbar/>
      <Heading/>
      <ProductCards/>

    </div>
  )
}
