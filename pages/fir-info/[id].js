import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Router, { useRouter } from "next/router";
import axios from "axios";

export default function EditFir() {
  const router = useRouter();
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
      corpus,
    },
  } = router;

  const handleSubmit = async (e) => {
    e.preventDefault();

    Router.push({
      pathname: "/add-offence",
      query: {
        name: e.target.inputName.value,
        middleName: e.target.middleName.value,
        address: e.target.address.value,
        phoneNo: e.target.inputNo.value,
        email: e.target.inputEmail.value,
        distance: e.target.inputDist.value,
        direction: e.target.inputDirection.value,
        date: e.target.inputDate.value,
        time: e.target.inputTime.value,
        natureofoffence: e.target.inputOffence.value,
        particulars: e.target.inputParticulars.value,
        description: e.target.accusedDescription.value,
        detailsofwitnesses: e.target.witnessDetails.value,
      },
    });
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Register FIR</h2>

        <div className="border border-dark rounded mt-5 container">
          <form className="m-3" onSubmit={handleSubmit}>
            <h2>Personal Details</h2>
            <div className="row">
              <div className="mb-3 col-sm">
                <label for="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="mb-3 col-sm">
                <label for="exampleInputMiddleName" className="form-label">
                  Father's / Husband's Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  aria-describedby="middleHelp"
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-sm">
                <label for="exampleInputNo" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputNo"
                  aria-describedby="nameNo"
                />
              </div>
              <div className="mb-3 col-sm">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-sm">
                <label for="exampleInputAddress" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <h2>Place of Occurence</h2>
            <div className="row">
              <div className="mb-3 col-sm">
                <label for="exampleInputDist" className="form-label">
                  Distance from the police station
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputDist"
                  aria-describedby="nameDist"
                />
              </div>
              <div className="mb-3 col-sm">
                <label for="exampleInputMiddleName" className="form-label">
                  Direction from the police station
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputDirection"
                  aria-describedby="middleHelp"
                />
              </div>
            </div>

            <h2>Date and Hour of Occurence</h2>
            <div className="row">
              <div className="mb-3 col-sm">
                <label for="exampleInputDist" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputDate"
                  aria-describedby="nameDate"
                />
              </div>
              <div className="mb-3 col-sm">
                <label for="exampleInputMiddleName" className="form-label">
                  Time
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="inputTime"
                  aria-describedby="nameTime"
                />
              </div>
            </div>

            <h2>Offence</h2>
            <div className="row">
              <div className="mb-3 col-sm">
                <label for="exampleInputDist" className="form-label">
                  Nature of Offence
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputOffence"
                  aria-describedby="nameOffence"
                />
              </div>
              <div className="mb-3 col-sm">
                <label for="exampleInputParticulars" className="form-label">
                  Particulars of the Property
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputParticulars"
                  aria-describedby="nameParticulars"
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-sm">
                <label for="exampleInputParticulars" className="form-label">
                  Description of Accused
                </label>
                <textarea
                  className="form-control"
                  id="accusedDescription"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-sm">
                <label for="exampleInputWitness" className="form-label">
                  Details of Witnesses
                </label>
                <textarea
                  className="form-control"
                  id="witnessDetails"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <button type="" className="btn btn-primary">
              Next
            </button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
