import React from 'react'
import '../../../App.scss'
import img1 from '../../../assets/img/gallery/best_selling1.jpg'
import img2 from '../../../assets/img/gallery/best_selling4.jpg'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../contexts/AuthContext'
import { message } from 'antd'
export default function Hero() {

    const navigate = useNavigate()

    const {isAuth} = useAuthContext()

    const proceesToCheckout = () => {
        if(isAuth){
            message.success("Your Cart Has Been Added")
        }
        else{
            message.error("Please Login Your Account")
            navigate("/auth/login")
        }
    }

    return (
        <>

            <div className="container">
                <div className="row mb-5">
                    <div className="col hero2">
                        <div style={{ marginTop: "140px" }}>
                            <h1 className='text-center text-light fw-bold align-items-center justify-content-center d-flex'>Cart</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h4>Product</h4>
                        <div className='d-flex mt-4'>
                            <img src={img1} alt="img1" style={{ height: "230px" }} />
                            <p className='ms-3 d-flex align-items-center'>Minimalistic shop for multipurpose use</p>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className='d-flex' style={{ justifyContent: "space-around" }}>
                            <h5>Price</h5>
                            <h5>Quantity</h5>
                            <h5>Total</h5>
                        </div>

                        <div className="col d-flex" style={{ justifyContent: "space-around", marginTop: "100px" }}>
                            <p>$360.00</p>
                            <p>1</p>
                            <p>$720.00</p>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className='d-flex mt-4'>
                            <img src={img2} alt="img1" style={{ height: "230px" }} />
                            <p className='ms-3 d-flex align-items-center'>Minimalistic shop for multipurpose use</p>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className="col d-flex" style={{ justifyContent: "space-around", marginTop: "100px" }}>
                            <p>$360.00</p>
                            <p>1</p>
                            <p>$720.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row mt-4">
                    <div className="col-8">
                        <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", paddingLeft: "19px", paddingRight: "20px", padding: "13px" }}>Update Cart</button>
                    </div>
                    <div className="col-4">
                        <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", paddingLeft: "19px", paddingRight: "20px", padding: "13px" }}>Close Coupon</button>
                    </div>
                </div>
            </div><hr />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-9">

                    </div>


                    <div className="col-3">
                        <div className='d-flex' style={{ justifyContent: "space-between" }}>
                            <h6>Subtotal</h6>
                            <p>$2160.00</p>
                        </div>

                        <div className='d-flex' style={{ justifyContent: "space-between" }}>
                            <h6>Shipping</h6>
                            <p className='' style={{ marginLeft: "70px" }}>Flat Rate: $5.00</p>
                            <div class="form-check me-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "15px", height: "15px", borderRadius: "20px" }} />
                                <label class="form-check-label" for="flexCheckDefault">
                                </label>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <h6></h6>
                            <p className='' style={{ marginLeft: "160px" }}>Free Shipping</p>
                            <div class="form-check ms-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "15px", height: "15px", borderRadius: "20px" }} />
                                <label class="form-check-label" for="flexCheckDefault">
                                </label>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <h6></h6>
                            <p className='' style={{ marginLeft: "145px" }}>Flat Rate: $10.00</p>
                            <div class="form-check ms-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "15px", height: "15px", borderRadius: "20px" }} />
                                <label class="form-check-label" for="flexCheckDefault">
                                </label>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <h6></h6>
                            <p className='' style={{ marginLeft: "145px" }}>Local Delivery: $2.00</p>
                            <div class="form-check ms-1 me-1">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "15px", height: "15px", borderRadius: "20px" }} />
                                <label class="form-check-label" for="flexCheckDefault">
                                </label>
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <select class="form-select form-control" style={{ borderRadius: "20px" }} aria-label="Default select example">
                                <option selected disabled>Country</option>
                                <option value="1">Pakistan</option>
                                <option value="2">India</option>
                                <option value="3">England</option>
                            </select>
                        </div>

                        <div className="col-12 mt-4">
                            <select class="form-select form-control" style={{ borderRadius: "20px" }} aria-label="Default select example">
                                <option selected disabled>District</option>
                                <option value="1">Faisalabad</option>
                                <option value="2">Karachi</option>
                                <option value="3">Lahore</option>
                            </select>
                        </div>

                        <div className="col-12 mt-4">
                            <input type="text" placeholder='Postcode/ZIP' className='form-control border-1' style={{ borderRadius: "0px" }} />
                        </div>

                        <div className='mt-4 mb-4 d-flex' style={{ justifyContent: "end" }}>
                            <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", paddingLeft: "19px", paddingRight: "20px", padding: "13px" }}>Update Details</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='my-4 mb-5'>
                    <Link className='btn btn-danger' to='/Categories' style={{ marginLeft: "15px", borderRadius: "25px", paddingLeft: "19px", paddingRight: "20px", padding: "13px" }}>Continue Shopping</Link>
                    <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", paddingLeft: "19px", paddingRight: "20px", padding: "13px" }} onClick={proceesToCheckout}>Proceed to Checkout </button>
                </div>
            </div>

        </>
    )
}
