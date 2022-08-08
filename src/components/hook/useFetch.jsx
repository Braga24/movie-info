import React, { useState, useEffect } from 'react';

const useFetch = (api) => {

  const [data, setData] = useState([]);

   //  useEffect(() => {
   //    async function fetchData() {
   //      let resData = await fetch(`https://api.themoviedb.org/3/movie/popular?&api_key=22e6031b10bd74f693a72ef7ef3cc9ee&language=en-US&page=2`);
   //      let res = await resData.json();
   //      console.log(res.results)
   //      setData(res.results);
   //      return data;
   //    }
   //   fetchData();
   // }
   //    , []);
   useEffect(() => {
     
      fetch(api)
     .then(res=>res.json())
     .then(data=>{
        console.log(data.results);
        setData(data.results);
          }); 
   }
      , []);
  return data;
  
}
export default useFetch;