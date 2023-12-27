import  express  from "express";
import { createWinterCollection, getWinterCollection } from "../controllers/winterCollection.controller.js";
import multer from 'multer';
import path from 'path';
const router= express.Router();

const storage=multer.diskStorage({
    destination:(req, file , cb)=>{
        cb(null, "upload/")
    },
    filename:(req, file , cb)=>{
        cb(null, Date.now()+ path.extname(file.originalname))
    }
})
const upload=multer({
    storage:storage
})
router.post("/winter-collection", upload.single("image"), createWinterCollection);
router.get("/getwinter-collection", getWinterCollection)

export default router;