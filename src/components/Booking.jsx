import React, { useState } from 'react';
import '../styles/Booking.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        eventname: '',
        email: '',
        date: '',
        timing: '',
        people: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found. Please log in again.');
                return;
            }

            const response = await axios.post('http://localhost:8080/services', formData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            console.log('Form submitted successfully:', response.data);

            setFormData({
                name: '',
                address: '',
                eventname: '',
                email: '',
                date: '',
                timing: '',
                people: ''
            });
        } catch (error) {
            console.error('Form submission failed:', error);
        }
    };

    return (
        <div className="winsall">
            <div className="min">
                <h1>Book your Events!</h1>
                <form onSubmit={handleSubmit}>

                    <div className="hoon">
                        <label htmlFor="name">Applicant Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="park">
                        <label htmlFor="address">Applicant Address:</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                    </div>

                    <div className="water">
                        <label htmlFor="eventname">Event Name:</label>
                        <input type="text" id="eventname" name="eventname" value={formData.eventname} onChange={(e) => setFormData({ ...formData, eventname: e.target.value })} />
                    </div>
                    <div className="water">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div className="bottle">
                        <label htmlFor="date">Date of event:</label>
                        <input type="text" id="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                    </div>
                    <div className="phone">
                        <label htmlFor="timing">Time of Event:</label>
                        <input type="text" id="timing" name="timing" value={formData.timing} onChange={(e) => setFormData({ ...formData, timing: e.target.value })} />
                    </div>
                    <div className="essarr">
                        <label htmlFor="people">Number of People:</label>
                        <input type="number" id="people" name="people" value={formData.people} onChange={(e) => setFormData({ ...formData, people: e.target.value })} />
                    </div>

                    <button className="aott" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default App;
