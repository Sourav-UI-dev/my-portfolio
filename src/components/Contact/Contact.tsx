import React, { useState } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { BiLogoWhatsapp, BiLogoGmail, BiLogoInstagram, BiLogoLinkedin, BiPhoneCall } from 'react-icons/bi';
import { RiTwitterXLine, RiMapPinLine } from 'react-icons/ri';
import { TbSocial } from 'react-icons/tb';
import { Col, Form, Spinner } from 'react-bootstrap';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;



const Contact: React.FC = () => {
    const [formValue, setFormValue] = useState<any>({});
    const [validated, setValidated] = useState(false);
    const [status, setStatus] = useState('');
    const [loading, setLoader] = useState(false);

    const handleOnSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        setStatus('');
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            setLoader(true);
            console.log("formSubmitted", formValue);
            emailjs
                .sendForm(serviceId || '', templateId || '', form, {
                    publicKey: publicKey,
                })
                .then(
                    () => {
                        setLoader(false);
                        setStatus('success');
                    },
                    (error) => {
                        console.log('Error while sending message', error);
                        setLoader(false);
                        setStatus('error');
                    },
                );
        }
        setValidated(true);
    }

    const handleChange = (e: any) => {
        const formobj: any = { ...formValue };
        formobj[e.target.name] = e.target.value;
        setFormValue(formobj);
    }

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
                                    <h3>Call Me</h3>
                                    <p><a href="tel:+917602313900">+91 7602313900</a></p>
                                </div>
                            </div>

                            <div className={`info-item`} data-aos="fade-up" data-aos-delay="400">
                                <span><BiLogoGmail /></span>
                                <div>
                                    <h3>Email Me</h3>
                                    <p><a href="mailto:ghoshsourav237@gamil.com">ghoshsourav237@gamil.com</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <Form
                                noValidate validated={validated} onSubmit={handleOnSubmit}
                                className={'contact-email-form'}
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="row gy-4">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Your Name"
                                            className='form-control'
                                            name="user_name"
                                            value={formValue?.user_name}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type='invalid'>Please Enter Name!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Your Email"
                                            className='form-control'
                                            name="user_email"
                                            value={formValue?.user_email}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type='invalid'>Please Enter Valid Email!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Control
                                            required
                                            type="tel"
                                            placeholder="Your Phone Number"
                                            className='form-control'
                                            name="user_phone"
                                            value={formValue?.user_phone}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type='invalid'>Please Enter Valid Phone!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                                        <Form.Control
                                            type="text"
                                            placeholder="Your Address"
                                            className='form-control'
                                            name="user_address"
                                            value={formValue?.user_address}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Your Subject"
                                            className='form-control'
                                            name="user_subject"
                                            value={formValue?.user_subject}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type='invalid'>Please Enter Subject!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom06">
                                        <Form.Control
                                            required
                                            as="textarea"
                                            rows={6}
                                            placeholder="Your Message"
                                            className='form-control'
                                            name="user_message"
                                            value={formValue?.user_message}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type='invalid'>Please Enter Message!</Form.Control.Feedback>
                                    </Form.Group>

                                    <div className="col-md-12 text-center">
                                        {!loading && status === 'error' && <div className="error-message">Something went wrong! Please try again later.</div>}
                                        {!loading && status === 'success' && <div className="sent-message">Your message has been sent. Thank you!</div>}
                                        
                                        {loading && <button disabled><Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />Sending...</button>}

                                        {!loading && <button type="submit">Send Message</button>}
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;