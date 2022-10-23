import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Package from "./Components/Package/Package";
import Details from "./Components/Details/Details";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              <Main />
            </>
          }
        />
        <Route path="/packages/:seasons" element={<Package />}></Route>
        <Route path="/trips/:id" element={<Details />}></Route> 
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
