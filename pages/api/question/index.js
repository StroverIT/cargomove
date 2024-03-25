import { connectMongo } from "../../../db/connectDb";
import Question from "../../../db/models/Question";

async function handler(req, res) {
  //Connect with database
  if (req.method == "POST") {
    try {
      const body = req.body;

      await connectMongo();
      
      await Question.create(body);

      // Успешно изпратено съобщение!
      return res.status(201).json({ message: "Успешно направихте запитване!" });
    } catch (e) {
      // console.log(e);
      // res.json({ error: e.message });
    }
  }
}
export default handler;
