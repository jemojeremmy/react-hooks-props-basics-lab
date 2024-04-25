import React from 'react';

const Home = ({ name, city, color }) => {
  return (
    <div>
      <h1 style={{ color: color }}>{`${name} is a Web Developer from ${city}`}</h1>
    </div>
  );
};

export default Home;
