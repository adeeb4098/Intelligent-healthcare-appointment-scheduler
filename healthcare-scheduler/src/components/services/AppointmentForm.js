// src/components/AppointmentForm.js
import React, { useState } from 'react';

const AppointmentForm = ({ onAddAppointment }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [type, setType] = useState('In-person');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = { date, time, doctor, type };
    onAddAppointment(newAppointment);
    setDate('');
    setTime('');
    setDoctor('');
    setType('In-person');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Time: </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Doctor: </label>
        <input
          type="text"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Type: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="In-person">In-person</option>
          <option value="Telemedicine">Telemedicine</option>
        </select>
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
