import FIR from "../../lib/FirModel";
import connect from "../../lib/dbConncet";
import axios from "axios";
export default async function handle(req, res) {
  await connect();
  const { _id, corpus, ipc } = req.body;
  console.log(_id);
  FIR.findByIdAndUpdate(
    { _id },
    { status: true, ipc: ipc },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        axios.post("http://127.0.0.1:5000/approve", {
          ipc: ipc,
          corpus: corpus,
        });
        res.send({ message: "Apporved Successfully", result });
      }
    }
  );
}
