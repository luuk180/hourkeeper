import { Auth } from "aws-amplify"
import React from "react";
import { Form, Button, Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";
import './login.scss';
import NavigationBar from "./navbar";

let inputEmailValue;
let inputPasswordValue;

function handleEmailChange(e) {
    inputEmailValue = e.target.value;
}
function handlePassChange(e) {
    inputPasswordValue = e.target.value;
}

const signup = props => {
    async function signUp(e) {
        e.preventDefault();
        try {
            const { user } = await Auth.signUp(
                inputEmailValue,
                inputPasswordValue,
            );
            console.log(user);
            props.history.push("/confirm");
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
            <NavigationBar loggedin="false" />
            <div>
                <div className="row">
                    <Form className="inputForm border border-primary">
                        <div className="form-group" flex-direction="column" align="center">
                            <input type="email" className="form-control" name="InputEmail" id="InputEmail" onChange={handleEmailChange} placeholder="Email address"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="InputPassword" id="InputPassword" onChange={handlePassChange} placeholder="Password"></input>
                        </div>
                        <Button type="submit" className="btn btn-primary" onClick={signUp}>Sign up</Button>
                        <LinkContainer to="/confirm">
                            <Button type="submit" className="btn btn-secondary">Confirm page</Button>
                        </LinkContainer>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default signup;