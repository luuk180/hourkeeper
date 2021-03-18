import { Form, Button } from "react-bootstrap"
import React from "react"
import Auth from "@aws-amplify/auth";

let inputEmailValue;
let inputConfirmValue;

function handleEmailChange(e) {
    inputEmailValue = e.target.value;
}
function handleConfirmChange(e) {
    inputConfirmValue = e.target.value;
}

async function confirm(e) {
    e.preventDefault();
    try {
        await Auth.confirmSignUp(inputEmailValue, inputConfirmValue);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const signupconfirm = () => (
    <div>
        <NavigationBar loggedin="false" />
        <div className="row">
            <Form className="inputForm border border-primary">
                <div className="form-group" flex-direction="column" align="center">
                    <input type="email" className="form-control" name="InputEmail" id="InputEmail" onChange={handleEmailChange} placeholder="Email address"></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="InputConfirm" id="InputConfirm" onChange={handleConfirmChange} placeholder="Confirmation code"></input>
                </div>
                <Button type="submit" className="btn btn-primary" onClick={confirm}>Confirm</Button>
            </Form>
        </div>
    </div>
)

export default signupconfirm;