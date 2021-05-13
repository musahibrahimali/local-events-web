import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Help, HostEvent, Resources, Pricing, CreateEvent, WhySmartEvents, SignUp, SignIn } from '../Components/index';

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/why-smart-events' exact component={WhySmartEvents} />
            <Route path='/host-event' exact component={HostEvent} />
            <Route path='/help' exact component={Help} />
            <Route path='/create-event' exact component={CreateEvent} />
            <Route path='/pricing' exact component={Pricing} />
            <Route path='/resources' exact component={Resources} />
            <Route path='/sign-in' exact component={SignIn} />
            <Route path='/sign-up' exact component={SignUp} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
