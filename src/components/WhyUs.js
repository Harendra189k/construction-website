import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { IoFootballSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";


const WhyUs = () => {
  return (
    <section id="why_us">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="head_title">
                            <h2>WHY CHOOSE US?</h2>
                            <p>Choosing us means partnering with a dedicated team committed to excellence. With years of experience in construction, architecture, and renovation, we prioritize quality, innovation, and client satisfaction. Our collaborative approach ensures your vision is at the forefront, while our attention to detail guarantees exceptional results. Trust us to deliver on time and within budget, making your project a seamless and enjoyable experience. Let us turn your dreams into reality!</p>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="why_us_item">
                            <span className="fa fa-leaf"><FaLeaf />
                            </span>
                            <h4>We deliver quality</h4>
                            <p>Quality is our priority. Our expert team uses top materials and innovative techniques for durable, stunning results in every project. Experience the difference—where your vision becomes reality! </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="why_us_item">
                            <span className="fa fa-futbol-o"><IoFootballSharp />
                            </span>
                            <h4>Always on time</h4>
                            <p>For us punctuality is key. We understand the importance of timelines and are committed to delivering your projects on schedule. Trust our dedicated team to manage every detail efficiently, ensuring your vision is realized right when you need it. Experience reliability with us!</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="why_us_item">
                            <span className="fa fa-group"><RiTeamFill />
                            </span>
                            <h4>We are pasionate</h4>
                            <p>Our passion for construction drives everything we do. We’re dedicated to bringing your vision to life with creativity and enthusiasm. Our team takes pride in every detail, ensuring exceptional results that reflect our commitment to quality and innovation. Let us turn your dreams into reality!</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="why_us_item">
                            <span className="fa fa-line-chart"><FaChartLine />
                            </span>
                            <h4>Professional Services</h4>
                            <p>We offer a full range of professional construction services tailored to meet your needs. Our experienced team delivers expert guidance, ensuring quality and efficiency at every stage of your project. From planning to execution, we’re committed to professionalism and excellence, making your vision a seamless reality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default WhyUs
