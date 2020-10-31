import React, { useState, useEffect } from 'react';

function SearchInput({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  }

  const handleChange = (e) => {
    setInput(e.target.value);
    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Github 프로필을 검색해보세요."
        value={input}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchInput;