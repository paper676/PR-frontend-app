import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Page from './components/pagePart/pagePart'
import ViewDetails from './pages/ViewDetails'
import CartPage from './pages/cartPage'
import About from './pages/About'
import LoginPopUp from './components/Loginpopup/LoginPopUp'
import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'

import UserProtectedWrapper from './pages/UserProtectedWrapper'

function App() {
  const [ShowLogin,setShowLogin]=useState(false);
  const [authState, setAuthState] = useState("Login");
  const [cartItemslist,setcartItemslist]=useState([]);
  return (
    <>
      {ShowLogin && <LoginPopUp setShowLogin={setShowLogin} state={authState} />}
      <Navbar setShowLogin={setShowLogin} setAuthState={setAuthState} cartItemslist={cartItemslist}/>
      <Routes>
        <Route path='/' element={<Page/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path="/ViewDetails/:service/:name" element={<ViewDetails setcartItemslist={setcartItemslist}/>} />
        <Route path='/Cart' element={
          <UserProtectedWrapper setShowLogin={setShowLogin} setAuthState={setAuthState}>
            <CartPage cartItemslist={cartItemslist} setcartItemslist={setcartItemslist}/>
          </UserProtectedWrapper>
        }></Route>;
      </Routes>
      <Footer/>
    </>
  )
}
export default App
