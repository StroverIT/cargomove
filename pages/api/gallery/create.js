import {
  parseForm,
  // FormidableError,
} from "../../../libs/parseForm";

// Mongoose
import { connectMongo } from "../../../db/connectDb";
import Gallery from "../../../db/models/Gallery";
import User from "../../../db/models/User"; 

// Token
import { getToken } from "next-auth/jwt";
const secret = process.env.NEXTAUTH_SECRET;

const handler = async (
  req,
  res
) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({
      data: null,
      error: "Method Not Allowed",
    });
    return;
  }
  // Just after the "Method Not Allowed" code
  try {
    await connectMongo();


    const token = await getToken({ req, secret });
    if (!token) {
      throw {
        error: "Невалиден токен!",
      };
    }
    const user = await User.findOne({ email: token.email });
    if (!user) {
      throw {
        error: "Невалиден акаунт",
      };
    }

    if (user.role != "admin") {
      throw {
        error: "Нямате такива права!",
      };
    }
    // const {pathFile} = req.body

    const pathFile = "gallery"

    let { fields, files } = await parseForm(req);

    let {alt} = fields

    const formattedImgData = []
    files?.media.forEach((file, i)=>{
      
      formattedImgData.push({
        imageName: file?.newFilename,
        imageUrl: `/uploads/${pathFile}/${file?.newFilename}`,
        alt: alt[i]
      })
    })

    await Gallery.insertMany(formattedImgData)
 
  
    // Articles set image

    const data = {neshto: true}
   

    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    if (e.error) {
      return res.status(400).json(e.error);
    }
    // if (e instanceof FormidableError) {
      res.status(e.httpCode || 400).json({ data: null, error: e.message });
    // }
    // else {
    //   console.error(e);
    //   res.status(500).json({
    //     data: null,
    //     error: "Сървърни проблеми, обадете се на телефон: 0876237725",
    //   });
    // }
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
