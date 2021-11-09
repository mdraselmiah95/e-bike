import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BikeDetails from "./pages/BikeDetails/BikeDetails";
import Home from "./pages/Home/Home/Home";
import MoreBike from "./pages/MoreBike/MoreBike";
import MoreBikes from "./pages/MoreBikes/MoreBikes";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/moreBikes">
          <MoreBikes />
        </Route>
        <Route exact path="/moreBike">
          <MoreBike />
        </Route>
        <Route path="/bikeDetails/:id">
          <BikeDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
