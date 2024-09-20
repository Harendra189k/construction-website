import React from 'react'
import constructionManag from '../assets/images/constructioManag.jpg'
import renovation from '../assets/images/renovation.jpg'
import architecture from '../assets/images/architecture.jpg'

const Services = () => {
  return (
    <section id="services">
            <div className="container">
                <h2>OUR SERVICES</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service_item">
                            <img src={constructionManag} alt="Our Services" />
                            <h3>CONSTRUCTION MANAGEMENT</h3>
                            <p>Ensure your project’s success with our expert construction management. We oversee every phase—from planning to execution—coordinating teams and resources for optimal efficiency. Our experienced managers prioritize quality, safety, and budget adherence, bringing your vision to life on time and within scope. Trust us to handle the complexities of construction!</p>
                            <a href="#services" className="btn know_btn">know more</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service_item">
                            <img src={renovation} alt="Our Services" />
                            <h3>RENOVATION</h3>
                            <p>Transform your space with our expert renovation services! We specialize in residential and commercial projects, bringing your vision to life with quality craftsmanship and innovative design. From concept to completion, we make the renovation process seamless and stress-free. Let us help you create a space that reflects your unique style with us.</p>
                            <a href="#services" className="btn know_btn">know more</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service_item">
                            <img src={architecture} alt="Our Services" />
                            <h3>ARCHITECTURE</h3>
                            <p>Transform your vision into reality with our innovative architecture services. Our talented team designs functional and inspiring spaces tailored to your needs. We blend creativity with practicality, ensuring every detail reflects your style. Let’s create something extraordinary together!</p>
                            <a href="#services" className="btn know_btn">know more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Services
