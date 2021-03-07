import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './login.css';

const Login = () => (
    <div class="row">
        <Form class="inputForm">
            <div class="form-group" flex-direction="column" align="center">
                <input type="email" class="form-control" id="InputEmail" placeholder="Email address"></input>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="InputPassword" placeholder="Password"></input>
            </div>
            <Button type="submit" class="btn btn-primary">Login</Button>
        </Form>
    </div>
)

export default Login;