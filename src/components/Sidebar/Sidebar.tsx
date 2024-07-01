// src/components/Sidebar.tsx
import React, { useState, useEffect } from 'react';
import { Nav, Offcanvas, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import { BiFile, BiHome, BiMailSend, BiMenu, BiServer, BiUser } from 'react-icons/bi';

interface NavItem {
    id: string;
    icon: any;
    label: string;
    path: string;
}

const navItems: NavItem[] = [
    { id: 'home', icon: <BiHome />, label: 'Home', path: '/home' },
    { id: 'profile', icon: <BiUser />, label: 'About', path: '/about' },
    { id: 'resume', icon: <BiFile />, label: 'Resume', path: '/resume' },
    { id: 'services', icon: <BiServer />, label: 'Services', path: '/services' },
    { id: 'contact', icon: <BiMailSend />, label: 'Contact', path: '/contact' }
];

const Sidebar: React.FC = () => {
    const [active, setActive] = useState<string>('home');
    const [show, setShow] = useState(false);
    const location = useLocation();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleScroll = () => {
        const sections = navItems.map(item => document.getElementById(item.id));
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
            if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                setActive(section.id);
                break;
            }
        }
    };

    useEffect(() => {
        const currentPath = location.pathname.substring(1);
        const activeItem = navItems.find(item => item.path.substring(1) === currentPath);
        if (activeItem) {
            setActive(activeItem.id);
        }
    }, [location.pathname]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Button className="d-lg-none menu-button" onClick={handleShow}>
                <BiMenu />
            </Button>

            <Nav className="flex-column sidebar d-lg-flex navmenu" defaultActiveKey="home">
                {navItems.map(item => (
                    <Nav.Link
                        key={item.id}
                        as={Link}
                        to={item.path}
                        className={`nav-link ${active === item.id ? 'active' : ''}`}
                        onClick={() => setActive(item.id)}
                        href={item.id}
                    >
                        <div>{item.icon}</div>
                        <span>{item.label}</span>
                    </Nav.Link>
                ))}
            </Nav>

            <Offcanvas show={show} onHide={handleClose} className="d-lg-none">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        {navItems.map(item => (
                            <Nav.Link
                                key={item.id}
                                as={Link}
                                to={item.path}
                                className={`nav-item ${active === item.id ? 'active' : ''}`}
                                onClick={() => {
                                    setActive(item.id);
                                    handleClose();
                                }}
                            >
                                <div>{item.icon}</div>
                                <span>{item.label}</span>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;
