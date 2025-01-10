import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Dropzone from "react-dropzone";
import * as Yup from "yup";
import axios from "../utils/api";

const CarSubmissionPage = () => {
  const [images, setImages] = useState([]);

  const formik = useFormik({
    initialValues: { carModel: "", price: "", phoneNumber: "", maxPictures: 1 },
    validationSchema: Yup.object({
      carModel: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      price: Yup.number().required("Required"),
      phoneNumber: Yup.string()
        .matches(/^\d{11}$/, "Must be exactly 11 digits")
        .required("Required"),
      maxPictures: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Cannot exceed 10")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        images.forEach((image) => formData.append("images", image));
        formData.append("data", JSON.stringify(values));
        const response = await axios.post("/api/submit-car", formData);
        if (response.data.success) {
          alert("Car submission successful!");
          window.location.href = "/view-submissions";
        }
      } catch (error) {
        alert("Submission failed!");
      }
    },
  });

  return (
    <Box padding={4}>
      <Typography variant="h5" marginBottom={2}>
        Submit Car Details
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Car Model"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("carModel")}
          error={formik.touched.carModel && !!formik.errors.carModel}
          helperText={formik.touched.carModel && formik.errors.carModel}
        />
        <TextField
          fullWidth
          label="Price"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("price")}
          error={formik.touched.price && !!formik.errors.price}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("phoneNumber")}
          error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <TextField
          fullWidth
          label="Max Number of Pictures"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("maxPictures")}
          error={formik.touched.maxPictures && !!formik.errors.maxPictures}
          helperText={formik.touched.maxPictures && formik.errors.maxPictures}
        />
        <Dropzone
          onDrop={(acceptedFiles) => {
            setImages(acceptedFiles.slice(0, formik.values.maxPictures));
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <Box
              {...getRootProps()}
              border="1px dashed gray"
              padding={2}
              textAlign="center"
              marginTop={2}
            >
              <input {...getInputProps()} />
              <Typography>Drag and drop images here, or click to upload</Typography>
            </Box>
          )}
        </Dropzone>
        <Box marginTop={2}>
          {images.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`preview-${index}`}
              width={100}
              style={{ marginRight: 8 }}
            />
          ))}
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CarSubmissionPage;
