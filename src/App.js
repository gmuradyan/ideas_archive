import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import Users from './components/Users';
import User from './components/User';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/user" component={User} />
        {/* <Route path="/user" component={Posts} /> */}
        <Route path="/" component={Users} />
      </Switch>
    </Container>
  );
}

export default App;
