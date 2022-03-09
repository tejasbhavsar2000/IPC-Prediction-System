import FIR from "../../lib/FirModel";
import connect from "../../lib/dbConncet";
export default async function handle(req, res) {
  await connect();
  const { _id } = req.body;
  console.log(_id);
  FIR.findByIdAndUpdate({ _id }, { status: true }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Apporved Successfully", result });
    }
  });
}
