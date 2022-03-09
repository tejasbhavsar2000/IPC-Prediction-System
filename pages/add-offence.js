import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function AddOffence() {
  const router = useRouter();
  const [corpus, setCorpus] = useState("");
  const [click, setClick] = useState(false);
  const [ipc, setIPCs] = useState([]);
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

  console.log(props);
  const handleSubmit = () => {
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
      })
      .then((res) => {
        alert(res.data.message);
      });
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
        console.log(res.data);
        setIPCs(res.data.ipc);
      });
  };
  return (
    <div>
      <main className={styles.main}>
        <h2 className={styles.title}>Register FIR</h2>

        <div className="border border-dark rounded mt-3 p-3 container h">
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
                className="form-control h-75"
                onChange={handleOnChange}
                id="offence"
                value={props.offence}
                rows="3"
              ></textarea>
              <button onClick={handleOnClick}>Generate IPC</button>
              <form name="offenceform" onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        {click && (
          <div>
            {ipc.length == 0 ? (
              <div>Loading</div>
            ) : (
              <div>
                {ipc.map((item, index) => {
                  return (
                    <div key={index} style={{ border: "solid black 1px" }}>
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
