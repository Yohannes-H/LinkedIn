import React from "react";
import Header from "./Header";
//import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
      </div>

      {/* Widgets */}
    </div>
  );
}

export default App;
