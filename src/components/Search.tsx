import React from "react";

interface props {
    
    setSearch:  React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({setSearch}:props) => {

    
    
  return (
    <div className="d-flex absolute left-[38%] w-[25%] top-[25%]">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e)=>setSearch(e.target.value)}
      />
      
    </div>
  );
};

export default Search;
