import connect from "../../lib/dbConncet";
import FIR from "../../lib/FirModel";
import bcrypt from "bcrypt";
export default async function handle(req, res) {
  await connect();
  const filter = {
    status: true,
  };
  FIR.find(filter, (err, fir) => {
    if (err) {
      res.send({ message: err });
    } else {
      res.status(200).json({ message: true, fir });
    }
  });
}
