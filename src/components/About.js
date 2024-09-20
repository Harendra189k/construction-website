import React, { useEffect, useState } from 'react'
import aboutImg from '../assets/images/aboutImg.png'
import WhyUs from './WhyUs'
import {apiGet} from '../services/httpServices'
import {pathObj} from '../services/apiPath'

const About = () => {

    const [aboutList, setAboutList] = useState([])

    const aboutData = async (data) => {
        try {
          const response = await apiGet(pathObj.ABOUT);
    
          if (response.status === 200) {
            setAboutList(response.data);
          } else {
            console.log("Something went wrong");
          }
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        aboutData();
      }, []);

  return (
    <>
    <section id="about">
            <div className="container about_bg">
                <div className="row">
                    <div className="col-lg-7 col-md-6">
                        {
                            aboutList.map((item, index) => {
                                return (
                                    <div className="about_content" key={index}>
                                    <h2>{item.heading}</h2>
                                    <h3>{item.subHeading}</h3>
                                    <p>{item.discription}</p>
                                    {/* <p>sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p> */}
                                    <a  className="btn know_btn">know more</a>
                                </div>
                                )
                            })
                        }
                       
                    </div>
                    <div className="col-lg-3 col-md-6 col-lg-offset-1">
                        <div className="about_banner">
                            <img src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <WhyUs />
    </>
  )
}

export default About
