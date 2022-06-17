import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { getBreeds } from './api/catApi';
import BreedCard from './components/BreedCard';
import Form from './components/Form';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [breeds, setBreeds] = useState(null);
  const [selected, setSelected] = useState(null);

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

  return (
    <>
      <Typography variant="h1" sx={{ m: 1 }}>
        Cat App
      </Typography>
      <Form data={breeds} selected={selected} setSelected={setSelected} />
      {selected && <BreedCard data={selected} />}
    </>
  );
}

export default App;
