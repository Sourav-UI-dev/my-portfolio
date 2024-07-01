import React, { useEffect } from 'react';
import './Contact.scss';
import { BiLogoWhatsapp, BiLogoGmail, BiLogoInstagram, BiLogoLinkedin, BiPhoneCall } from 'react-icons/bi';
import { RiTwitterXLine, RiMapPinLine } from 'react-icons/ri';
import { TbSocial } from 'react-icons/tb';

const Contact: React.FC = () => {

    return (
        <div className='contact-container'>
            <section id="contact" className="contact section">
                <div className="container section-title">
                    <h2>contact</h2>
                    <span>Get in touch</span>
                </div>
                <div className='container' data-aos="fade" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-4">

                            <div className="info-item" data-aos="fade-up" data-aos-delay="200">
                                <span><TbSocial /></span>
                                <div>
                                    <h3>Social Profiles</h3>
                                    <div className="social-links">
                                        <a href="https://x.com/ghoshsourav2681" className="twitter"><RiTwitterXLine /></a>
                                        <a href="https://wa.me/+917602313900" className="whatsapp"><BiLogoWhatsapp /></a>
                                        <a href="https://www.instagram.com/accounts/login" className="instagram"><BiLogoInstagram /></a>
                                        <a href="https://www.linkedin.com/in/sourav-ghosh-784356b3/" className="linkedin"><BiLogoLinkedin /></a>
                                    </div>
                                </div>
                            </div>
                            <div className={`info-item`} data-aos="fade-up" data-aos-delay="200">
                                <span><RiMapPinLine /></span>
                                <div>
                                    <h3>Address</h3>
                                    <p><a href="https://maps.app.goo.gl/51cXqWmFhKXc3jdr5">Telipukur, Barddhaman, WB, IN 713103</a></p>
                                </div>
                            </div>

                            <div className={`info-item`} data-aos="fade-up" data-aos-delay="300">
                                <span><BiPhoneCall /></span>
                                <div>
                                    <h3>Call Us</h3>
                                    <p><a href="tel:+917602313900">+91 7602313900</a></p>
                                </div>
                            </div>

                            <div className={`info-item`} data-aos="fade-up" data-aos-delay="400">
                                <span><BiLogoGmail /></span>
                                <div>
                                    <h3>Email Us</h3>
                                    <p><a href="mailto:ghoshsourav237@gamil.com">ghoshsourav237@gamil.com</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <form
                                action="forms/contact.php"
                                method="post"
                                className={'contact-email-form'}
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                    </div>

                                    <div className="col-md-6">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                                    </div>

                                    <div className="col-md-6">
                                        <input type="phone" name="phone" className="form-control" placeholder="Your Phone Number" required />
                                    </div>

                                    <div className="col-md-6">
                                        <input type="text" className="form-control" name="address" placeholder="Your Address" required />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" rows={6} placeholder="Message" required></textarea>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>

                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;