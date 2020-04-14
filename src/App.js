import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/rooms/:roomId" exact component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
