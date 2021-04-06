import './App.css';
import SprayPrediction from './components/spray-prediction/SprayPrediction';
import About from './components/about/About';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/common/Header';
import NotFoundPage from './components/common/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/spray-prediction" component={SprayPrediction} />
        <Route path="/about" component={About} />
        <Redirect from="/" to="spray-prediction" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
