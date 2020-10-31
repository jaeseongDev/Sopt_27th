import React, { useState, useEffect } from 'react';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import { getUserAPI } from "./lib/api";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async (username) => {
    const data = await getUserAPI(username);
    setUser(data);
  };

  // useEffect(() => {
  //   getUser("pa-rang");
  // }, []);

  return (
    <>
      <SearchInput onSubmit={getUser}/>
      <SearchResult user={user}/>
    </>
  );
}
export default App;