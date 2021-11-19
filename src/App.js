import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Home1 from './Pages/Home/Home/Home1';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import ServiceCard from './Pages/ServiceCard/ServiceCard';
import ExploreDetails from './Pages/ExploreDetails/ExploreDetails';
import About from './Pages/About/About';
import AuthProvider from './Pages/contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Explore from './Pages/Explore/Explore';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Home></Home>
          <Switch>

            <Route exact path="/">
              <Home1></Home1>
              <ServiceCard></ServiceCard>
              <About></About>

            </Route>
            <Route path="/home">

              <Home1></Home1>
              <ServiceCard></ServiceCard>
              <About></About>

            </Route>
            <PrivateRoute path="/explore">
              <Explore></Explore>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/purchase/:carId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/purchase">
              <Purchase></Purchase>
            </PrivateRoute>


            <PrivateRoute path="/dashboard">
              <DashboardHome></DashboardHome>
            </PrivateRoute>
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
