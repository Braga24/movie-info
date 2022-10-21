import React, { useState } from 'react';
import Header from "./components/Header";
import Movies from "./components/Movies";
import Upcoming from "./components/Upcoming";
import TopRated from "./components/Top-rated";
import MovieDetail from "./components/MovieDetail";
import { Routes, Route } from "react-router-dom";
import { Provide } from './Context';
function App() {
  const [type, setType] = useState("popular");
  return (
    <Provide>
      <Header />
      
      <Routes>
        <Route path='/' element={<Movies type={type} />} />
        <Route path='upcoming' element={<Upcoming />} />
        <Route path='upcoming/:id' element={<MovieDetail />} />
        <Route path='top_rated' element={<TopRated />} />
        <Route path='top_rated/:id' element={<MovieDetail />} />
        <Route path=':id' element={<MovieDetail />} />
      </Routes>
    </Provide>
  );
}

export default App;
