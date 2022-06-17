import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BreedCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const { name, description, image, temperament, origin, weight, life_span } =
    data;

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ m: 1, maxWidth: 600 }}>
      <CardHeader title={name} subheader={temperament} />
      <CardMedia component="img" image={image.url} alt={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleExpand}>
          {expanded ? 'Show Less' : 'Learn More'}
        </Button>
      </CardActions>
      <Collapse in={expanded}>
        <CardContent>
          <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' }}>
            <LocationOnIcon aria-label="country of origin" />
            {origin}
          </Typography>
          <br />
          <br />
          <Typography>{life_span} years</Typography>
          <br />
          <Typography>{weight.metric} kg</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BreedCard;
