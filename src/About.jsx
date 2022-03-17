import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header/Header';

const About = () => {
  return (
    <div style={{ padding: '20px 40px' }}>
      <Header />
      About company
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default About;
