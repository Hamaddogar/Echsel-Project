import React from 'react'
 import  Header from '../src/Header/Header'
  import Body from '../src/Body/Body'
  import Footer from '../src/Footer/Footer '
  import { BrowserRouter, Route, Link } from "react-router-dom";

   import About from '../src/ABout/About'
   import Contact from '../src/Contact/contact'
    import Login from '../src/login/login'
class App extends React.Component{
  render()
 {
  return(


     <BrowserRouter>

      <div>
         <Header/>
       <Route  exact path ="/" component={Body}/>
        <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
        <Footer/>
       </div>
     </BrowserRouter>
    // <div> 
        


    //    <Header/>
    //      <Body/>
             
    //          <Footer/>
    // </div>
  )

 } 

}
 export default App