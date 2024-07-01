import React, { useEffect } from 'react';
import './About.scss';
import { BiChevronRight, BiSmile } from 'react-icons/bi';
import { PiSuitcaseSimple } from 'react-icons/pi';
import { CiTimer } from 'react-icons/ci';
import { RiTeamLine } from 'react-icons/ri';

const About: React.FC = () => {


    const stats = [
        { icon: <BiSmile />, end: 5, label: 'Happy Clients' },
        { icon: <PiSuitcaseSimple />, end: 6, label: 'Projects' },
        { icon: <CiTimer />, end: 1463, label: 'Hours Of Support' },
        { icon: <RiTeamLine />, end: 20, label: 'Team Networks' },
    ];

    const skills = [
        { name: 'HTML+CSS', value: '90%' },
        { name: 'Javascript/Typescript', value: '80%' },
        { name: 'ReactJS', value: '95%' },
        { name: 'Angular', value: '85%' },
        { name: 'NodeJS+MongoDB', value: '60%' },
        { name: '.NET+SQL', value: '50%' },
    ];

    useEffect(() => {
        const progressBars = document.querySelectorAll('.progress-bar-animation');
        progressBars.forEach((bar, index) => {
            const progressBar = bar as HTMLElement;
            const width = progressBar.getAttribute('data-width');
            if (width) {
                progressBar.style.width = '0';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, index * 300);
            }
        });
    }, []);


    useEffect(() => {
        const counters = document.querySelectorAll('.purecounter');
        counters.forEach((counter) => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target')!;
                const count = +counter.innerHTML;

                const increment = target / 200; // Adjust this value for speed

                if (count < target) {
                    counter.innerHTML = `${Math.ceil(count + increment)}`;
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerHTML = `${target}`;
                }
            };

            updateCount();
        });
    }, []);


    return (
        <div className='about-container'>
            {/* <!-- About Section --> */}
            <section id="about" className="about section">
                <div className="container section-title">
                    <h2>About</h2>
                    <span>Learn more about me</span>
                    <p>
                        I'm creative Web Developer based in Kolkata, WB, India. With {new Date().getFullYear() - 2017} years of experience as a professional
                        Web Developer, I have worked on a wide range of projects, from small websites to large-scale. I have acquired skills and knowledge necessary to make a successfull project.
                        I believe in the power of continuous learning and improvement. My goal is to create applications that not only meet but exceed user expectations, making their digital experiences as seamless and enjoyable as possible.
                    </p>
                </div>

                <div className="container">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src="assets/img/profile-img.jpeg" className="img-fluid" alt="Profile" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>UI/UX Designer &amp; Web Developer.</h2>
                            <p className="fst-italic py-3">
                                My journey in the tech world started with a fascination for how things work behind the scenes on the web. Over the years, I've honed my skills in creating user-friendly and efficient web applications. I collaborate with talented teams to build and maintain websites that not only look great but also perform flawlessly.
                                I had the opportunity to work closely with clients to understand their needs and deliver solutions that truly made a difference.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><BiChevronRight color='#ff6b8b' /> <strong>Birthday:</strong> <span>26 Aug 1995</span></li>
                                        <li><BiChevronRight color='#ff6b8b' /> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><BiChevronRight color='#ff6b8b' /> <strong>Phone:</strong> <span>+91 7602313900</span></li>
                                        <li><BiChevronRight color='#ff6b8b' /> <strong>City:</strong> <span>Kolkata,WB India</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><BiChevronRight color='#ff6b8b' /> <strong>Age:</strong> <span>29</span></li>
                                        <li><BiChevronRight color='#ff6b8b' /> <strong>Degree:</strong> <span>Bachelor</span></li>
                                        <li><BiChevronRight color='#ff6b8b' /> <strong>Email:</strong> <span>ghoshsourav237@gmail.com</span></li>
                                        <li><BiChevronRight color='#ff6b8b' /> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3">
                                When I'm not coding, you can find me exploring new technologies, dabbling in digital and embedded electronics, or expressing my creativity through drawing and painting. I've completed three years in painting, which adds a unique creative touch to my work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /About Section --> */}


            <section id="stats" className="stats section">
                <div className="container">
                    <div className="row gy-4">
                        {stats.map((stat, index) => (
                            <div className="col-lg-3 col-md-6 mt-md-5" key={index}>
                                <div className='count-box'>
                                    <i>{stat.icon}</i>
                                    <div className="stats-item">
                                        <span className="purecounter" data-target={stat.end}>0</span>
                                        <p>{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" className="skills section">
                <div className="container section-title">
                    <h2>Skills</h2>
                    <p>In my current role, I focus on: Designing and developing user-friendly web applications. Collaborating with designers and backend developers to create seamless experiences. Continuously learning and implementing new technologies to stay ahead in the field.</p>
                </div>

                <div className="container">
                    <div className="row skills-content">
                        {skills.map((skill, index) => (
                            <div className="col-lg-6" key={index}>
                                <div className="progress-bar-wrap">
                                    <span className="skill"><span>{skill.name}</span> <i className="val">{skill.value}</i></span>
                                    <div
                                        className="progress-bar-animation"
                                        data-width={skill.value}
                                    ></div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-lg-6">
                            <div className="progress-bar-wrap">
                                <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                                <ProgressBar now={100} />
                                <div
                                    className="progress-bar-animation"
                                    style={{
                                        width: '90%',
                                        animationDelay: `${0 * 0.3}s`,
                                    }}
                                ></div>
                            </div>
                            <div className="progress-bar-wrap">
                                <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                                <ProgressBar now={90} />
                            </div>
                            <div className="progress-bar-wrap">
                                <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                                <ProgressBar now={75} />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;