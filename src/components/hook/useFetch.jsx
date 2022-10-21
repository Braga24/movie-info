import React, { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/` + url)
      .then(res => res.json())
      .then(da => setData(da));
  }, [url]);

  
  return data;
  
}
export default useFetch;