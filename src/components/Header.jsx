import React, { useState, useContext} from 'react';
import clapper from './clapperboard.png';
import { MyContext } from '../Context.jsx';

function Header() {
let { searchValue, search } = useContext(MyContext);
const [inputvalue,setInputvalue] = useState("");
  const submit=(e)=>{
    
    e.preventDefault();
    search(inputvalue);
  }
  return (

    < >
      <div className="flex justify-between p-5 mt-2"> 
        <div className="flex">
          <img src={clapper} className="w-12 my-auto h-12 " />
          <div className="ml-2 my-auto text-white text-2xl">
            MovieInfo
          </div>
        </div>
        <form className="my-auto" onSubmit={submit}>
          <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} placeholder='search...' className="w-28 my-auto h-9 p-3 rounded-full focus:outline-0" />

        </form>
      </div>

    </>
  );
}


export default Header;