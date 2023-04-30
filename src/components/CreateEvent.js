import React, { useState } from 'react';
import DatePicker from 'react-datepicker/dist/react-datepicker';
import "../styles/createEvent.css";

export default function CreateEvent(){

    const [description, setDescription] = useState('');
    const [dateTime, setDateTime] = useState(new Date());

    const handleCreate = (event) => {
        event.preventDefault();
        //access desc and date+time
    }

    return (
        <div className="createEvent-container">
            <form id="createEvent-form" onSubmit={handleCreate}>
                <h1>Create Event</h1>           
                <label>
                    <text className="desc-text">Description: </text>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br/>
                <label>
                    <text className="dateTime-text">Select Date and Time: </text>
                    <DatePicker
                        selected={dateTime}
                        onChange={(date) => setDateTime(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        required
                    />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}