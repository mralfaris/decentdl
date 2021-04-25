import {RegisterationForm} from './component/RegisterationForm';
import {VerificationForm} from './component/VerificationForm';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/issue" component={RegisterationForm}/>
          <Route path="/verify" component={VerificationForm}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
