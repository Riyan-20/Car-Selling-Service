import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import SubmissionCard from "../components/SubmissionCard";
import axios from "../utils/api";

const ViewSubmissionsPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get("/api/view-submissions");
        setSubmissions(response.data.submissions);
      } catch (error) {
        console.error("Error fetching submissions:", error);
        alert("Failed to load submissions.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box padding={4}>
      <Typography variant="h4" marginBottom={3}>
        Your Car Submissions
      </Typography>
      {submissions.length === 0 ? (
        <Typography>No submissions found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {submissions.map((submission) => (
            <Grid item xs={12} sm={6} md={4} key={submission._id}>
              <SubmissionCard submission={submission} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ViewSubmissionsPage;
