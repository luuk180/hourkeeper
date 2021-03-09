import { Route, Switch } from 'react-router-dom'
import NavigationBar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Login from './components/login'
import Logout from './components/logout'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import signup from './components/signup'

function App() {
  Amplify.configure(awsconfig);
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Navigation">
        <NavigationBar loggedIn="false" />
      </div>
      <div className="Content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={signup} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
