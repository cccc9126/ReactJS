import React from 'react'
import Header from './component/Header'
import BodyLeft from './component/BodyLeft'
import "./App.css"
import"./Bootstrap.css"
import BodyRight from './component/BodyRight'



function App() {
  return (
    <div className="container">


      <Header/>

      
      
      <div className="row">
        {/* List Products */}
        <BodyLeft/>

        {/* Cart */}
        <BodyRight/>
      </div>
    </div>
  );
}

export default App