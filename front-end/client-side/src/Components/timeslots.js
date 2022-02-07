import timeslot from "../Components/timeslot.js"
import "./Transactions.css"
// import { useParams } from "react-router-dom";

const timeslots = ({timeslots}) => {
    // const { index } = useParams()

    return (
        <div className="container mb-5 mt-3">
          <table className= "table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col"> Doctor </th>
                        <th scope="col"> Reason For Visit </th>
                        <th scope="col"> Date </th>
                        
                    </tr>
                </thead>
                <tbody>
                        {timeslots.map((timeslot, index) =>{
                        return <timeslot key={index} timeslot={timeslot} index={index} />

                    })}
                    
                </tbody> 
            </table>
         </div>
    )
}

export default timeslots;