import React from 'react';
import {Profile} from "./components/Profile";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import './index.css'

const App = () => {
  return (
    <div>
        <Header/>
        <Profile/>
        <Footer/>
    </div>
  );
}

export default App;
