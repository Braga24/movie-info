import { useState, useEffect } from "react";

const useFetchArray1 = url => {
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
  return  [datas, crew];
};

const useFetchArray2 = url => {
   const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${url}`)
      .then(res => res.json())
      .then(dat => setData(dat.results));
  }, [url]);
  return data;
};

export {useFetchArray1 , useFetchArray2} ;