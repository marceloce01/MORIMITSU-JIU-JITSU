import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises"

cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET 
});

export const uploadInCloud = async (filePath: string): Promise<string | null> => {
  if (!filePath){
    return null
  }

  const result = await cloudinary.uploader.upload(filePath, {folder: "students", resource_type: "image"}).catch(async() => {
    await fs.unlink(filePath).catch(() => {})
    return null
    });

    if(!result){
        return null
    }

    await fs.unlink(filePath).catch(() => {})
    return result.secure_url
};
