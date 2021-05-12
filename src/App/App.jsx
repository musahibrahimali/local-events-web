import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NavBar } from '../Components/index';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
