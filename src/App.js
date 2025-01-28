import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [version, setVersion] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/version')
      .then((response) => response.json())
      .then((data) => setVersion(data.version))
      .catch((error) => console.error('Error fetching version:', error));
  }, []);

  return (
    <div className="App">
      <h1>Backend Version: {version}</h1>
    </div>
  );
}

export default App;
