import { Auth } from "aws-amplify"
import React from "react";
import { Form, Button } from "react-bootstrap"
import './login.scss';

let inputEmailValue;
let inputPasswordValue;

function handleEmailChange(e) {
    inputEmailValue = e.target.value;
}
function handlePassChange(e) {
    inputPasswordValue = e.target.value;
}

async function signUp(e) {
    e.preventDefault();
    try {
        const { user } = await Auth.signUp(
            inputEmailValue,
            inputPasswordValue,
        );
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

const signup = () => (
    <div className="row">
        <Form className="inputForm border border-primary">
            <div className="form-group" flex-direction="column" align="center">
                <input type="email" className="form-control" name="InputEmail" id="InputEmail" onChange={handleEmailChange} placeholder="Email address"></input>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" name="InputPassword" id="InputPassword" onChange={handlePassChange} placeholder="Password"></input>
            </div>
            <Button type="submit" className="btn btn-primary" onClick={signUp}>Sign up</Button>
        </Form>
    </div>
)

export default signup;