import React from 'react'
import Nav from '../Nav/Nav'


//In react, a component can only return a single root element. e hinda thani div ekk wge mokk hri athult daann oni okkoma element tika yata tyna
function Home() {
  return (
    <div>
    <Nav/>

    <h1>This is a Home Component</h1>
    </div>
  )

}

export default Home;