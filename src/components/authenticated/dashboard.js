import { withAuthenticator } from "@aws-amplify/ui-react";

const dashboard = () => (
    <div>
        <NavigationBar loggedin="true" />
    </div>
)

export default withAuthenticator(dashboard);