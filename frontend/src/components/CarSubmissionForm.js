import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";

const CarSubmissionForm = ({ onSubmit }) => {
  const [images, setImages] = useState([]);

  const formik = useFormik({
    initialValues: { carModel: "", price: "", phoneNumber: "", maxPictures: 1 },
    validationSchema: Yup.object({
      carModel: Yup.string().min(3).required("Required"),
      price: Yup.number().required("Required"),
      phoneNumber: Yup.string()
        .matches(/^\d{11}$/, "Must be exactly 11 digits")
        .required("Required"),
      maxPictures: Yup.number()
        .min(1)
        .max(10)
        .required("Required"),
    }),
    onSubmit: (values) => {
      onSubmit({ ...values, images });
    },
  });

  return (
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
  );
};

export default CarSubmissionForm;
