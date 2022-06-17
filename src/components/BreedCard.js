import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

const BreedCard = ({ data }) => {
  const { name, description, image, temperament } = data;

  console.log(name);

  return (
    <Card className="centered" sx={{ m: 1, maxWidth: 600 }}>
      <CardHeader title={name} subheader={temperament} />
      <CardMedia component="img" image={image.url} alt={name} />
      <CardContent>
        {}
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BreedCard;
