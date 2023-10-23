import {
  parseForm,
  // FormidableError,
} from "../../../libs/parseForm";

// Mongoose
import { connectMongo } from "../../../db/connectDb";
import User from "../../../db/models/User";
import { ObjectId } from "mongodb";

// Token
import { getToken } from "next-auth/jwt";
import Blog from "../../../db/models/Blog";
const secret = process.env.NEXTAUTH_SECRET;

// Fs
import fs from "fs";
import path from "path";

const handler = async (req, res) => {
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

    const pathFile = "blog";

    let { fields, files } = await parseForm(req, pathFile);
    let { blogData, title, imageAlt, metaTitle, metaDescription, blogId } =
      fields;

    const regexPattern = / +/g;
    const route = title[0].replace(regexPattern, "-").toLowerCase();

    const blog = await Blog.findOne({ _id: new ObjectId(blogId[0]) });

    await Blog.updateOne(
      { _id: new ObjectId(blogId[0]) },
      {
        $set: {
          title: title[0],
          route,
          meta: {
            title: metaTitle[0],
            description: metaDescription[0],
          },
          imageData: {
            url: blog.imageData.url,
            alt: imageAlt[0],
          },
          blogData: {
            html: blogData[0],
          },
        },
      }
    );

    if (files?.media) {
      const filePath = path.resolve(`public/${blog?.imageData?.url}`);
      const search = fs.existsSync(filePath);
      if (search) {
        fs.unlinkSync(filePath);
      }

      await Blog.updateOne(
        { _id: new ObjectId(blogId[0]) },
        {
          $set: {
            "imageData.url": `/uploads/${pathFile}/${files?.media[0]?.newFilename}`,
          },
        }
      );
    }
    const data = { message: "Успешно добавихте Блога" };

    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    if (e) {
      res.json({
        error: "Проблеми със нещо си",
      });
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
