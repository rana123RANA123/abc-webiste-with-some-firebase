import React, { useState } from 'react'
import '../../../App.scss'
import { HomeOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { firestore } from '../../../config/firebase'
import { useAuthContext } from '../../../contexts/AuthContext'
import { message } from 'antd'

const initialState = { message: "", contactName: "", email: "", subject: ""}

export default function Hero() {
  const { user } = useAuthContext()
  const [state, setState] = useState(initialState)
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))


  const handleContact = async (e) => {
    e.preventDefault()
    let { text, contactName, email, subject } = state

    const todo = {
      text, contactName, email, subject,
      dateCreated: serverTimestamp(),
      createdBy: {
        fullName: user.fullName,
        email: user.email,
        uid: user.uid,
      },
        id: Math.random().toString(36).slice(2)
      }
    
    try {
        await setDoc(doc(firestore, "contactData", todo.id), todo);
        message.success("A new contact data added successfully")
      } catch(e) {
        // console.error("Error adding contact data: ", e);
        message.error("Error in Adding Contact Data")
      }

  }

  // const createUserProfile = async (user) => {
  //   let { message, contactName, email, subject } = state
  //   // const { uid } = user

  //   const userData = {
  //     message, contactName, email, subject,
  //     dateCreated: serverTimestamp(),
  //     createdBy: {
  //       fullName: user.fullName,
  //       email: user.email,
  //       uid: user.uid,
  //     },
  //     id: Math.random().toString(36).slice(2)
  //   }

  //   try {
  //     await setDoc(doc(firestore, "contactData", userData.uid), userData);
  //     message.success("A new contact data has been added successfully")
  //   } catch (e) {
  //     message.error("Something went wrong while adding contact data")
  //   }
  // }
  return (
    <>

      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col hero2">
            <div style={{ marginTop: "140px" }}>
              <h1 className='text-center text-light fw-bold align-items-center justify-content-center d-flex'>Contact</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1>Get in touch</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-9">
            <div className="row">
              <textarea name="text" id="" onChange={handleChange} cols="50" placeholder='Enter Message' className='border-1' rows="8"></textarea>
            </div>
            <div className="row">

              <div className="col-6 mt-4">
                <input type="text" className='form-control border-1' onChange={handleChange} name='contactName' style={{ borderRadius: "0" }} placeholder='Enter Your Name' />
              </div>
              <div className="col-6 mt-4">
                <input type="text" className='form-control border-1' onChange={handleChange} name='email' style={{ borderRadius: "0" }} placeholder='Email' />
              </div>
              <div className="row mt-4">
                <input type="text" className='form-control border-1' onChange={handleChange} name='subject' style={{ borderRadius: "0" }} placeholder='Enter Your Subject' />
              </div>
            </div>
            <button className='btn btn-danger mt-4' style={{ padding: "18px", border: "1px solid black", width: "168px", borderRadius: "0" }} onClick={handleContact}>Submit</button>
          </div>


          <div className="col-3">
            <div className='d-flex ms-5'>
              <p><span><HomeOutlined style={{ fontSize: "30px" }} /></span> <span className='ms-3'>Buttonwood, California.</span> <br /><span className='ms-5'>Rosemead, CA 91770</span></p>
            </div>
            <br />
            <div className='d-flex ms-5'>
              <p><span><MobileOutlined style={{ fontSize: "30px" }} /></span> <span className='ms-3'>+1 253 565 2365</span> <br /><span className='ms-5'>Mon to Fri 9am to 6pm</span></p>
            </div>
            <div className='d-flex ms-5'>
              <p><span><MailOutlined style={{ fontSize: "30px" }} /></span> <span className='ms-3'>support@colorlib.com</span> <br /><span className='ms-5'>Send us your query anytime!</span></p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
