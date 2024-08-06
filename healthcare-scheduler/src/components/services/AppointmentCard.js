import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AppointmentCard = ({ appointment }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent>
          <Typography variant="h6">
            {appointment.date} at {appointment.time}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Doctor: {appointment.doctor}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Type: {appointment.type}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AppointmentCard;
