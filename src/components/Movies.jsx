import React, { useState, useEffect, useContext } from "react";
import useFetch from "./hook/useFetch";
import Pagination from "./pagination";
import MovieCard from "./MovieCard";
import { MyContext } from '../Context.jsx';
/*
  title,
  poster_path,
  overview,
  backdrop_path,
  release_date
}*/

const Movies = ({ type, sign }) => {

  const { searchValue, search } = useContext(MyContext);

  let [pageNum, setPageNum] = useState(1);
  let [mov, setMov] = useState([]);

  const pageChange = (value) => {

    if (value === "<<") {
      setPageNum((prev) => prev - 1);
    } else if (value === ">>") {
      setPageNum((prev) => prev + 1);
    }
    else {
      setPageNum(Number(value));
    }
  }

  const api = [`https://api.themoviedb.org/3/movie/${type}?&api_key=22e6031b10bd74f693a72ef7ef3cc9ee&language=en-US&page=${pageNum}`,
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

  }, [searchValue, pageNum]);


  return (

    <div className="max-w-3xl mx-auto">

      {mov.length !== 0 ?
        <>
          <div className="flex flex-wrap justify-center">
            {mov.map(mo => (
              <MovieCard key={mo.id} {...mo} sign={sign} />
            ))}
          </div>
          <Pagination pageChange={pageChange} />
        </>
        : <p className="text-xl text-amber-600">Please wait!</p>
      }

    </div>
  );
};
export default Movies;

//api/discover/movie?sort_by=popularity.desc&api_key=22e6031b10bd74f693a72ef7ef3cc9ee
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc550?api_key=22e6031b10bd74f693a72ef7ef3cc9ee
//