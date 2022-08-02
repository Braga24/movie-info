import * as React from 'react';
import clapper from './clapperboard.png';
// import img from './favicon.svg';

function Header() {
  return (
    <div >
       <div className="flex justify-between p-5 mt-2">
         <div className="flex">
            <img src={clapper} className="w-10 h-auto " />
            <div className="ml-2 text-white text-3xl">
                MovieInfo
            </div>
          </div>
        <button className="bg-purple-400 hover:-translate-y-1     duration-700 text-white rounded-full w-15 h-15 p-2">
            Get Started
        </button>
      </div>
    
    </div>
  );
}

export default Header;