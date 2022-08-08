import React from "react";
// import {Link} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';

let MovieCard = ({
  title,
  id,
  poster_path,
  overview,
  backdrop_path,
  release_date
}) => {
  // const navigate = useNavigate();
  return (
    
    <div >
      <div className="mx-5 my-10 rounded-xl">
        <img
          className="w-24 md:w-36 h-auto  rounded-xl"
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
        />
      </div>
    </div>
      
  );
};
export default MovieCard;
 // <Link to={`/display/:${title}`}>
 //      <div className="imgCard">
 //        <img
 //          className="imgStyle"
 //          src={"https://image.tmdb.org/t/p/w500" + poster_path}
 //        />
 //      </div>
 //        </Link>
//onClick={()=>navigate(`/detail/${id}`)}