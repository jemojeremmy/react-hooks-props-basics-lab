import React from 'react';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';

const App = () => {
  const user = {
    name: 'Your Name',
    image: 'your-image-url',
    bio: 'Your Bio',
    github: 'your-github-url',
    linkedin: 'your-linkedin-url',
  };

  return (
    <div className="App">
      <NavBar />
      <Home name={user.name} image={user.image} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
};

export default App;
