import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import selling1 from '../../../assets/img/gallery/best_selling1.jpg'
import selling2 from '../../../assets/img/gallery/best_selling2.jpg'
import selling3 from '../../../assets/img/gallery/best_selling3.jpg'
import selling4 from '../../../assets/img/gallery/best_selling4.jpg'
import selling5 from '../../../assets/img/gallery/best_selling5.jpg'
import selling6 from '../../../assets/img/gallery/best_selling6.jpg'

// Import Swiper styles
import '../../../App.scss'

// import required modules
import { Pagination } from 'swiper/modules';
import { StarOutlined } from '@ant-design/icons';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                
                <SwiperSlide>
                    <div className="col-2">
                        <img src={selling1} alt="" style={{height:"240px", width:"245px"}} />
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
                </SwiperSlide>

                <SwiperSlide>
                    <div className="col-2">
                        <img src={selling6} alt="" style={{height:"240px", width:"245px"}} />
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
                </SwiperSlide>

                <SwiperSlide>
                    <div className="col-2">
                        <img src={selling2} alt="" style={{height:"240px", width:"245px"}} />
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
                </SwiperSlide>

                <SwiperSlide>
                    <div className="col-2">
                        <img src={selling3} alt="" style={{height:"240px", width:"245px"}} />
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
                </SwiperSlide>

                <SwiperSlide>
                    <div className="col-2">
                        <img src={selling4} alt="" style={{height:"240px", width:"245px"}} />
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
                </SwiperSlide>

                <SwiperSlide>
                    <div className="col-2">
                        <img src={selling5} alt="" style={{height:"240px", width:"245px"}} />
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
                </SwiperSlide>

                <SwiperSlide>
                    <div className="col-2">
                        <img src={selling6} alt="" style={{height:"240px", width:"245px"}} />
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
                </SwiperSlide>
               
            </Swiper>
        </>
    );
}
