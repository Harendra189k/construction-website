import React, { useEffect, useState } from 'react'
import profileImg from '../assets/images/profile.jpg'
import { apiGet } from '../services/httpServices';
import { pathObj } from '../services/apiPath';

const CustomerReviews = () => {
    const [reviewsList, setReviewsList] = useState([])

    const reviewsData = async (data) => {
        try {
          const response = await apiGet(pathObj.REVIEWS);
    
          if (response.status === 200) {
            setReviewsList(response.data);
          } else {
            console.log("Something went wrong");
          }
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        reviewsData();
      }, []);
  return (
    <section id="testimonial">
            <div className="container text-center testimonial_area">
                <h2>Customer Reviews</h2>
                <p>We value the feedback from our clients as it reflects our commitment to quality and service. Our customer reviews highlight the diverse range of projects we've completed, showcasing our expertise in residential and commercial construction. Clients often praise our team's professionalism, attention to detail, and ability to communicate effectively throughout the project. Many reviews emphasize our commitment to staying on schedule and within budget, as well as our willingness to adapt to any challenges that arise.</p>
               <div className="row">
                        {
                            reviewsList.map((item, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                    <div className="testimonial_item">
                            <div className="testimonial_content text-left">
                                <p>{item.reviews}</p>
                            </div>
                            <img src={item.reviewerImage} alt="Testimonial" />
                            <p className="worker_name">{item.reviewerName}</p>
                        </div>
                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>
  )
}

export default CustomerReviews
