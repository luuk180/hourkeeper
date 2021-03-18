import { Route, Switch } from 'react-router-dom'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Home from './components/home';
import About from './components/about';
import Login from './components/login';
import signup from './components/signup';
import signupconfirm from './components/signupconfirm';
import authenticated from './authenticated';

function App() {
  Amplify.configure(awsconfig);
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={signup} />
          <Route path="/confirm" component={signupconfirm} />
          <Route path="/loggedin" component={authenticated} />
        </Switch>
    </div>
  );
}

export default App;
