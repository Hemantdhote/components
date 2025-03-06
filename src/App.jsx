import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Card from './components/Card'

const App = () => {
  const data={name:"hemant",city:"bhopal",email:"a@a.com"};
  return (
    <div>

      {/* <Navbar />
      <Page1 />
      <Page2 /> */}
      <Card data={data} />
      
    </div>
  )
}

export default App
