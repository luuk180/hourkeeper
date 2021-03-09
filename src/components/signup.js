import { Auth } from "aws-amplify"
import React from "react";
import { Form, Button } from "react-bootstrap"

async function signUp(e) {
    try {
        const { user } = await Auth.signUp(
            e.target.InputEmail,
            e.target.inputPassword,
        );
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

const signup = () => (
    <div class="row">
        <Form class="inputForm">
            <div class="form-group" flex-direction="column" align="center">
                <input type="email" class="form-control" id="InputEmail" placeholder="Email address"></input>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="InputPassword" placeholder="Password"></input>
            </div>
            <Button type="submit" class="btn btn-primary" onClick={signUp()}>Sign up</Button>
        </Form>
    </div>
)

export default signup;