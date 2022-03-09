import FIR from "../../lib/FirModel";
import connect from "../../lib/dbConncet";
export default async function handle(req, res) {
  await connect();
  const { _id } = req.body;
  FIR.findByIdAndRemove({ _id }, function (err) {
    if (err) {
      res.send({ message: err });
    } else {
      res.send({ message: "Deleted Successfully" });
    }
  });
}
