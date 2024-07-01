import './Navbar.scss';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { BiHome, BiUser, BiMessageSquareDetail, BiCog, BiMenu } from 'react-icons/bi';

const Header: React.FC = () => {
    return (
        <header className="header d-flex flex-column justify-content-center">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav defaultActiveKey="/home" className="flex-column navmenu">
                            <NavLink to="/home" className="nav-link">
                                <BiHome className="nav-icon" /><span>Home</span>
                            </NavLink>
                            <NavLink to="/about" className="nav-link">
                                <BiUser className="nav-icon" /><span>About</span>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
