import axios from "axios";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function AddOffence() {
  const router = useRouter();
  const [corpus, setCorpus] = useState("");
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
  const [ipc, setIPCs] = useState([]);
  const [detail, setDetails] = useState([]);
  const [punishment, setPunishment] = useState([]);
  const {
    query: {
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
      offence,
    },
  } = router;

  const props = {
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
    offence,
  };

  const handleSubmit = (event) => {
    if (ipc.length == 0) {
      alert("Check IPC before Submitting");
      event.preventDefault();
    } else {
      let obj = [];
      event.preventDefault();
      for (let i = 0; i < ipc.length; i++) {
        obj = [
          ...obj,
          { ipc: ipc[i], detail: detail[i], punishment: punishment[i] },
        ];
      }
      console.log(obj);

      axios
        .post("/api/submit_fir", {
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
          ipc: obj,
        })
        .then((res) => {
          alert(res.data.message);
          event.preventDefault();
        });
      Router.push("/register");
    }
  };

  const handleOnChange = (e) => {
    setCorpus(e.target.value);
  };
  const handleOnClick = () => {
    setClick(true);
    axios
      .post("/api/getipc", {
        corpus: corpus,
      })
      .then((res) => {
        setIPCs(res.data.ipc.ipc);
        setDetails(res.data.ipc.detail);
        setPunishment(res.data.ipc.punishment);
      });
  };

  const addIPC = (e) => {
    e.preventDefault();
    const temp = e.target.ipc.value + " IPC";
    setIPCs([...ipc, temp]);
    axios.post("http://127.0.0.1:5000/getipc", { ipc: temp }).then((res) => {
      console.log("add" + res.data.detail[0]);
      setDetails([...detail, res.data.detail[0]]);
      setPunishment([...punishment, res.data.punishment[0]]);
    });
    e.target.ipc.value = "";
    setClick(true);
  };
  return (
    <div>
      <main className={styles.main}>
        <h2 className={styles.title}>Register FIR</h2>

        <div className="bg-white shadow-lg border border-dark rounded mt-3 p-3 container h">
          <div className="row">
            <div className="mb-3 col-sm-6">
              <h3>FIR Details</h3>
              <hr />
              <p className="form-label">
                <i className="fw-bold">Name: </i>
                {props.name}{" "}
              </p>
              <p className="form-label">
                <i className="fw-bold">Husband's/Father's Name: </i>
                {props.middleName}
              </p>
              <p className="form-label">
                <i className="fw-bold">Address: </i>
                {props.address}
              </p>
              <p className="form-label">
                <i className="fw-bold">Contact No: </i>
                {props.phoneNo}
              </p>
              <p className="form-label">
                <i className="fw-bold">Email: </i>
                {props.email}
              </p>
              <p className="form-label">
                <i className="fw-bold">Distance from Police Station: </i>
                {props.distance}
              </p>
              <p className="form-label">
                <i className="fw-bold">Direction from Police Station: </i>
                {props.direction}
              </p>
              <p className="form-label">
                <i className="fw-bold">Date: </i>
                {props.date}
              </p>
              <p className="form-label">
                <i className="fw-bold">Time: </i>
                {props.time}
              </p>
              <p className="form-label">
                <i className="fw-bold">Nature of Offence: </i>
                {props.natureofoffence}
              </p>
              <p className="form-label">
                <i className="fw-bold">Particulars: </i>
                {props.particulars}
              </p>
              <p className="form-label">
                <i className="fw-bold">Description of the accused: </i>
                {props.description}
              </p>
              <p className="form-label">
                <i className="fw-bold">Details of witnesses (if any): </i>
                {props.detailsofwitnesses}
              </p>
              <p className="form-label">
                <i className="fw-bold">Add IPC: </i>
                <form onSubmit={addIPC}>
                  <div class="col-auto">
                    <input
                      className="form-control"
                      type="text"
                      name="ipc"
                    ></input>
                    <button className="m-2 btn btn-outline-dark" type="submit">
                      {" "}
                      ADD
                    </button>
                  </div>
                </form>
              </p>
              <p className="form-label">
                <i className="fw-bold">IPC Applicable: </i>
                {click && (
                  <div style={{ width: "fit-content" }}>
                    {ipc.length == 0 ? (
                      <div>Loading</div>
                    ) : (
                      <div>
                        {ipc.map((item, index) => {
                          return (
                            <>
                              <Accordion key={index} defaultActiveKey="0">
                                <Accordion.Item
                                  eventKey={index}
                                  id={`A${index}`}
                                >
                                  <Accordion.Header>
                                    {item} {detail[index]}
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    {punishment[index]}
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                              <button
                                onClick={() => {
                                  const temp1 = ipc;
                                  temp1.splice(index, 1);
                                  setIPCs(temp1);

                                  setCount(count + 1);
                                }}
                              >
                                Delete
                              </button>
                            </>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </p>
            </div>
            <div className="mb-3 col-sm-6">
              <label
                for="exampleInputAddress"
                className="form-label lead fw-bold"
              >
                Enter Offence
              </label>
              <textarea
                form="offenceform"
                className="form-control h-50"
                onChange={handleOnChange}
                id="offence"
                value={props.offence}
                rows="3"
              ></textarea>
              <button
                className="mt-3 btn btn-outline-dark"
                onClick={handleOnClick}
              >
                Generate IPC
              </button>
              <form className="mt-3" name="offenceform" onSubmit={handleSubmit}>
                <button className="btn btn-outline-dark" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
