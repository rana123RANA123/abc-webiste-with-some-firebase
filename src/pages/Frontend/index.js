import React from 'react'
import {Routes , Route} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Categories from './Categories'
import Content from './Content'
import FAQ from './FAQ'
import TrackOrder from './TrackOrder'
import BookDetails from './BooksDetails'
import Cart from './Cart'
import CheckOut from './CheckOut'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LastFooter from '../../components/LastFooter';

export default function Index() {
  return (
    <>
    <Header />
    <Navbar />
    <main>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/bookDetails' element={<BookDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Content' element={<Content />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/trackOrder' element={<TrackOrder />} />
        <Route path='/checkOut' element={<CheckOut />} />
    </Routes>
    </main>
    <Footer />
    <LastFooter />
    </>
  )
}
