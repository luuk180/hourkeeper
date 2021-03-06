import { Nav, Navbar, Form, Button } from "react-bootstrap";

function DefaultNavigation(props) {
    if(props.loggedIn === false) {
        return <>
            <Navbar bg="light">
                <Navbar.Brand>Hourkeeper</Navbar.Brand>
                <Navbar.Toggle aria-controls="default-navbar" />
                <Navbar.Collapse id="default-navbar">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-success">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            </>}
    else {
        return <>
            <Navbar bg="light">
                <Navbar.Brand>Hourkeeper</Navbar.Brand>
                <Navbar.Toggle aria-controls="default-navbar" />
                <Navbar.Collapse id="default-navbar">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    }
}

export default DefaultNavigation;