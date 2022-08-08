import React, { useState, useEffect, useContext } from "react";
import useFetch from "./hook/useFetch";
import MovieCard from "./MovieCard";
import { MyContext } from '../Context.jsx';
/*
  title,
  poster_path,
  overview,
  backdrop_path,
  release_date
}*/

const Movies = () => {

  const { searchValue } = useContext(MyContext);
  console.log(searchValue);
  let [mov, setMov] = useState([]);

  const api = [`https://api.themoviedb.org/3/movie/popular?&api_key=22e6031b10bd74f693a72ef7ef3cc9ee&language=en-US&page=1`,
    `https://api.themoviedb.org/3/search/movie?api_key=22e6031b10bd74f693a72ef7ef3cc9ee&query=${searchValue}`];

  useEffect(() => {
    const apiCall = (api) => {

      fetch(api)
        .then(res => res.json())
        .then(data => {
          console.log(data.results);
          setMov(data.results);

        });

    }
    searchValue === '' ? apiCall(api[0]) : apiCall(api[1]);

  }, [searchValue]);


  console.log(mov);

  return (
    <>
      {mov ?
        <div className="flex flex-wrap justify-center">
          {mov.map(mo => (
            <MovieCard key={mo.id} {...mo} />
          ))}
        </div>
        : <p>"Please wait"</p>
      }
    </>
  );
};
export default Movies;

//api/discover/movie?sort_by=popularity.desc&api_key=22e6031b10bd74f693a72ef7ef3cc9ee
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc550?api_key=22e6031b10bd74f693a72ef7ef3cc9ee
//