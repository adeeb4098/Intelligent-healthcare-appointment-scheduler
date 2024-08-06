// src/services/appointmentService.js
const appointments = [
    { id: 1, date: '2024-08-06', time: '10:00 AM', doctor: 'Dr. Smith', type: 'In-person' },
    { id: 2, date: '2024-08-07', time: '2:00 PM', doctor: 'Dr. Doe', type: 'Telemedicine' },
  ];
  
  export const getAppointments = () => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(appointments);
      }, 1000);
    });
  };
  