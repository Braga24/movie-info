import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

/*{movieType}
  title,
  poster_path,
  overview,
  backdrop_path,
  release_date
}*/
const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [type, setType] = useState("upcoming");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?&api_key=22e6031b10bd74f693a72ef7ef3cc9ee&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.results);

        setMovie(data.results);
      });
  }, []);

  
  return (
    <>
      
      <div className="flex flex-wrap ml-10">
        {movie.map(mo => (
          <MovieCard key={mo.id} {...mo} />
        ))}
      </div>
    </>
  );
};
export default Movies;

//api/discover/movie?sort_by=popularity.desc&api_key=22e6031b10bd74f693a72ef7ef3cc9ee
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc550?api_key=22e6031b10bd74f693a72ef7ef3cc9ee
//