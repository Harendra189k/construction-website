import React from 'react';
import tempLogo from '../assets/images/templogo.jpg'
import { FaFacebook, FaSquareWhatsapp, FaWhatsapp } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import { MdAddCall } from 'react-icons/md';

const Footer = () => {
    return (
        <footer>
            <div className="container footer_top">
                <div className="row">
                    <div className="col-lg-4 col-sm-7">
                        <div className="footer_item">
                            <h4>About Company</h4>
                            
                            <img className="logo" src={tempLogo} alt="Construction" />
                            <p>Welcome to DreamBuild Construction! With over 20 years of experience, we specialize in custom homes, renovations, and commercial projects. Our dedicated team ensures quality and client satisfaction through open communication and top-notch materials. Explore our portfolio and contact us for a free consultation—let’s build something extraordinary together!</p>

                            <ul className="list-inline footer_social_icon">
                                <li><a href="#"><span className="fa fa-facebook"><FaFacebook />
                                </span></a></li>
                                <li><a href="#"><span className="fa fa-twitter"><FaInstagramSquare />
                                </span></a></li>
                                <li><a href="#"><span className="fa fa-youtube"><FaSquareWhatsapp />
                                </span></a></li>
                                <li><a href="#"><span className="fa fa-google-plus"><SiGooglemaps />
                                </span></a></li>
                                {/* <li><a href="#"><span className="fa fa-linkedin"></span></a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-5">
                        <div className="footer_item">
                            <h4>Explore link</h4>
                            <ul className="list-unstyled footer_menu">
                                <li><a href="#"><span className="fa fa-play"></span> Our services</a></li>
                                <li><a href="#"><span className="fa fa-play"></span> Meet our team</a></li>
                                <li><a href="#"><span className="fa fa-play"></span> Forum</a></li>
                                <li><a href="#"><span className="fa fa-play"></span> Help center</a></li>
                                <li><a href="#"><span className="fa fa-play"></span> Contact Cekas</a></li>
                                <li><a href="#"><span className="fa fa-play"></span> Privacy Policy</a></li>
                                <li><a href="#"><span className="fa fa-play"></span> Cekas terms</a></li>
                                <li><a href="#"><span className="fa fa-play"></span> Site map</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-sm-7">
                        <div className="footer_item">
                            <h4>Latest post</h4>
                            <ul className="list-unstyled post">
                                <li><a href="#"><span className="date">20 <small>AUG</small></span> Luptatum omittantur duo ne mpetus indoctum</a></li>
                                <li><a href="#"><span className="date">20 <small>AUG</small></span> Luptatum omittantur duo ne mpetus indoctum</a></li>
                                <li><a href="#"><span className="date">20 <small>AUG</small></span> Luptatum omittantur duo ne mpetus indoctum</a></li>
                                <li><a href="#"><span className="date">20 <small>AUG</small></span> Luptatum omittantur duo ne mpetus indoctum</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-lg-3 col-sm-5">
                        <div className="footer_item">
                            <h4>Contact us</h4>
                            <ul className="list-unstyled footer_contact">
                                <li><a href="#"><span className="fa fa-map-marker"></span>PN.51 krishanapuri, near mansrovar metro station, mansrovar, Jaipur 302020</a></li>
                                <li><a href="mailto:hello@psdfreebies.com"><span className="fa fa-envelope"></span> jwalaconstuction@gmail.com</a></li>
                                <li>
                                    <a href="tel:+44000001234">
                                        <span className="fa fa-mobile"></span>

                                        <p>  <FaWhatsapp />
                                        +44 00 00 1234 
                                            <br /></p>
                                        <p>  <MdAddCall />
                                        +44 00 00 1234 
                                            <br /></p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="col-lg-3 col-sm-5">
                        <div className="footer_item">
                            <h4>Our Google Location</h4>
                            <ul className="list-unstyled footer_contact">
                            <iframe className='map-location'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14112.804948300433!2d75.8230639!3d26.8697011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4cde2a0f2c73%3A0x1881bc26c8c404e9!2sMansarovar%20Metro%20Station!5e0!3m2!1sen!2sin!4v1634141415142!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
                            </ul>
                        </div>
                    </div>












                </div>
            </div>
            {/* Footer bottom */}
            <div className="footer_bottom text-center">
                {/* <p className="wow fadeInRight">
                    Made with 
                    <i className="fa fa-heart"></i>
                    by 
                    <a target="_blank" rel="noopener noreferrer" href="http://bootstrapthemes.co">Bootstrap Themes</a> 
                    2016. All Rights Reserved
                </p> */}
            </div>
        </footer>
    );
};

export default Footer;
