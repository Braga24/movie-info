import React, { createContext ,useState } from 'react';

export const MyContext = createContext();
export const Provide = ({ children }) => {
  const [searchValue ,setSearchValue] = useState('');
  function search(va){
    console.log(va);
    setSearchValue(va);
  }
  
  return (
    <MyContext.Provider value={{ searchValue, search }}>
      {children}
    </MyContext.Provider>
  );
}