import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// Configure Cloudinary with credentials from .env
cloudinary.config({
    url: process.env.CLOUDINARY_URL,

});

export default cloudinary
