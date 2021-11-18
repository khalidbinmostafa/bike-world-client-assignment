import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Home1 from './Pages/Home/Home/Home1';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import ServiceCard from './Pages/ServiceCard/ServiceCard';
import About from './Pages/About/About';
import AuthProvider from './Pages/contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route path="/">
              <Home></Home>
              <Home1></Home1>
              <ServiceCard></ServiceCard>
              <About></About>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Home1></Home1>
              <ServiceCard></ServiceCard>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>

            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
