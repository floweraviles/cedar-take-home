import axios from "axios";
import React from "react";
import {apiURL} from "../../util/apiURL";

const API = apiURL();

function editTime ({
    timeslot,
    setTimeslot,
    setTimeslots,
    timeslots,
    setDisplayEdit,
    setShowEdit,
}) 

{
    const handlesubmit = async (e) => {
        e.preventDefault();
        const res =await axioz.put(`${API}/timeslots/$timeslots.id`, timeslot);
        if (res.data.success) {
            setTimeslots(
                timeslots.map((app) => app.id == timeslot.id ? (app = res.data.payload) : app)
            );
            setShowEdit(true);
        }
        setDisplayEdit(false);
    };
    const handleChange = (e) => {
        setTimeslot({ ...timeslot, [e.target.id] : e.target.value});
    };

    return (
        <div>
        <h1>Edit Transaction</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Doctor</label>
            <input type="text" id="name" onChange={handleTextChange} value={timeslot.name} />
            <label htmlFor="reason">Reason For Visit</label>
            <input type="text" id="reason" onChange={handleTextChange} value={timeslot.reason} />
        <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={handleTextChange} value={timeslot.date} />
            <br />
            <button type="submit">Submit</button>
        </form>
        <Link to={`/timeslots/${index}`}>
            <button type="submit">Submit</button>
        </Link>
    </div>
    )
}

export default editTime;