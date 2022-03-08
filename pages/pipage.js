import { useRouter } from "next/router"
import styles from '../styles/Home.module.css'

export default function PiPage() {


    return (<div>

        <main className={styles.main}>
            <h2 className={styles.title}>
                Approve/Edit FIR
            </h2>
            <div className="container">
                <h3 >Pending FIR</h3>

                <div className="border border-dark rounded mt-3 p-3 container h" >
                    <div className="row">
                        <p>FIR Date:</p>
                        <p>FIR ID:</p>
                        <p>Registered By:</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-dark">Approve</button>{" "}
                        <button type="button" className="btn btn-outline-dark">View/ Edit</button>{" "}
                        <button type="button" className="btn btn-outline-dark">Delete</button>{" "}
                    </div>
                </div>
                <div className="border border-dark rounded mt-3 p-3 container h" >
                    <div className="row">
                        <p>FIR Date:</p>
                        <p>FIR ID:</p>
                        <p>Registered By:</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-dark">Approve</button>{" "}
                        <button type="button" className="btn btn-outline-dark">View/ Edit</button>{" "}
                        <button type="button" className="btn btn-outline-dark">Delete</button>{" "}
                    </div>
                </div>
                <div className="border border-dark rounded mt-3 p-3 container h" >
                    <div className="row">
                        <p>FIR Date:</p>
                        <p>FIR ID:</p>
                        <p>Registered By:</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-dark">Approve</button>{" "}
                        <button type="button" className="btn btn-outline-dark">View/ Edit</button>{" "}
                        <button type="button" className="btn btn-outline-dark">Delete</button>{" "}
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h3>Approved FIR</h3>
                <div className="border border-dark rounded mt-3 p-3 container h" >
                    <div className="row">
                        <p>FIR Date:</p>
                        <p>FIR ID:</p>
                        <p>Registered By:</p>
                    </div>
                    <div> 
                        <button type="button" className="btn btn-outline-dark">View/ Edit</button>{" "}
                        <button type="button" className="btn btn-outline-dark">Delete</button>{" "}
                    </div>
                </div>

            </div>
        </main>
    </div>
    )
}