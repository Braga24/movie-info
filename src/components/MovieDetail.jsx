import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchArray, useFetchObject, useFetch } from "./Usehook";
import DisplayList from "./DisplayList";

const DisplayDetail = () => {
  const params = useParams();

  const data = useFetchObject(
    `${params.id}?api_key=22e6031b10bd74f693a72ef7ef3cc9ee&language=en-US`
  );

  const video = useFetch(
    `${params.id}/videos?api_key=22e6031b10bd74f693a72ef7ef3cc9ee&append_to_response=videos`
  );
  const [credit, crew] = useFetchArray(
    `${params.id}/credits?api_key=22e6031b10bd74f693a72ef7ef3cc9ee&language=en-US`
  );

  const name = [];
  const job = [];
  const dirStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  };

  return (
    <>
      {/*Title and Image*/}
      <h3 style={{ textAlign: "center" }}>{data.title}</h3>
      <img
        className="bgStyle"
        src={"https://image.tmdb.org/t/p/w500" + data.backdrop_path}
      />
      {/* Vote */}
      <div className="voteStyle">
        <div className="vote">{data.vote_average}</div>
        <div style={{ marginTop: "6px" }}>
          {`${parseInt(data.runtime / 60)} Hour ${data.runtime % 60} Min`}
        </div>
        <strong style={{ marginTop: "6px" }}>{data.release_date}</strong>
      </div>
      <br />
      {data.tagline}
      {/*overview*/}
      <h3>Overview</h3>
      <p>{data.overview}</p>
      {/*producer director*/}
      <div style={dirStyle}>
        {crew.map(i => {
          if (
            i.job === "Director" ||
            i.job === "Producer" ||
            i.job === "Writer"
          )
            name.push({ job: i.job, name: i.name });
        })}

        {name.map(i => {
          return (
            <div style={{ margin: "5px 10px" }}>
              <h3>{i.job}</h3>
              <span>{i.name}</span>
            </div>
          );
        })}
      </div>
      {/*Cast*/}
      <h3>Cast</h3>
      <div className="castStyle">
        {credit.map(i => {
          return (
            <div style={{ margin: "0px 7px" }} key={i.id}>
              <img
                className="imgStyle"
                src={`https://image.tmdb.org/t/p/w138_and_h175_face/${i.profile_path}`}
              />
              <strong>{i.character}</strong>
              <p>{i.name}</p>
            </div>
          );
        })}
      </div>
      {/*status budget*/}
      <h3>Status</h3>
      <span>{data.status}.</span>
      <h3>Budget</h3>
      <span>${data.budget}</span>
      <h3>Revenue</h3>
      <span>${data.revenue}</span>
      <br />
      {/*Trailer*/}
      <h3>Trailer</h3>
      <div className="castStyle">
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
      <br />
      {/*similar*/}
    </>
  );
};

export default DisplayDetail;
/*import { useState, useEffect } from "react";

const useFetchArray = url => {
  const [datas, setDatas] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/` + url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDatas(data.cast);
        setCrew(data.crew);
      });
  }, [url]);

  return [datas, crew];
};

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
import React, { useState, useEffect } from "react";
import Header from "/src/Header.jsx/";
import Display from "/src/Display.jsx/";
import DisplayDetail from "./DisplayDetail";
import HeaderSearch from "./HeaderSearch";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [search, setSearch] = useState([]);

  const handleSearch = mo => {
    setSearch(mo);
  };

  return (
    <BrowserRouter>
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/detail/:id" element={<DisplayDetail />} />
        <Route path="/search" element={<HeaderSearch data={search} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/