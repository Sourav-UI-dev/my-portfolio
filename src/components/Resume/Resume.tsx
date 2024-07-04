import React from 'react';
import './Resume.scss';

const Resume: React.FC = () => {

    const handleDownload = () => {
        // Assuming the file is located at public/assets/yourfile.pdf
        const fileUrl = `${process.env.PUBLIC_URL}/assets/SouravGhoshResume_24.pdf`;

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'yourfile.pdf'; // The name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className='resume-container'>
            <section id="resume" className="resume section">
                <div className="container section-title">
                    <h2>Resume</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Check my resume</span>
                        <button className='btn-downloadCV' onClick={handleDownload}>Download CV</button>
                    </div>
                    <p>Enthusiastic about learning new technologies and
                        ensuring exceptional experiences. A quick learner who consistently
                        strives to broaden skills and maintain customer satisfaction.</p>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Summary</h3>

                            <div className="resume-item pb-0">
                                <h4>Sourav Ghosh</h4>
                                <p>
                                    <em>
                                        Experienced Software Engineer with 6+ years of expertise in
                                        developing web applications. Skilled in modern frontend technologies
                                        like HTML, CSS, JavaScript, React, Next.js, Node.js, and Angular.
                                        Consistently delivers top-quality solutions with a profound grasp of
                                        technologies.
                                    </em>

                                </p>
                                <ul>
                                    <li>Versatile in spanning multiple
                                        platforms and technologies to adapt to
                                        diverse project requirements.</li>
                                    <li> Experienced in both Web App and Hybrid
                                        Mobile App development, ensuring
                                        proficiency across various environments.</li>
                                    <li>Skilled at teamwork, adeptly
                                        collaborating with colleagues to attain
                                        shared goals and objectives.</li>
                                    <li>
                                        Thrives under pressure, maintaining
                                        composure and productivity in
                                        challenging situations to ensure project
                                        success.
                                    </li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Contact</h3>

                            <div className="resume-item">
                                <h4></h4>
                                <ul>
                                    <li>Kolkata, WB, India</li>
                                    <li>(91) 7602313900</li>
                                    <li>ghoshsourav237@gmail.com</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>

                            <div className="resume-item">
                                <h4>Bachelor of Technology, Electronics & Communication Engineering</h4>
                                <h5>2013 - 2017</h5>
                                <p>
                                    <em>West Bengal University of Technology</em>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Senior Associate</h4>
                                <h5>2022 - Present</h5>
                                <p>
                                    <em>PWC, Kolkata, IN </em>
                                </p>
                                <ul>
                                    <li>Developed and maintained multiple web applications using modern
                                        frontend technologies such as React, and Angular.</li>
                                    <li>Collaborated with cross-functional teams including designers,
                                        developers, and project managers to deliver high-quality projects on
                                        time and within budget.</li>
                                    <li>Built reusable and modular UI components using React and Angular
                                        to improve development efficiency.</li>
                                    <li>Worked with RESTful APIs to fetch data from servers and display it
                                        on the UI.</li>
                                    <li>Performed unit testing using Jest/Enzyme to ensure that the code is
                                        functioning as expected.</li>
                                    <li>Used Git/GitHub for version control and collaboration.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>Software Engineer</h4>
                                <h5>2017 - 2022</h5>
                                <p>
                                    <em>Mindteck India Ltd., Kolkata, IN</em>
                                </p>
                                <ul>
                                    <li>Worked closely with software development and testing team
                                        members to design and develop robust solutions to meet client
                                        requirements for functionality, scalability, performance and find
                                        better, more efficient ways of doing things.</li>
                                    <li>Consulted regularly with customers on application development
                                        project status and software-related technical issues.</li>
                                    <li>Recommended and consulted with clients on the most appropriate graphic design.</li>
                                    <li>Developed high-quality, clean, accessible, testable, maintainable
                                        and scalable modern web applications and hybrid mobile
                                        applications using different frameworks and technologies in Agile
                                        Scrum environment.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Resume;