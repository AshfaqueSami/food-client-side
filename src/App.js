import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import AuthProvider from "./Contexts/AuthProvider";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import OrderPlace from "./Components/Home/OrderPlace/OrderPlace";
import Login from "./Components/Login/Login";
import Bookings from "./Components/Bookings/Bookings";
import AllBookings from "./Components/AllBookings/AllBookings";
import AddBooking from "./Components/AddBooking/AddBooking";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/orderPlace/:id">
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <PrivateRoute path="/bookings">
              <Bookings></Bookings>
            </PrivateRoute>
            <PrivateRoute path="/allbookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <PrivateRoute path="/addbooking">
              <AddBooking></AddBooking>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
