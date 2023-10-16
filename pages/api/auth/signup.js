import { connectMongo } from "../../../db/connectDb";
import mongoose from "mongoose";
import User from "../../../db/models/User";

import { hash } from "bcryptjs";

async function handler(req, res) {
  try {
    //Only POST mothod is accepted
    if (req.method === "POST") {
      //Getting email and password from body
      const { email, password, fullName } = req.query;
      console.log(req.query)
      const errors = [];
      //Validate
      if (!email || !password) {
        errors.push("Всички полета трябва да бъдат попълнени");
      }

      //Connect with database
      await connectMongo();
      //Check existing
      const checkExisting = await User.findOne({ email });
      console.log(checkExisting);
      //Send error response if duplicate user is found
      if (checkExisting) {
        errors.push("Вече съществува такъв и-мейл");
      }

      if (errors.length > 0) {
        mongoose.connection.close();
        return res.status(406).json(errors);
      }

      await User.create({
        email,
        password: await hash(password, 12),
        fullName,
      });

      return res
        .status(201)
        .json({ message: "Успешно се регистрирахте", isErr: false });
      //Send success response
      //Close DB connection
    } else {
      //Response for other than POST method
      mongoose.connection.close();

      res.status(500).json({ message: "Нещо се обърка..." });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Нещо се обърка..." });

  }
}

export default handler;
