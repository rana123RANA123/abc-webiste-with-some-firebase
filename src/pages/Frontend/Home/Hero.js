import React, { useState } from 'react'
import '../../../App.scss'
import selling1 from '../../../assets/img/gallery/best_selling1.jpg'
import selling2 from '../../../assets/img/gallery/best_selling2.jpg'
import selling3 from '../../../assets/img/gallery/best_selling3.jpg'
import selling4 from '../../../assets/img/gallery/best_selling4.jpg'
import selling5 from '../../../assets/img/gallery/best_selling5.jpg'
import selling6 from '../../../assets/img/gallery/best_selling6.jpg'
import bestBook1 from '../../../assets/img/gallery/best-books1.jpg'
import rightImg from '../../../assets/img/gallery/ad.jpg'

import slider1 from '../../../assets/img/hero/h1_hero1.jpg'
import slider2 from '../../../assets/img/hero/h1_hero2.jpg'
import slider3 from '../../../assets/img/hero/h1_hero3.jpg'
import { ArrowUpOutlined, StarOutlined } from '@ant-design/icons'
import { useAuthContext } from '../../../contexts/AuthContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { message } from 'antd'
import { firestore } from '../../../config/firebase'

const initialState = { letter: "" }

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

            <div className="container">
                <div className="row">
                    {/* <div className="col background">
                        <div className="fontSize d-flex justify-content-center align-items-center text-light text-center" style={{ flexDirection: "column", position: 'relative', top: "160px" }}>
                            <span className='fontSize text-dark p-2 ms-4' style={{ backgroundColor: "white", fontSize: "16px", borderRadius: "28px" }}>Science Fiction</span>
                            <h1 style={{ fontSize: "70px" }}>The History<br /> of Phipino</h1>
                            <div>
                                <button className='btn topbtn btn-danger mt-3 text-light' style={{ width: '180px', fontSize: "25px", padding: "17px", border: "0", paddingTop: "8px", paddingBottom: "8px", marginLeft: "40px", borderRadius: "40px" }}>Browse Store</button>
                            </div>
                        </div>
                    </div> */}

                    <div id="carouselExampleDark" class="carousel carousel-dark slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src={slider1} class="d-block w-100" alt="..." />
                                <div class="carousel-caption text-light" style={{ position: "absolute", top: "-50px" }}>
                                    <div className="fontSize d-flex justify-content-center align-items-center text-light text-center" style={{ flexDirection: "column", position: 'relative', top: "160px" }}>
                                        <span className='fontSize text-dark p-2 ms-4' data-aos="fade-down" style={{ backgroundColor: "white", fontSize: "16px", borderRadius: "28px" }}>Science Fiction</span>
                                        <div data-aos="fade-down" pt-5>
                                            <h1 style={{ fontSize: "70px" }}>The History<br /> of Phipino</h1>
                                        </div>

                                        <div className='mt-3'>
                                            <button className='btn btn-danger ' style={{ padding: "18px", border: "1px solid white", width: "168px", borderRadius: "30px" }}>Browers Store</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={slider2} class="d-block w-100" alt="..." />
                                <div class="carousel-caption text-light" style={{ position: "absolute", top: "-50px" }}>
                                    <div className="fontSize d-flex justify-content-center align-items-center text-light text-center" style={{ flexDirection: "column", position: 'relative', top: "160px" }}>
                                        <span className='fontSize text-dark p-2 ms-4' data-aos="fade-down" style={{ backgroundColor: "white", fontSize: "16px", borderRadius: "28px" }}>Science Fiction</span>
                                        <div data-aos="fade-down">
                                            <h1 style={{ fontSize: "70px" }}>The History<br /> of Phipino</h1>
                                        </div>
                                        <div>
                                            <button className='btn btn-danger ' style={{ padding: "18px", border: "1px solid white", width: "168px", borderRadius: "30px" }}>Browers Store</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={slider3} class="d-block w-100" alt="..." />
                                <div class="carousel-caption text-light" style={{ position: "absolute", top: "-50px" }}>
                                    <div className="fontSize d-flex justify-content-center align-items-center text-light text-center" style={{ flexDirection: "column", position: 'relative', top: "160px" }}>
                                        <span className='fontSize text-dark p-2 ms-4' data-aos="fade-down" style={{ backgroundColor: "white", fontSize: "16px", borderRadius: "28px" }}>Science Fiction</span>
                                        <div data-aos="fade-down" >
                                            <h1 style={{ fontSize: "70px" }}>The History<br /> of Phipino</h1>
                                        </div>
                                        <div>
                                            <button className='btn btn-danger ' style={{ padding: "18px", border: "1px solid white", width: "168px", borderRadius: "30px" }}>Browers Store</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>




                </div>
            </div>



            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                        <h1 className='text-center mt-5'>Best Selling Books Ever</h1>
                    </div>
                </div>

                <Swiper
                    // slidesPerView={5}
                    // spaceBetween={30}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // modules={[Pagination]}
                    // className="mySwiper"

                    slidesPerView={5}
                    // spaceBetween={30}
                    // centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling1} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex mt-3'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling6} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling4} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling5} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling1} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling2} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling5} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling3} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling2} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling3} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling4} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling5} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col-2">
                            <img src={selling6} alt="" style={{ height: "240px", width: "235px" }} />
                            <h3 className='d-flex'>Moon <span className='ms-3'>Dance</span></h3>
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
                    </SwiperSlide>
                </Swiper>
            </div>


            {/* <div className="row mt-5">
                    <div className="col-2">
                        <img src={selling1} alt="" />
                        <h3>Moon Dance</h3>
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

                    <div className="col-2">
                        <img src={selling2} alt="" />
                        <h3>Moon Dance</h3>
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

                    <div className="col-2">
                        <img src={selling3} alt="" />
                        <h3>Moon Dance</h3>
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

                    <div className="col-2">
                        <img src={selling4} alt="" />
                        <h3>Moon Dance</h3>
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

                    <div className="col-2">
                        <img src={selling5} alt="" />
                        <h3>Moon Dance</h3>
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

                    <div className="col-2">
                        <img src={selling6} alt="" />
                        <h3>Moon Dance</h3>
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
            </div> */}


            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-9">
                        <div className='d-flex pb-3' style={{ justifyContent: "space-between" }}>
                            <h2>Featured This Week</h2>
                            <button className='btn btn-light '>View All</button>
                        </div>
                        <div className='bg-danger'>
                            <div className='p-4 ps-5 d-flex'>
                                <img src={bestBook1} alt="" />
                                <div className='text-light p-5'>
                                    <h1 className=''>The Rage Of Dragon</h1>
                                    <p>By Even Winter</p><br />
                                    <h1>$50.00</h1>
                                    <div className='d-flex align-items-center gap-2'>
                                        <StarOutlined />
                                        <StarOutlined />
                                        <StarOutlined />
                                        <StarOutlined />
                                        <StarOutlined />
                                        (120 Review)
                                    </div>
                                    <br /><br />
                                    <button className='btn btn-danger ' style={{ padding: "18px", border: "1px solid white", width: "168px", borderRadius: "30px" }}>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <img src={rightImg} style={{ width: "96%" }} alt="" />
                    </div>
                </div>
            </div >


            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-6">
                        <h1>Latest Published Items</h1>
                    </div>


                    <div className="col-6">
                        <button className='btn btn-danger' style={{ width: "100px", padding: "12px", borderRadius: "22px" }}>All</button>
                        <button className='btn btn-danger ms-2' style={{ width: "100px", padding: "12px", borderRadius: "22px" }}>Horror</button>
                        <button className='btn btn-danger ms-2' style={{ width: "100px", padding: "12px", borderRadius: "22px" }}>Thriller</button>
                        <button className='btn btn-danger ms-2' style={{ width: "140px", padding: "12px", borderRadius: "22px" }}>Science Fiction</button>
                        <button className='btn btn-danger ms-2' style={{ width: "100px", padding: "12px", borderRadius: "22px" }}>History</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-2">
                        <img src={selling1} alt="" />
                        <h3>Moon Dance</h3>
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

                    <div className="col-2">
                        <img src={selling2} alt="" />
                        <h3>Moon Dance</h3>
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

                    <div className="col-2">
                        <img src={selling3} alt="" />
                        <h3>Moon Dance</h3>
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

                    <div className="col-2">
                        <img src={selling4} alt="" />
                        <h3>Moon Dance</h3>
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

                    <div className="col-2">
                        <img src={selling5} alt="" />
                        <h3>Moon Dance</h3>
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

                    <div className="col-2">
                        <img src={selling6} alt="" />
                        <h3>Moon Dance</h3>
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
                <br />
                <div className='align-items-center justify-content-center d-flex '>
                    <button className='btn btn-danger' style={{ padding: "18px", border: "1px solid white", width: "168px", borderRadius: "30px" }}>View More</button>
                </div>
            </div>


            {/* <div className="container">
                <div className="row">
                    <div className="col-5 offset-1 wantBg1">

                    </div>
                    <div className="col-5 offset-1 wantBg2">

                    </div>
                </div>
            </div> */}


            {/* <section class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-6 wantBg1 d-flex justify-content-between align-items-center col-lg-6">
                        <div>
                            <h2 className='text-light'>The History <br />
                                of Phipino</h2>
                        </div>
                        <button className='btn btn-danger' style={{marginLeft:"222px",borderRadius:"25px", padding:"13px"}}>View Details</button>
                    </div>
                    <div class="col-xl-6 wantBg2 d-flex align-items-center col-lg-6">
                        <div className='d-flex'>
                            <h2 className='text-light'>Wilma Mumduya</h2>
                            <button className='btn btn-danger' style={{marginLeft:"150px",borderRadius:"25px", padding:"13px"}}>View Details</button>
                        </div>
                    </div>
                </div>
            </section> */}


            <section class="container mt-5">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-6 col-lg-6">
                        <div class="wantToWork-area wantBg1 w-padding2 align-items-center justify-content-center d-flex mb-30">
                            <div>
                                <h2 className='text-light'>The History <br />
                                    of Phipino</h2>
                            </div>
                            <button className='btn btn-danger' style={{ marginLeft: "222px", borderRadius: "25px", padding: "13px" }}>View Details</button>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="wantToWork-area wantBg2 w-padding2 align-items-center justify-content-center d-flex mb-30">
                            <div className='d-flex'>
                                <h2 className='text-light'>Wilma Mumduya</h2>
                                <button className='btn btn-danger' style={{ marginLeft: "150px", borderRadius: "25px", padding: "13px" }}>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="container mb-5 mt-3">
                <div className="row mb-3">
                    <div className="col-12 sectionBg1">
                        <div className='text-center text-light mt-5'>
                            <h1 className='mt-5'>Join Newsletter</h1>
                            <p className='mt-4'>Lorem started its journey with cast iron (CI) products in 1980. The initial main objective <br /> was to ensure pure water and affordable irrigation.</p>
                            <input type="text" className='mt-4' name='letter' onChange={handleChange} placeholder='Enter Your Email' style={{ width: "260px", border: "0px", padding: "8px", borderRadius: "30px", height: "50px" }} />
                            <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", padding: "13px" }} onClick={handleSubscribe}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="back-top">
                <a title="Go to Top" href="#"> <i className='text-dark fw-bold pb-5'><ArrowUpOutlined /></i></a>
            </div>
        </>


    )
}
