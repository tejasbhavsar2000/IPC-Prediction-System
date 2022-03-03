import { useRouter } from "next/router"
import styles from '../styles/Home.module.css'

export default function AddOffence() {
    const router = useRouter();

    const {
        query: { name, middleName, address, phoneNo, email, distance, direction, date, time, natureofoffence, particulars, description, detailsofwitnesses }
    } = router

    const props = {
        name, middleName, address, phoneNo, email, distance, direction, date, time, natureofoffence, particulars, description, detailsofwitnesses
    }

    console.log(props);
    return (<div>

        <main className={styles.main}>
            <h2 className={styles.title}>
                Register FIR
            </h2>

            <div className="border border-dark rounded mt-3 p-3 container h" >
                <div className="row">
                    <div className="mb-3 col-sm-6">
                        <h3>FIR Details</h3>
                        <hr />
                        <p className="form-label"><i className="fw-bold">Name: </i>{props.name} </p>
                        <p className="form-label"><i className="fw-bold">Husband's/Father's Name: </i>{props.middleName}</p>  
                        <p className="form-label"><i className="fw-bold">Address: </i>{props.address}</p>  
                        <p className="form-label"><i className="fw-bold">Contact No: </i>{props.phoneNo}</p>  
                        <p className="form-label"><i className="fw-bold">Email: </i>{props.email}</p>  
                        <p className="form-label"><i className="fw-bold">Distance from Police Station: </i>{props.distance}</p> 
                        <p className="form-label"><i className="fw-bold">Direction from Police Station: </i>{props.direction}</p> 
                        <p className="form-label"><i className="fw-bold">Date: </i>{props.date}</p> 
                        <p className="form-label"><i className="fw-bold">Time: </i>{props.time}</p> 
                        <p className="form-label"><i className="fw-bold">Nature of Offence: </i>{props.natureofoffence}</p> 
                        <p className="form-label"><i className="fw-bold">Particulars: </i>{props.particulars}</p> 
                        <p className="form-label"><i className="fw-bold">Description of the accused: </i>{props.description}</p> 
                        <p className="form-label"><i className="fw-bold">Details of witnesses (if any): </i>{props.detailsofwitnesses}</p> 
                    </div>
                    <div className="mb-3 col-sm-6">
                    <label for="exampleInputAddress" className="form-label lead fw-bold">Enter Offence</label> 
                    <textarea className="form-control h-75" id="offence" rows="3"></textarea>

                    </div>
                </div>
                 
            </div>
        </main>
    </div>
    )
}