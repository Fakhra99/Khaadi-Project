import  express  from "express";
import { createWinterCollection, getWinterCollection } from "../controllers/winterCollection.controller.js";
import multer from 'multer';
import path from 'path';

const router= express.Router();

// specifies how files should be stored on the disk.
const storage=multer.diskStorage({
    //cb (callback) function provided by multer: control the file storage process,the destination directory and the filename.
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
// Protected route (requires admin role)
router.post('/winter-collection',  upload.single('image'), createWinterCollection);
router.get("/getwinter-collection", getWinterCollection)

export default router;