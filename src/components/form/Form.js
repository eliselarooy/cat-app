import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Form = ({ data }) => {
  console.log('Form data', data);

  const handleChange = () => {
    console.log('Handle change');
  };

  return (
    <>
      <h1>Form</h1>
      <div>
        {!data ? (
          <p>Loading data...</p>
        ) : (
          <FormControl fullWidth>
            <InputLabel id="select-breed">Breed</InputLabel>
            <Select
              labelId="select-breed"
              id="breed"
              value=""
              label="Breed"
              onChange={handleChange}
            >
              {data.map((breed) => {
                return (
                  <MenuItem key={breed.id} value={breed.id}>
                    {breed.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      </div>
    </>
  );
};

export default Form;
