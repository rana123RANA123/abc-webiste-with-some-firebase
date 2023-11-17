import React from 'react'
import logo from '../assets/img/logo/logo.png'
import { FacebookFilled, GithubFilled, InstagramFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons'

export default function Footer() {
  return (
    <>

      <div className="container-fluid py-5" style={{backgroundColor:"#edede9"}}>
        <div className="row mb-5">
          <div className="col-3 offset-1">
            <div>
              <img src={logo} alt="" />
              <br /><br />
              <p>Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
              <div style={{ fontSize: "30px" }}>
                <TwitterOutlined className='' />
                <GithubFilled className='ms-2' />
                <FacebookFilled className='ms-2' />
                <YoutubeFilled className='ms-2' />
                <InstagramFilled className='ms-2' />
              </div>
            </div>
          </div>


          <div className="col-2 justify-content-center d-flex">
            <div className='' style={{ flexDirection: "column" }}>
              <h4>
                Book Category
              </h4>
              <p>History</p>
              <p>Horror - Thriller</p>
              <p>Love Stories</p>
              <p>Science Fiction</p>
            </div>
          </div>


          <div className="col-3 justify-content-center d-flex">
            <div className='' style={{ flexDirection: "column" }}>
              <h4>
                Topics
              </h4>
              <p>Biography</p>
              <p>Astrology</p>
              <p>Digital Marketing</p>
              <p>Software Development</p>
            </div>
          </div>


          <div className="col-3 justify-content-center d-flex">
            <div className='' style={{ flexDirection: "column" }}>
              <h4>
              Site Map
              </h4>
              <p>Home</p>
              <p>About us</p>
              <p>FAQ</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
