import React, { useEffect, useMemo, useState } from 'react';
import './Home.scss';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { BiLogoInstagram, BiLogoLinkedin, BiLogoWhatsapp } from 'react-icons/bi';
import { RiTwitterXLine } from 'react-icons/ri';

const Home: React.FC = () => {

    const [init, setInit] = useState(false);
    const toType = ["Developer", "Freelancer", "Non-professional Singer"];
    const delayTypingChar = 200;
    const delayErasingText = 150;
    const delayTypingText = 3000;

    const [typedText, setTypedText] = useState('');
    const [toTypeIndex, setToTypeIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    useEffect(() => {
        let timeoutId: number;

        if (isTyping) {
            if (charIndex < toType[toTypeIndex].length) {
                setTypedText((prev) => prev + toType[toTypeIndex].charAt(charIndex));
                setCharIndex((prev) => prev + 1);
                timeoutId = window.setTimeout(() => setIsTyping(true), delayTypingChar);
            } else {
                timeoutId = window.setTimeout(() => setIsTyping(false), delayTypingText);
            }
        } else {
            if (charIndex > 0) {
                setTypedText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
                timeoutId = window.setTimeout(() => setIsTyping(false), delayErasingText);
            } else {
                setToTypeIndex((prev) => (prev + 1) % toType.length);
                setCharIndex(0);
                timeoutId = window.setTimeout(() => setIsTyping(true), delayTypingChar);
            }
        }

        // Cleanup function to clear timeouts when component unmounts
        return () => clearTimeout(timeoutId);
    }, [typedText, isTyping]);


    // const particlesLoaded = async (container?: Container): Promise<void> => {
    //     console.log(container);
    // };

    const options: ISourceOptions = useMemo(
        () => ({
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );


    return (
        <motion.div
            className="home-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Particles
                id="tsparticles"
                options={options}
            />
            <section id="home" className="hero section">
                <div className="container zoom-out">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <h2>Sourav Ghosh</h2>
                            <p>
                                I'm <span className='typed'>{typedText}</span> <span className="cursor">&nbsp;</span>
                            </p>
                            <div className="social-links">
                                <a href="https://x.com/ghoshsourav2681"><RiTwitterXLine /></a>
                                <a href="https://wa.me/+917602313900"><BiLogoWhatsapp /></a>
                                <a href="https://www.instagram.com/accounts/login"><BiLogoInstagram /></a>
                                <a href="https://www.linkedin.com/in/sourav-ghosh-784356b3/"><BiLogoLinkedin /></a>
                            </div>
                            {/* <button classNameName="dark-theme__gradient-button">Gradient Button</button> */}
                        </div>
                    </div>
                </div>
            </section>

        </motion.div>
    );
};

export default Home;
