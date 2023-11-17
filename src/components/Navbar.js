import React from 'react'
import { Link } from 'react-router-dom'
import '../App.scss'

export default function Navbar() {
  return (
    <>

      <div className="container-fluid pb-3" style={{ backgroundColor: "#edede9", boxShadow: "0px 5px 15px;" }}>
        <div className="row">
          <div className="col mt-3 align-items-center justify-content-center d-flex">
            <Link to='/' className='anter'>Home</Link>
            <Link to='/categories' className='ms-5 anter'>Categories</Link>
            <Link to='/about' className='ms-5 anter'>About</Link>
            <div class="dropdown ms-5">
              <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </button>
              <ul class="dropdown-menu">
                <Link to='/auth/login' class="dropdown-item">Login</Link>
                <Link to='cart' class="dropdown-item">Cart</Link>
                <Link to='checkOut' class="dropdown-item">Checkout</Link>
                <Link to='bookDetails' class="dropdown-item">Book Details</Link>
              </ul>
            </div>
            {/* <Link to='/pages' className='ms-5 anter'>Pages</Link> */}
            <Link to='/content' className='ms-5 anter'>Contact</Link>
          </div>
        </div>
      </div>

    </>
  )
}
