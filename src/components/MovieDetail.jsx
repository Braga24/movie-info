import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./hook/useFetch";
import { useFetchArray1, useFetchArray2 } from "./hook/useFetchArray";
import MovieCard from "./MovieCard";
import show from '../../image/show.png';
import vote from '../../image/ballot-box.png';
import clock from '../../image/clock.png';
import calendar from '../../image/calendar.png';
import { useNavigate } from 'react-router-dom';

const MovieDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const data = useFetch(
    `${params.id}?api_key=22e6031b10bd74f693a72ef7ef3cc9ee&language=en-US`
  );
  console.log(data);

  const [credit, crew] = useFetchArray1(
    `${params.id}/credits?api_key=22e6031b10bd74f693a72ef7ef3cc9ee&language=en-US`
  );
  console.log(crew);

  const video = useFetchArray2(
    `${params.id}/videos?api_key=22e6031b10bd74f693a72ef7ef3cc9ee&append_to_response=videos`
  );
  console.log(video);

  const similar = useFetchArray2(
    `${params.id}/similar?api_key=22e6031b10bd74f693a72ef7ef3cc9ee&language=en-US&page=1`
  );
  console.log(similar);
  const name = [];

  return (
    <>
      {
        Object.keys(data).length !== 0 ?
          // data ?
          <>

            {/* Backdrop & Overview */}
            <div className="flex flex-col mt-2 max-w-6xl mx-auto lg:mt-8  lg:flex-row">

              <img
                className="w-full lg:w-1/2 h-96 rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              />
              {/*mx-auto lg:m-0 w-5/6  lg:w-1/3*/}
              <div className="flex p-5 lg:p-0 flex-col mt-2">
                <h3 className="text-xl lg:text-3xl text-amber-600 text-center">{data.title}</h3>
                <p className="text-zinc-100 text-lg text-justify mt-4 lg:ml-10 lg:mt-5">{data.overview}</p>

                <a className="w-24 flex justify-center mt-5 lg:ml-10 lg:mt-3 rounded-lg text-center  h-10 bg-amber-600 hover:bg-amber-900 text-white" href={`${data.homepage}`}>
                  <span className="p-1.5 text-lg">View</span>
                  <img className="w-6 h-auto" src={show} />
                </a>
              </div>
            </div>
            {/* Vote , Time */}
            <div className="flex flex-wrap max-w-6xl mx-auto  mt-5 px-5 lg:p-0 justify-around sm:justify-between">
              {/* Vote */}
              <div className="flex ">
                <div className="border-2 p-1 border-amber-600 text-white rounded-full my-auto">{data.vote_average && data.vote_average.toFixed(1)}</div>
                <img className="w-10 h-auto" src={vote} />
              </div>
              {/* Runtime */}
              <div className="flex">
                <div className="text-white mt-1.5">
                  {`${parseInt(data.runtime / 60)} Hour ${data.runtime % 60} Min`}
                </div>
                <img className="w-10 h-auto ml-1" src={clock} />
              </div>
              {/* Date */}
              <div className="flex mt-2 sm:mt-0">
                <div className="text-white mt-1.5">    {data.release_date}</div>
                <img className="w-10 h-auto" src={calendar} />
              </div>
            </div>
            <br />
            {/* Director  */}
            <div className="flex flex-wrap justify-between max-w-6xl px-5 lg:p-0  mx-auto text-white ">
              {crew.map(i => {
                if (
                  i.job === "Director" ||
                  i.job === "Producer" ||
                  i.job === "Writer"
                )
                  name.push({ job: i.job, name: i.name });
              })}

              {name.map((i, index) => {
                return (
                  <div key={index} className="m-2 sm:m-0">
                    <h3 className="text-xl text-amber-600">{i.job}</h3>
                    <span>{i.name}</span>
                  </div>
                );
              })}
            </div>
            {/* Cast */}
            <div className="max-w-6xl mx-auto mt-5 px-5 lg:p-0">
              <h3 className="text-amber-600  text-xl">Cast</h3>
              <div className="flex scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-x-auto text-white h-72 mt-2 text-md">
                {credit.map(i => {
                  return (
                    <div key={i.id} className="px-5">
                      <img
                        className="h-28"
                        src={`https://image.tmdb.org/t/p/original/${i.profile_path}`}
                      />
                      <strong>{i.character}</strong>
                      <p>{i.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mx-auto text-lg text-white max-w-6xl px-5 lg:p-0">
              <h3 className="text-amber-600 mt-3 text-xl">Status</h3>
              <span >{data.status}</span>
              <h3 className="text-amber-600 text-xl mt-4">Budget</h3>
              <span>${data.budget}</span>
              <h3 className="text-amber-600 text-xl mt-4">Revenue</h3>
              <span>${data.revenue}</span>
            </div>
            <br />
            <div className="max-w-6xl mx-auto mt-3 px-5 lg:p-0">
              <h3 className="text-amber-600 text-xl">Trailer</h3>
              <div className="flex scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300  w-30 mt-5 overflow-x-auto h-56">
                {video.map(i => (
                  <div key={i.id}>
                    <iframe
                      width="300"
                      height="180"
                      src={`https://www.youtube.com/embed/${i.key}`}
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>

            {/* 
      <br />
      
     
      w138_and_h175_face
      
     */}
       {/* Similar Movies */}
      <div className="max-w-6xl mx-auto mt-4 px-5 lg:p-0">

        <h2 className="text-amber-600 text-xl">Similar Movies</h2>

        <div className="overflow-x-auto grid grid-rows-1 grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mt-2 h-auto mx-auto">
          {similar.map(mo =>
          (
            <div key={mo.id} onClick={() => navigate(`/${mo.id}`)} className="p-1 md:p-3">
              <div className="px-2 md:px-5 rounded-xl">
                <img
                  className="w-24 h-auto rounded-xl"
                  src={"https://image.tmdb.org/t/p/w500" + mo.poster_path}
                />
              </div>
            </div>
          )
          )}
        </div>
      </div>
          </>
          :
          <div className="text-xl text-white ml-40">Loading...</div>

      }
     
    </>
  );
};

export default MovieDetail;
{/*      
/*

const useFetchObject = url => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/` + url)
      .then(res => res.json())
      .then(da => setData(da));
  }, [url]);
  return data;
};

const useFetch = url => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${url}`)
      .then(res => res.json())
      .then(data => setData(data.results));
  }, [url]);
  return data;
};

export { useFetchArray, useFetchObject, useFetch };
*/}