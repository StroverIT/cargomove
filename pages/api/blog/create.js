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
import Blog from "../../../db/models/Blog";
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
  
      const pathFile = "blog"
  
      let { fields, files } = await parseForm(req,pathFile);
  
      let {blogData, title, imageAlt, metaTitle, metaDescription} = fields
      const imageUrl = files.media[0].newFilename
      const regexPattern = / +/g;
      const route = title[0].replace(regexPattern, "-").toLowerCase()

      await Blog.create({
        title: title[0],
        route,
        meta: {
            title: metaTitle[0],
            description: metaDescription[0]
        },
        imageData: {
            url: `/uploads/blog/${imageUrl}`,
            alt: imageAlt[0]
        },
        blogData: {
            html: blogData[0]
        }
      })
  
      const data = {message: "Успешно добавихте Блога"}

      res.status(200).json(data);

    } catch (e) {
    console.log(e);        
      if(e){
        res.json({
          error: "Проблеми със нещо си"
        })
      }
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
  
 