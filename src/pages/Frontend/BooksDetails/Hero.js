import React from 'react'
import bestBook1 from '../../../assets/img/gallery/best-books1.jpg'
import { StarOutlined } from '@ant-design/icons'
import '../../../App.scss'

export default function Hero() {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12">
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
                </div>
            </div>


            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <button className='btn btn-danger' style={{ width: "120px", padding: "10px", borderRadius: "24px" }}>Description</button>
                        <button className='btn ms-3 btn-danger' style={{ width: "120px", padding: "10px", borderRadius: "24px" }}>Author</button>
                        <button className='btn ms-3 btn-danger' style={{ width: "120px", padding: "10px", borderRadius: "24px" }}>Comments</button>
                        <button className='btn ms-3 btn-danger' style={{ width: "120px", padding: "10px", borderRadius: "24px" }}>Review</button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-9">
                        <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and</p>
                        <br />
                        <p>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.</p>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>

            <div className="container mb-5 mt-3 py-4">
                <div className="row mb-3">
                    <div className="col-12 sectionBg1">
                        <div className='text-center text-light mt-5'>
                            <h1 className='mt-5'>Join Newsletter</h1>
                            <p className='mt-4'>Lorem started its journey with cast iron (CI) products in 1980. The initial main objective <br /> was to ensure pure water and affordable irrigation.</p>
                            <input type="text" className='mt-4' placeholder='Enter Your Email' style={{ width: "260px", border: "0px", padding: "8px", borderRadius: "30px", height: "50px" }} />
                            <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", padding: "13px" }}>Subscribe</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
