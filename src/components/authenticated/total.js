import { withAuthenticator } from "@aws-amplify/ui-react"
import NavigationBar from "../navbar"

const total = () => (
    <div>
        <NavigationBar loggedin="true" />
    </div>
)

export default withAuthenticator(total);