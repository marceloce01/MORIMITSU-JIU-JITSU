import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises"

cloudinary.config({ 
        cloud_name: 'dyrp0wzpw', 
        api_key: '996752132396862', 
        api_secret: 'xMTlIowSCkIn_itGtsAWWo5a_GA' 
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
