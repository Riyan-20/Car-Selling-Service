import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const SubmissionCard = ({ car }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{car.model}</Typography>
        <Typography variant="body2" color="textSecondary">
          Price: ${car.price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Phone: {car.phoneNumber}
        </Typography>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubmissionCard;
