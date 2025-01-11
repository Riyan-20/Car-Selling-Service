import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { submitCar } from '../utils/api';

const CarSubmissionForm = () => {
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [maxPictures, setMaxPictures] = useState('');
  const [pictures, setPictures] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitCar({ model, price, phoneNumber, maxPictures, pictures }, token);
      navigate('/view-submissions');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Car Submission
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Car Model"
          fullWidth
          margin="normal"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <TextField
          label="Price"
          type="number"
          fullWidth
          margin="normal"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          label="Max Pictures"
          type="number"
          fullWidth
          margin="normal"
          value={maxPictures}
          onChange={(e) => setMaxPictures(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CarSubmissionForm;
