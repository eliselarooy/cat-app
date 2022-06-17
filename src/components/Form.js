import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

const Form = ({ data, selected, setSelected }) => {
  const handleChange = (e) => {
    let selectedBreed = data.find((item) => item.id === e.target.value);
    setSelected(selectedBreed);
  };

  return (
    <>
      {!data ? (
        <Typography sx={{ m: 1 }}>Loading data...</Typography>
      ) : (
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="select-breed">Breed</InputLabel>
          <Select
            labelId="select-breed"
            id="breed"
            value={selected?.id || ''}
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
    </>
  );
};

export default Form;
