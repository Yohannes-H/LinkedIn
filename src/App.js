import React from "react";
import Header from "./Header";
//import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        {/* SideBar */}
        <Sidebar />
      </div>

      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
