import { photoupload } from "../model/photoupload.js";

// export const imageupload = async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ message: 'No file was uploaded' });
//         }

//         const { caption } = req.body;
//         const imagePath = req.file.path;

//         const photo = new photoupload({ url: imagePath, caption });
//         await photo.save();

//         return res.json({ message: 'Photo created successfully', photoId: photo._id });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ message: 'Failed to upload photo', error: err.message });
//     }
// };

import multer from "multer";
import path from "path";
//import photoupload from './models/photoupload'; // Adjust the import based on your project structure

const upload = multer({ dest: "uploads/" }); // Configure multer

// export const imageupload = async (req, res) => {
//     try {
//         // Check if the file was uploaded
//         if (!req.file) {
//             return res.status(400).json({ message: 'No file was uploaded' });
//         }

//         // Extract the caption from the request body
//         const { caption } = req.body;
//         const imagePath = req.file.path;

//         // Save the photo information to the database
//         const photo = new photoupload({ url: imagePath, caption });
//         await photo.save();

//         return res.json({ message: 'Photo created successfully', photoId: photo._id });
//     } catch (err) {
//         // Log detailed error information
//         console.error('Error uploading photo:', err);
//         return res.status(500).json({ message: 'Failed to upload photo', error: err.message });
//     }
// };

export const imageupload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Assuming you have a Photo model with a 'url' field to store the file path
    const { caption } = req.body;
    const newPhoto = new photoupload({ url: req.file.filename, caption });
    await newPhoto.save();

    res.status(200).json({
      message: "File uploaded successfully",
      filename: req.file.filename,
      caption,
      photoId: newPhoto._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePhoto = async (req, res) => {
  try {
    const { photoId } = req.params;

    const photo = await photoupload.findById(photoId);

    if (!photo) {
      return res.status(404).json({ message: "Photo not found" });
    }
    await photo.deleteOne();

    return res.json({ message: "photo deleted sucessfullly" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Failed to delete photo", error: err.message });
  }
};

export const updateCaption = async (req, res) => {
  try {
    const { photoId } = req.params;
    const { caption } = req.body;

    let photo = await photoupload.findById(photoId);
    if (!photo) {
      return res.status(404).json({ message: "photo not found" });
    }
    photo.caption = caption;
    await photo.save();

    return res.json({
      message: "caption updated succesfully",
      updatedPhoto: photo,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Failed to update caption", error: err.message });
  }
};
