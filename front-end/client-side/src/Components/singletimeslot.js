import { Link } from "react-router-dom"; 


const singletimeslot = ({ timeslot, index }) => {
    return (

        <tbody>
           <tr>
                <td><Link to={`/timeslots/${index}`}>{timeslot.doctor} </Link></td> 
                <td>${timeslot.reason_for_visit}</td>
                <td>{timeslot.date}</td>  
           </tr>

        </tbody>
    );   
};

export default singletimeslot;