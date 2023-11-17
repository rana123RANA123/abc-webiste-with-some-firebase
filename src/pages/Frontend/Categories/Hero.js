import React, { useState } from 'react'
import '../../../App.scss'
import selling1 from '../../../assets/img/gallery/best_selling1.jpg'
import selling2 from '../../../assets/img/gallery/best_selling2.jpg'
import selling3 from '../../../assets/img/gallery/best_selling3.jpg'
import selling4 from '../../../assets/img/gallery/best_selling4.jpg'
import selling5 from '../../../assets/img/gallery/best_selling5.jpg'
import selling6 from '../../../assets/img/gallery/best_selling6.jpg'
import { StarOutlined } from '@ant-design/icons'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { firestore } from '../../../config/firebase'
import { message } from 'antd'
import { useAuthContext } from '../../../contexts/AuthContext'

const initialState = { letter: ""}

export default function Hero() {
  const { user } = useAuthContext()
  const [state, setState] = useState(initialState)
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))


  const handleSubscribe = async (e) => {
    e.preventDefault()
    let { letter } = state

    const todo = {
      letter,
      dateCreated: serverTimestamp(),
      createdBy: {
        fullName: user.fullName,
        email: user.email,
        uid: user.uid,
      },
      id: Math.random().toString(36).slice(2)
    }

    try {
      await setDoc(doc(firestore, "joinNewLetter", todo.id), todo);
      message.success("A new Joining Letter added successfully")
    } catch (e) {
      // console.error("Error adding contact data: ", e);
      message.error("Error in Adding Joining Letter")
    }

  }

  return (
    <>

      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col hero2">
            <div style={{ marginTop: "140px" }}>
              <h1 className='text-center text-light fw-bold align-items-center justify-content-center d-flex'>Categories</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3>Filter by genres</h3>
            <br />

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2 mt-1' style={{ fontSize: "18px" }}>History</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Herror-Thriller</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Love Stories</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Science Fiction</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Biography</p>
              </label>
            </div>

            <div className='mt-3'>
              <h3>Price Filter</h3>
            </div>

            <div className='d-flex mt-4 gap-2' style={{ justifyContent: "start" }}>
              <select name='#' style={{ width: "390px", padding: "10px", borderRadius: "20px" }}>
                <option value="">Filter by Rating</option>
                <option value="">5 Star Rating</option>
                <option value="">4 Star Rating</option>
                <option value="">3 Star Rating</option>
                <option value="">2 Star Rating</option>
                <option value="">1 Star Rating</option>
              </select>
            </div>


            <div className='mt-4'>
              <h3>Filter by Publisher</h3>
            </div>

            <br />

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2 mt-1' style={{ fontSize: "18px" }}>Green Publications</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Anondo Publications</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Rinku Publications</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Sheba Publications</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Red Publications</p>
              </label>
            </div>



            <div className='mt-4'>
              <h3>Filter by Author Name</h3>
            </div>

            <br />

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2 mt-1' style={{ fontSize: "18px" }}>Buster Hyman</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Phil Harmonic</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Cam L.Toe</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Otto Matic</p>
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "20px" }} />
              <label class="form-check-label" for="flexCheckDefault">
                <p className='ms-2' style={{ fontSize: "18px" }}>Juan Annatoo</p>
              </label>
            </div>

          </div>


          <div className="col-8">
            <div className='d-flex' style={{ justifyContent: "end" }}>
              <select name='#' style={{ width: "230px", padding: "10px", borderRadius: "20px" }}>
                <option value="">Browse by popularity</option>
                <option value="">Name</option>
                <option value="">New</option>
                <option value="">Old</option>
                <option value="">Price</option>
              </select>
            </div>

            <div className="row mt-4">

              <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                <img src={selling5} alt="" />
                <h5>Moon Dance</h5>
                <p>J.R Rain</p>
                <div className='d-flex gap-2'>
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
                <div className='d-flex mt-2'>
                  <p className=''>(<span className='text-danger'>120</span> Review)</p>
                  <h4 className='ms-4 text-danger'>$50</h4>
                </div>
              </div>

              <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                <img src={selling2} alt="" />
                <h5>Moon Dance</h5>
                <p>J.R Rain</p>
                <div className='d-flex gap-2'>
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
                <div className='d-flex mt-2'>
                  <p className=''>(<span className='text-danger'>120</span> Review)</p>
                  <h4 className='ms-4 text-danger'>$50</h4>
                </div>
              </div>

              <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                <img src={selling3} alt="" />
                <h5>Moon Dance</h5>
                <p>J.R Rain</p>
                <div className='d-flex gap-2'>
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
                <div className='d-flex mt-2'>
                  <p className=''>(<span className='text-danger'>120</span> Review)</p>
                  <h4 className='ms-4 text-danger'>$50</h4>
                </div>
              </div>

              <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                <img src={selling4} alt="" />
                <h5>Moon Dance</h5>
                <p>J.R Rain</p>
                <div className='d-flex gap-2'>
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
                <div className='d-flex mt-2'>
                  <p className=''>(<span className='text-danger'>120</span> Review)</p>
                  <h4 className='ms-4 text-danger'>$50</h4>
                </div>
              </div>



              <div className="row mt-5">
                <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                  <img src={selling4} alt="" />
                  <h5>Moon Dance</h5>
                  <p>J.R Rain</p>
                  <div className='d-flex gap-2'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                  <div className='d-flex mt-2'>
                    <p className=''>(<span className='text-danger'>120</span> Review)</p>
                    <h4 className='ms-4 text-danger'>$50</h4>
                  </div>
                </div>
                <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                  <img src={selling3} alt="" />
                  <h5>Moon Dance</h5>
                  <p>J.R Rain</p>
                  <div className='d-flex gap-2'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                  <div className='d-flex mt-2'>
                    <p className=''>(<span className='text-danger'>120</span> Review)</p>
                    <h4 className='ms-4 text-danger'>$50</h4>
                  </div>
                </div>
                <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                  <img src={selling2} alt="" />
                  <h5>Moon Dance</h5>
                  <p>J.R Rain</p>
                  <div className='d-flex gap-2'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                  <div className='d-flex mt-2'>
                    <p className=''>(<span className='text-danger'>120</span> Review)</p>
                    <h4 className='ms-4 text-danger'>$50</h4>
                  </div>
                </div>
                <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                  <img src={selling1} alt="" />
                  <h5>Moon Dance</h5>
                  <p>J.R Rain</p>
                  <div className='d-flex gap-2'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                  <div className='d-flex mt-2'>
                    <p className=''>(<span className='text-danger'>120</span> Review)</p>
                    <h4 className='ms-4 text-danger'>$50</h4>
                  </div>
                </div>
              </div>




              <div className="row mt-5">
                <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                  <img src={selling4} alt="" />
                  <h5>Moon Dance</h5>
                  <p>J.R Rain</p>
                  <div className='d-flex gap-2'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                  <div className='d-flex mt-2'>
                    <p className=''>(<span className='text-danger'>120</span> Review)</p>
                    <h4 className='ms-4 text-danger'>$50</h4>
                  </div>
                </div>
                <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                  <img src={selling5} alt="" />
                  <h5>Moon Dance</h5>
                  <p>J.R Rain</p>
                  <div className='d-flex gap-2'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                  <div className='d-flex mt-2'>
                    <p className=''>(<span className='text-danger'>120</span> Review)</p>
                    <h4 className='ms-4 text-danger'>$50</h4>
                  </div>
                </div>
                <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                  <img src={selling2} alt="" />
                  <h5>Moon Dance</h5>
                  <p>J.R Rain</p>
                  <div className='d-flex gap-2'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                  <div className='d-flex mt-2'>
                    <p className=''>(<span className='text-danger'>120</span> Review)</p>
                    <h4 className='ms-4 text-danger'>$50</h4>
                  </div>
                </div>
                <div className="col-3" style={{ backgroundColor: "#f8f7ff", border: "1px solid white" }}>
                  <img src={selling2} alt="" />
                  <h5>Moon Dance</h5>
                  <p>J.R Rain</p>
                  <div className='d-flex gap-2'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                  <div className='d-flex mt-2'>
                    <p className=''>(<span className='text-danger'>120</span> Review)</p>
                    <h4 className='ms-4 text-danger'>$50</h4>
                  </div>
                </div>
              </div>


              <div className='align-items-center justify-content-center d-flex mt-5 mb-5'>
                <button className='btn btn-danger ' style={{ padding: "18px", border: "1px solid white", width: "168px", borderRadius: "30px" }}>Browse More</button>
              </div>

            </div>
          </div>

          <div className="col-12">
            <div className="container mb-5 mt-3">
              <div className="row mb-3">
                <div className="col-12 sectionBg1">
                  <div className='text-center text-light mt-5'>
                    <h1 className='mt-5'>Join Newsletter</h1>
                    <p className='mt-4'>Lorem started its journey with cast iron (CI) products in 1980. The initial main objective <br /> was to ensure pure water and affordable irrigation.</p>
                    <input type="text" className='mt-4' placeholder='Enter Your Email' name='letter' onChange={handleChange} style={{ width: "260px", border: "0px", padding: "8px", borderRadius: "30px", height: "50px" }} />
                    <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", padding: "13px" }} onClick={handleSubscribe}>Subscribe</button>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
