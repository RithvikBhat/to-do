import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
  //one route component is shown in the browser at any one time : switch use maadidre
  //artha aaytha, easy ide
  //exact path to the rescue
  //one nimit
  //2 mins
  //okays
}

export default App;
