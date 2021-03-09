import { Auth } from 'aws-amplify';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './login.scss';

async function signIn(e) {
    try {
        const user = await Auth.signIn(e.target.InputEmail, e.target.InputPassword);
        console.log(user)
    } catch (error) {
        console.log("An error occured ", error);
    }
}

const Login = () => (
    <div className="row">
        <Form className="inputForm border border-primary">
            <div className="form-group" flex-direction="column" align="center">
                <input type="email" className="form-control" id="InputEmail" placeholder="Email address"></input>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="InputPassword" placeholder="Password"></input>
            </div>
            <Button type="submit" className="btn btn-primary" onClick={signIn()}>Login</Button>
            <hr />
            <LinkContainer to="/signup">
                <a>Sign up!</a>
            </LinkContainer>
        </Form>
    </div>
)

export default Login;