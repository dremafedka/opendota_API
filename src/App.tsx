import React from 'react';
import {Profile} from "./components/Profile";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";

const App = () => {
  return (
    <div className={'bg rgb(29,30,32)'}>
        <Header/>
        <Profile/>
        <Footer/>
    </div>
  );
}

export default App;
