import axios from "axios";

export default async function handle(req, res) {
  const { corpus } = req.body;
  console.log(corpus);
  axios.post(`http://127.0.0.1:5000/ipc`, { corpus: corpus }).then((data) => {
    const ipc = data.data;
    console.log(typeof ipc);
    res.status(200).json({
      message: "Successfull model.",
      ipc: ipc,
    });
  });
}
