import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { Nav,Navbar,Container } from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Coffee pide</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/favorite'>favorite list</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
