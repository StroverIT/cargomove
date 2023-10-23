// Mongoose
import { connectMongo } from "../../../db/connectDb";
import User from "../../../db/models/User";
import {ObjectId} from "mongodb"

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
    const { id } = req.body;

    const blog = await Blog.findOne({ _id: new ObjectId(id) });
    const filePath = path.resolve(`public/${blog?.imageData?.url}`);

    const search = fs.existsSync(filePath);

    if (search) {
      fs.unlinkSync(filePath);
      await Blog.deleteOne({ _id: new ObjectId(id) });
    }

    const data = { message: "Успешно Премахнахте Блога" };

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
    res.status(e.httpCode || 400).json({ data: null, error: e.message });
  }
};

export default handler;
