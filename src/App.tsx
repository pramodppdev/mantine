
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthenticationForm from './components/login';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={AuthenticationForm} />

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
