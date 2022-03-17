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
      console.log(res.data.fir);
      setApproved(res.data.fir);
    });
  }
  function getUnapproved() {
    axios.get("/api/get_unapproved_fir").then((res) => {
      console.log(res);
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
  console.log(approved);
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
            unapproved.map((item) => {
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
                    <Accordion key={0} defaultActiveKey="0">
                      <Accordion.Item eventKey={0}>
                        <Accordion.Header>Applicable IPC:</Accordion.Header>
                        {item.ipc.map((ipc, index) => {
                          return (
                            <Accordion.Body key={index}>{ipc}</Accordion.Body>
                          );
                        })}
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div style={{ margin: "2rem" }}>
                    <button
                      onClick={() => onApprove(item._id, item.ipc, item.corpus)}
                      className="btn btn-outline-dark"
                    >
                      Approve
                    </button>{" "}
                    <button
                      onClick={() =>
                        Router.push({
                          pathname: `/editfir`,
                          query: {
                            name: item.name,
                            middleName: item.middleName,
                            address: item.address,
                            phoneNo: item.phoneNo,
                            email: item.email,
                            distance: item.distance,
                            direction: item.direction,
                            date: item.date,
                            time: item.time,
                            natureofoffence: item.natureofoffence,
                            particulars: item.particulars,
                            description: item.description,
                            detailsofwitnesses: item.detailsofwitnesses,
                            item: item.corpus,
                          },
                        })
                      }
                      type="button"
                      className="btn btn-outline-dark"
                    >
                      View/ Edit
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

                    <Accordion key={0} defaultActiveKey="0">
                      <Accordion.Item eventKey={0}>
                        <Accordion.Header>Applicable IPC:</Accordion.Header>
                        {item.ipc.map((ipc, index) => {
                          return (
                            <Accordion.Body key={index}>{ipc}</Accordion.Body>
                          );
                        })}
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div style={{ margin: "2rem" }}>
                    <button
                      onClick={() =>
                        Router.push({
                          pathname: `/editfir`,
                          query: {
                            name: item.name,
                            middleName: item.middleName,
                            address: item.address,
                            phoneNo: item.phoneNo,
                            email: item.email,
                            distance: item.distance,
                            direction: item.direction,
                            date: item.date,
                            time: item.time,
                            natureofoffence: item.natureofoffence,
                            particulars: item.particulars,
                            description: item.description,
                            detailsofwitnesses: item.detailsofwitnesses,
                            corpus: item.corpus,
                          },
                        })
                      }
                      type="button"
                      className="btn btn-outline-dark"
                    >
                      View/ Edit
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
      </main>
    </div>
  );
}
