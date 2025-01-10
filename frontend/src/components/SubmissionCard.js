import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const SubmissionCard = ({ submission }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={submission.images[0] || "https://via.placeholder.com/200"}
        alt={submission.carModel}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {submission.carModel}
        </Typography>
        <Box display="flex" justifyContent="space-between" marginBottom={1}>
          <Typography>Price:</Typography>
          <Typography>{submission.price} PKR</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" marginBottom={1}>
          <Typography>Phone:</Typography>
          <Typography>{submission.phoneNumber}</Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          Submitted by: {submission.userEmail}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SubmissionCard;
