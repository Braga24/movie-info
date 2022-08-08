import React, { useState } from 'react';
import Header from "./components/Header";
import Movies from "./components/Movies";
import Upcoming from "./components/Upcoming";
import { Routes, Route } from "react-router-dom";
import { Provide} from './Context';
function App() {

  return (
    <Provide>
      <Header />
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='about' element={<Upcoming />} />
      </Routes>
    </Provide>
  );
}

export default App;
 // <UserContext.Provider value={set}>

    //  </UserContext.Provider>