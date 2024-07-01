import React, { useEffect } from 'react';
import './Services.scss';
import { LuMonitorSmartphone } from 'react-icons/lu';
import { SiFreelancer, SiWebpack } from 'react-icons/si';


const Services: React.FC = () => {

    return (
        <div className='service-container'>
            <section id="service" className="service section">
                <div className="container section-title">
                    <h2>Services</h2>
                    <span>My Services</span>
                    <p>I offer a comprehensive range of development services, including custom web application development, frontend and full-stack development, mobile app development using Ionic, and flexible freelancing services. With a focus on creating scalable, secure, and user-friendly solutions, I ensure that each project is tailored to meet your specific business needs and delivered with the highest quality standards.</p>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-item item-cyan position-relative">
                                <div className="icon">
                                    <span className='sevice-icon'><LuMonitorSmartphone /></span>
                                </div>
                                <a href="service-details.html" className="stretched-link">
                                    <h3>Custom Web Development</h3>
                                </a>
                                <p>Whether you need a robust e-commerce platform, a dynamic content management system, or a sleek corporate website,high-performance hybrid mobile applications that provide a native-like experience across both Android and iOS platforms, I can create solutions that are scalable, secure, and user-friendly.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-item item-orange position-relative">
                                <div className="icon">
                                    <span className='sevice-icon'><SiWebpack /></span>
                                </div>
                                <a href="service-details.html" className="stretched-link">
                                    <h3>Full Stack Development</h3>
                                </a>
                                <p>With expertise in both frontend and backend technologies, I deliver high-quality application that enhances user experience. Providing end-to-end solutions for your web projects. I ensure seamless integration between the client-side and server-side, resulting in a cohesive and efficient application.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-item item-teal position-relative">
                                <div className="icon">
                                    <span className='sevice-icon'><SiFreelancer /></span>
                                </div>
                                <a href="service-details.html" className="stretched-link">
                                    <h3>Freelancing Services</h3>
                                </a>
                                <p> I offer flexible and reliable development services to meet your unique project needs. Whether you're a startup looking to build your first product, or an established business seeking additional development support, I can provide the expertise and dedication required to bring your vision to life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
export default Services;