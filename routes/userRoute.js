import express from "express";
import { signup,login,getUserDataForDashboard} from "../controller/userController.js";
import {contact} from "../controller/contactus.js"
import {jwtoken} from "../middleware/jwtMiddleware.js"
import {imageupload,deletePhoto,updateCaption} from "../controller/photoupload.js"
import { upload } from "../middleware/upload.js";
import { getproductDashboard } from "../controller/productDashboard.js";


const router=express.Router();

router.post("/sign-up",signup);
router.post("/login",login);
router.post("/contactus",contact);
router.get("/dashboard",getUserDataForDashboard)
router.post("/photoupload",upload, imageupload);
router.delete("/photos/:photoId",deletePhoto);
router.put('/photos/:photoId/caption',updateCaption);

export default router;