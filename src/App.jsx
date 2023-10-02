
import * as React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Header from './Header/Header'
import Item from './components/itemPage/item/Item'
import ItemView from './components/itemPage/itemVIew/ItemView'
import Footer from './Footer/Footer'
import JeweryItem from './components/itemPage/JeweryItem/JeweryItem'
import ElectricItem from './components/itemPage/ElectricItem/ElectricItem'
import MenClothItem from './components/itemPage/menClothItem/MenClothItem'
import WomenCloth from './components/itemPage/womenCloth/WomenCloth'
import CartAll from './components/Cart/CartAll/CartAll'
import CartView from './components/Cart/CartView/CartView'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  const itemView = (id) => {
    window.location = '/products/' + id
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Header />
      <Routes>
        <Route path='/' element={<Item itemView={itemView} />}> </Route>
        <Route path='/products/:id' element={<ItemView />}> </Route>
        <Route path='/jewery' element={<JeweryItem itemView={itemView} />}> </Route>
        <Route path='/electric' element={<ElectricItem itemView={itemView} />}> </Route>
        <Route path='/menItem' element={<MenClothItem itemView={itemView} />}> </Route>
        <Route path='/womenItem' element={<WomenCloth itemView={itemView} />}> </Route>

        <Route path='/home' element={<Home />}></Route>
        <Route path='/cartall' element={<CartAll />}></Route>
        <Route path='/cartView' element={<CartView />}></Route>
      </Routes>



      <Footer />
    </div>
  )
}

export default App
