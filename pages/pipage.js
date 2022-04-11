import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function PiPage() {
  const [approved, setApproved] = useState([]);
  const [unapproved, setUnApproved] = useState([]);
  useEffect(() => {
    getApproved();
    getUnapproved();
  }, []);
  function getApproved() {
    axios.get("/api/getApprovedFir").then((res) => {
      setApproved(res.data.fir);
    });
  }
  function getUnapproved() {
    axios.get("/api/get_unapproved_fir").then((res) => {
      setUnApproved(res.data.fir);
    });
  }
  function onApprove(id, ipc, corpus) {
    axios
      .post("/api/approve_fir", { _id: id, corpus: corpus, ipc: ipc })
      .then((res) => {
        alert(res.data.message);
        getApproved();
        getUnapproved();
      });
  }
  function onDelete(id) {
    axios.post("/api/delete_fir", { _id: id }).then((res) => {
      alert(res.data.message);
      getApproved();
      getUnapproved();
    });
  }

  return (
    <div>
      <main className={styles.main}>
        <h1>Approve/Edit FIR</h1>
        <div className="container">
          <h3>Pending FIR</h3>
          {unapproved.length == 0 ? (
            <div
              style={{ background: "white" }}
              className="border border-dark rounded mt-3 p-3 container h"
            >
              {" "}
              No Pending FIR
            </div>
          ) : (
            unapproved.map((item, ind) => {
              return (
                <div
                  style={{ background: "white" }}
                  key={item._id}
                  className="border border-dark rounded mt-3 p-3 container h"
                >
                  <div className="row">
                    <p>FIR Date: {item.date}</p>
                    <p>FIR ID: {item._id}</p>
                    <p>Registered By: {item.name}</p>
                    <p>FIR: {item.corpus}</p>
                    <p>Applicable IPC:</p>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const temp = e.target.ipc.value + " IPC";
                        axios
                          .post("http://127.0.0.1:5000/getipc", { ipc: temp })
                          .then((res) => {
                            console.log("add" + res.data.detail[0]);
                            item.ipc.push({
                              ipc: temp,
                              detail: res.data.detail[0],
                              punishment: res.data.punishment[0],
                            });
                            setUnApproved([...unapproved]);
                          });
                        e.target.ipc.value = "";
                      }}
                    >
                      <div
                        style={{
                          width: "10rem",
                          display: "flex",
                          margin: "5px 5px 5px 0px",
                        }}
                      >
                        <input
                          className="form-control"
                          type="text"
                          name="ipc"
                          placeholder="Add IPC's"
                        ></input>
                        <button type="submit" className="btn btn-outline-dark">
                          Add
                        </button>
                      </div>
                    </form>

                    {item.ipc.map((ipc, index) => {
                      return (
                        <Accordion key={index} defaultActiveKey="0">
                          <Accordion.Item eventKey={index} id={`A${index}`}>
                            <Accordion.Header>
                              {ipc.ipc} {ipc.detail}
                            </Accordion.Header>
                            <Accordion.Body>{ipc.punishment}</Accordion.Body>
                          </Accordion.Item>
                          <button
                            style={{ margin: "5px" }}
                            onClick={() => {
                              item.ipc.splice(index, 1);
                              setUnApproved([...unapproved]);
                              console.log(unapproved);
                            }}
                          >
                            Delete
                          </button>
                        </Accordion>
                      );
                    })}
                  </div>
                  <div style={{ margin: "2rem" }}>
                    <button
                      onClick={() => onApprove(item._id, item.ipc, item.corpus)}
                      className="btn btn-outline-dark"
                    >
                      Approve
                    </button>{" "}
                    <button
                      onClick={() => onDelete(item._id)}
                      className="btn btn-outline-dark"
                    >
                      Delete
                    </button>{" "}
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="container mt-3">
          <h3>Approved FIR</h3>
          {approved.length == 0 ? (
            <div
              style={{ background: "white" }}
              className="border border-dark rounded mt-3 p-3 container h"
            >
              {" "}
              No Pending FIR
            </div>
          ) : (
            approved.map((item) => {
              return (
                <div
                  key={item._id}
                  style={{ background: "white" }}
                  className="border border-dark rounded mt-3 p-3 container h"
                >
                  <div className="row">
                    <p>
                      <b>FIR Date:</b> {item.date}
                    </p>
                    <p>
                      <b>FIR ID:</b> {item._id}
                    </p>
                    <p>
                      <b>Registered By:</b> {item.name}
                    </p>
                    <p>
                      <b>FIR:</b> {item.corpus}
                    </p>

                    <p>Applicable IPC:</p>
                    {item.ipc.map((ipc, index) => {
                      return (
                        <Accordion key={index} defaultActiveKey="0">
                          <Accordion.Item eventKey={index} id={`A${index}`}>
                            <Accordion.Header>
                              {ipc.ipc} {ipc.detail}
                            </Accordion.Header>
                            <Accordion.Body>{ipc.punishment}</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      );
                    })}
                  </div>
                  <div style={{ margin: "2rem 2rem 2rem 0rem" }}>
                    <button
                      onClick={() => onDelete(item._id)}
                      className="btn btn-outline-dark"
                    >
                      Delete
                    </button>{" "}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}
