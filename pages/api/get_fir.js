import connect from "../../lib/dbConncet";
import FIR from "../../lib/FirModel";
import bcrypt from "bcrypt";
export default async function handle(req, res) {
  await connect();
  const { _id } = req.body;
  console.log(_id);
  FIR.findOne({ _id: _id }, (err, fir) => {
    if (err) {
      res.send({ message: err });
    } else {
      res.status(200).json({ message: true, fir });
    }
  });
}
