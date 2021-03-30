import Navbar from './NavBar/Navbar';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create/Create';
import BlogDetails from './BlogDetails/BlogDetails';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <Router>
       <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path = "/">
                <Home />
              </Route>
              <Route exact path = "/create">
                <Create />
              </Route>
              <Route exact path = "/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
