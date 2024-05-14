import express from "express";
import {
  signup,
  login,
  getUserDataForDashboard,
  forgotpassword,
} from "../controller/userController.js";
import { contact } from "../controller/contactus.js";
import { jwtoken } from "../middleware/jwtMiddleware.js";
import {
  imageupload,
  deletePhoto,
  updateCaption,
} from "../controller/photoupload.js";
import { upload } from "../middleware/upload.js";
import { getproductDashboard } from "../controller/productDashboard.js";
import { generateotp, verifyotp } from "../controller/otp.js";
import { generateQRCode } from "../controller/qr.js";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/login", login);
router.post("/contactus", contact);
router.get("/dashboard", jwtoken, getUserDataForDashboard);
router.post("/photoupload", upload, jwtoken, imageupload);
router.delete("/photos/:photoId", jwtoken, deletePhoto);
router.put("/photos/:photoId/caption", jwtoken, updateCaption);
router.get("/productdashboard", getproductDashboard);
router.post("/otp", generateotp);
router.post("/verifyotp", verifyotp);
// router.put("/forgotpassword/:userId",forgotpassword);
router.post("/forgotpassword", forgotpassword);
router.get("/qr", generateQRCode);
//http://localhost:1025/api/v1/qr?url=https://rankyatra.com

export default router;
