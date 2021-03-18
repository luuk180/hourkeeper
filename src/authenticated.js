import { Route, Switch } from "react-router";
import React from "react";
import dashboard from "./components/authenticated/dashboard.js";
import { withAuthenticator } from "@aws-amplify/ui-react"
import total from "./components/authenticated/total.js";

const Authenticated = () => (
    <div>
        <Switch>
            <Route exact to="/loggedin" component={dashboard} />
            <Route to="/loggedin/total" component={total} />
        </Switch>
    </div>
);

export default withAuthenticator(Authenticated);