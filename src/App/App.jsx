import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, LogLanding, Help, HostEvent, Resources, Pricing, CreateEvent, WhySmartEvents,} from '../Components/index';

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
            <Route path='/sign-in' exact component={LogLanding} />
            <Route path='/sign-up' exact component={LogLanding} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
