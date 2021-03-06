import { Route, Switch } from 'react-router-dom'
import NavigationBar from './components/navbar'
import Home from './components/home'
import About from './components/about'

function App() {
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
        </Switch>
      </div>
    </div>
  );
}

export default App;
