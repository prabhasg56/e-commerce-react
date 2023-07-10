import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
          <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>PK Group</span></h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +91 7782835748</p>
                            <p><i class="fa-solid fa-envelope"></i> prabhask856@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Bengaluru India</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Design By Prabhakar</p>
            </div>
    </div>
  )
}

export default Footer;
