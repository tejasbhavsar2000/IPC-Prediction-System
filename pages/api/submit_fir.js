import connect from "../../lib/dbConncet";
import FIR from "../../lib/FirModel";
export default async function handle(req, res) {
  await connect();
  const {
    name,
    middleName,
    address,
    phoneNo,
    email,
    distance,
    direction,
    date,
    time,
    natureofoffence,
    particulars,
    description,
    detailsofwitnesses,
    corpus,
    ipc,
  } = req.body;
  const fir = new FIR({
    name,
    middleName,
    address,
    phoneNo,
    email,
    distance,
    direction,
    date,
    time,
    natureofoffence,
    particulars,
    description,
    detailsofwitnesses,
    corpus,
    ipc,
    status: false,
  });
  fir.save((err) => {
    if (err) res.send(err);
    else res.send({ message: "Sucessfully Submitted" });
  });
}
