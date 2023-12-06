// Mongoose
import { connectMongo } from "../../../db/connectDb";
import Gallery from "../../../db/models/Gallery";
import User from "../../../db/models/User";
import { ObjectId } from "mongodb";
// Token
import { getToken } from "next-auth/jwt";

// Fs
import fs from "fs";
import path from "path";

const secret = process.env.NEXTAUTH_SECRET;

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
    const { items } = req.body;

    items.forEach(async (item,index)=>{
        await Gallery.updateOne({_id: new ObjectId(item)}, {
            $set: {order: index}
        })
    })



    const data = {
      message: "Успешно сменихте местата на снимките",
    };

    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    if (e) {
      return res.json({ error: "Не е успешно" });
    }
  }
};

export default handler;
