import React, { useEffect, useState } from 'react';
import SubmissionCard from '../components/SubmissionCard';
import { getAllCars } from '../utils/api';
import { useAuth } from '../context/AuthContext';

const ViewSubmissionsPage = () => {
  const [cars, setCars] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchCars = async () => {
      const response = await getAllCars(token);
      setCars(response.data);
    };

    fetchCars();
  }, [token]);

  return (
    <div>
      {cars.map((car) => (
        <SubmissionCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default ViewSubmissionsPage;
