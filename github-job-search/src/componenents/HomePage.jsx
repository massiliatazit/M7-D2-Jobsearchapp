import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import Search from "./Search";
const HomePage = () => {
  const state = useSelector((state) => state);
  return (
    <div>
      <Header />
      {JSON.stringify(state)}
      <Search />
    </div>
  );
};

export default HomePage;
