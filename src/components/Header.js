import React from 'react'
import '../App.scss'
import logo1 from '../assets/img/logo/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useAuthContext } from '../contexts/AuthContext'
import { signOut } from 'firebase/auth'
import { message } from 'antd'
import { auth } from '../config/firebase'

export default function Header() {

    const { user } = useAuthContext()
    const { isAuth, dispatch } = useAuthContext()
    // const addToCartDispatch = useDispatch()

    const navigate = useNavigate()


    // const resetCart = () => {
    //   addToCartDispatch(resetCart())
    // }

    const handleCart = () => {
        navigate('/cart')
    }

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                message.success("Signout successful")
                dispatch({ type: "SET_LOGGED_OUT" })
                // resetCart()
                navigate('/')

            })
            .catch(err => {
                message.error("Signout not successful")
            })
    }


    return (
        <>

            <div className="container-fluid" style={{ paddingBottom: "22px", backgroundColor: "white" }}>
                <div className="row">
                    <div className="col-8 offset-1 mt-4 d-flex">
                        <img src={logo1} alt="" />
                        <div className='ms-4'>
                            <input type="text" className='' name="Search" placeholder="Search book by author or publisher" style={{ width: "400px", padding: "12px", border: "1px solid black", borderRadius: "25px" }} />
                        </div>
                    </div>


                    <div className="col-3 d-flex mt-4 align-items-center">
                        <div>
                            <h6 className='me-4 mt-2'>Hi, {user.fullName}</h6>
                        </div>

                        <div>
                            <Link to='/faq' className=' ' style={{ textDecoration: "none", fontSize: "17px", color: "black" }}>FAQ</Link>
                        </div>
                        {/* <div>
                            <Link to='/trackOrder' className='ms-3' style={{textDecoration:"none",fontSize:"17px", color:"black"}}>Track Order</Link>
                        </div> */}
                        <div>
                            <ShoppingCartOutlined onClick={handleCart} className='ms-4' style={{ fontSize: "40px", cursor:"pointer" }} />
                        </div>
                        {!isAuth
                        ?<Link to='/auth/login' className='bg-danger btn text-light' style={{ width: '130px', padding: "10px", paddingTop: "13px", paddingLeft: "30px", paddingRight: "30px", paddingBottom: "13px", textDecoration: "none", border: "0", marginLeft: "40px", borderRadius: "25px" }}>Sign in</Link>
                        : <button className='btn btn-danger' style={{ marginLeft: "18px", borderRadius: "25px",width:"120px", padding: "13px" }} onClick={handleLogout}>Logout</button>
                    }
                        <div >
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
