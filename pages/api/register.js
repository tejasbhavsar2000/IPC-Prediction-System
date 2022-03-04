import User from "../../lib/UserModel";
import connect from "../../lib/dbConncet";
import bcrypt from "bcrypt";
export default function handle(req, res) {
  const { name, email, type, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    connect();
    if (user) {
      res.json({ message: "User already registerd" });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        // save user token

        const user = new User({
          name,
          email,
          type,
          password: hash,
        });
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "Successfully Registered, Please login now." });
          }
        });
      });
    }
  });
}
