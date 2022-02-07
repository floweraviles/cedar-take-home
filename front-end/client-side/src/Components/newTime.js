import { useState } from "react";
import { useHistory } from "react-router";
import timeslots from "../../../../back-end/controllers/scheController";



const NewTime = ({addTime}) => {
    const [timeslot, setTimeslot] = useState({
        doctor: "", 
        reason_for_visit: "",
        date: "", 
        
    })

    const history = useHistory()

    const handleTextChange = (event) => {
        setTimeslot({...timeslot, [event.target.id]: event.target.value})
    }

    

    const handleSubmit = (event) => {
        event.preventDefault()
        addTime(timeslots)
        history.push("/timeslots")
    }

    

    return (
        <div className="container">
            <h1>Add a new item</h1>
            <form className="mb-3"onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Doctor: </label>
                <input type="text" id="name" 
                value={timeslot.doctor} 
                onChange={handleTextChange} />
                </div>
                <br />
                <div className="form-group">
                <label htmlFor="amount">Reason For Visit </label>
                <input type="text" id="amount" 
                value={timeslots.amount} 
                onChange={handleTextChange} />
                </div>
                <br />
                <div className="form-group">
                <label htmlFor="date" className="col-form-label-lg">Date: </label>
                <input class="form-control" 
                type="date" id="date" 
                value={timeslots.date} 
                onChange={handleTextChange}/>
                </div>
                <br />
               
                <br></br>
                <button type="submit">Create New Item</button>
            </form>
        </div>
    );
};

export default NewTime;