import connect from "../../lib/dbConncet";
import User from "../../lib/UserModel";
import bcrypt from "bcrypt";
export default async function handle(req, res) {
  await connect();
  const { email, password, type, _id } = req.body;
  User.findOne({ email: email, type: type }, (err, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) return res.send("error");
        if (!result)
          return res.send({ message: "Username or Password didn't match" });

        res.status(200).json({ message: "Login Successfull", user: user });
      });
    } else {
      res.status(200).json({ message: "User not registered" });
    }
  });
}
