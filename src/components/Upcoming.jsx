import React, { useState, useEffect  } from "react";
import Movie from "./Movies.jsx";

const Upcoming=()=>{
  return(
       <Movie type={"upcoming"} sign={"upcoming"}/>
  );
}

export default Upcoming;