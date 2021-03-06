import React from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar(props) {
    if(props.loggedIn === "false") {
        return <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Hourkeeper</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form inline>
                        <LinkContainer to="/login">
                            <Button variant="outline-success">Login</Button>
                        </LinkContainer>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            </>}
    else {
        return <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Hourkeeper</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form inline>
                        <LinkContainer to="/logout">
                            <Button variant="outline-danger">Logout</Button>
                        </LinkContainer>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    }
}

export default NavigationBar;