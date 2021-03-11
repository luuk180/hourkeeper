import { Auth } from 'aws-amplify';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './login.scss';

let inputEmailValue;
let inputPasswordValue;

function handleEmailChange(e) {
    inputEmailValue = e.target.value;
}
function handlePassChange(e) {
    inputPasswordValue = e.target.value;
}

async function signIn(e) {
    e.preventDefault();
    try {
        const user = await Auth.signIn(inputEmailValue, inputPasswordValue);
        console.log(user)
    } catch (error) {
        console.log(error);
    }
}

const Login = () => (
    <div className="row">
        <Form className="inputForm border border-primary">
            <div className="form-group" flex-direction="column" align="center">
                <input type="email" className="form-control" id="InputEmail" onChange={handleEmailChange} placeholder="Email address"></input>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="InputPassword" onChange={handlePassChange} placeholder="Password"></input>
            </div>
            <Button type="submit" className="btn btn-primary" align="left" onClick={signIn}>Login</Button>
            <LinkContainer to="/signup">
                <Button className="btn btn-secondary" align="right">Sign up!</Button>
            </LinkContainer>
        </Form>
    </div>
)

export default Login;