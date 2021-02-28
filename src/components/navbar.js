import { FormControl, Nav, Navbar, Form, Button } from "react-bootstrap";

function DefaultNavigation(props) {
        return <>
            <Navbar bg="dark">
                <Navbar.Brand>Hourkeeper</Navbar.Brand>
                <Navbar.Toggle aria-controls="default-navbar" />
                <Navbar.Collapse id="default-navbar">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">{props.home}</Nav.Link>
                        <Nav.Link href="#login">{props.about}</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" isRequired placeholder="Username"
                            className="mr-sm-2" />
                        <Button variant="outline-success">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            </>
}

export default DefaultNavigation;