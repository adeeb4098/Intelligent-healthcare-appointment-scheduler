import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { getAppointments } from '../services/appointmentService';
import AppointmentCard from './AppointmentCard';
import AppointmentForm from './AppointmentForm';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments().then(data => setAppointments(data));
  }, []);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, { ...appointment, id: appointments.length + 1 }]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Patient Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to your healthcare scheduler.
      </Typography>

      <AppointmentForm onAddAppointment={addAppointment} />

      <Typography variant="h5" gutterBottom>
        Your Appointments
      </Typography>
      <Grid container spacing={3}>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <Grid item xs={12} sm={6} key={appointment.id}>
              <AppointmentCard appointment={appointment} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No appointments scheduled.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default PatientDashboard;
