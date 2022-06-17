import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState, useEffect } from 'react';
import { getBreeds } from './api/api';

import Form from './components/form/Form';

function App() {
  const [breeds, setBreeds] = useState(null);

  const getData = async () => {
    try {
      const data = await getBreeds();
      setBreeds(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.table('Breeds', breeds);

  return (
    <>
      <h1>Cat App</h1>
      <Form data={breeds} />
    </>
  );
}

export default App;
