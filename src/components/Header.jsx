import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import clapper from '../../image/clapperboard.png';
import { MyContext } from '../Context.jsx';

function Header() {
  
let { search } = useContext(MyContext);
const navigate = useNavigate();
const [inputvalue,setInputvalue] = useState("");
  {/* Movie Search function */}
  const Submit=(e)=>{
    e.preventDefault();
    search(inputvalue);
    setInputvalue("");
  }
  {/* Page Changing function */}
  const Navigate=(path)=>{
    const link = document.querySelector("#link");
    navigate(path ? `/${path}` : `/`);
    search("");
    link.className="hidden";
  }
  {/* Menu Open */}
  const open=()=>{
    const linkwrap = document.querySelectorAll("#lin");
    const link = document.querySelector("#link");
    link.className="h-full w-1/2 sm:w-1/3 z-20 top-0 fixed right-0 bg-white overflow-x-hidden flex flex-col space-y-5 duration-75";
     linkwrap.forEach((i)=>{
       i.className="pl-5 text-xl block hover:text-amber-600";
      })
  }
  {/* Menu Close */}
  const close=(e)=>{
    const link = document.querySelector("#link");
    const linkwrap = document.querySelectorAll("#lin");
    link.className="w-0 hidden";
    linkwrap.forEach((i)=>{
      i.className="hidden";
    })
  }
  
  return (
    < >
      {/* LOGO  */}
      <div className="flex px-5 md:px-0 max-w-6xl mx-auto justify-between py-5 mt-2"> 
        <div className="flex">
          <img src={clapper} className="w-9 md:w-12 my-auto h-auto md:h-12 " />
          <div className="ml-2 my-auto text-xl text-white md:text-2xl">
            MovieInfo
          </div>
        </div>
          {/* SEARCH */}
        <form className="my-auto" onSubmit={Submit}>
          <div className="relative ">
             <img src="../../image/loupe.png" className="w-5 top-2 left-2  absolute "/>
          <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} placeholder='search...' className="w-32 my-auto z-10 h-9 p-3 pl-8 rounded-full focus:outline-0" />
          </div>
          
        </form>
        {/* LINK */} 
       <div className="hidden md:flex  justify-around my-auto  text-white">
          <div onClick={()=>Navigate()} className="text-xl hover:text-amber-600">Popular</div>
          <div onClick={()=>Navigate('upcoming')}  className="text-xl ml-5 hover:text-amber-600">Upcoming</div>
          <div onClick={()=>Navigate('top_rated')}  className="text-xl ml-5 hover:text-amber-600">Top-Rated</div>
      </div>
        {/* Menu Link */}      
       <div id="link" className="hidden">
         {/* Close Button */}
          <div onClick={close} className="top-0 ml-auto pt-3">
          <img src="../../image/close.png"  className="w-7 h-auto"/>
        </div>
         
          <div onClick={()=>Navigate()} id="lin" className="">Popular</div>
          <div onClick={()=>Navigate('upcoming')} id="lin" className="">Upcoming</div>
          <div onClick={()=>Navigate('top_rated')} id="lin" className="">Top-Rated</div>
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={open}>
          <img src="../../image/hamburger.png"  className="w-9"/>
        </div>
        
      </div>

    </>
  );
}


export default Header;