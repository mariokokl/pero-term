// KalendarPage.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

// Simulated busy dates (for demonstration purposes)
const initialBusyDates = [
  { date: new Date(2023, 8, 1), status: 'Meeting' },
  { date: new Date(2023, 8, 5), status: 'Vacation' },
  { date: new Date(2023, 7, 15), status: 'Conference' }, // A past busy date for demonstration
];

function KalendarPage() {
  const [busyDates] = useState(initialBusyDates);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const isDateBusy = (date) => {
    return busyDates.some((busyDate) => busyDate.date.toDateString() === date.toDateString());
  };

  const filteredBusyDates = busyDates.filter((busyDate) => busyDate.date >= new Date());

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Paper style={{ width: '80%', padding: '20px' }}>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <div style={{ width: '30%' }}>
            <Calendar
              onClickDay={handleDateClick}
              value={null}
              tileClassName={({ date }) =>
                selectedDate && date.toDateString() === selectedDate.toDateString() ? 'selected-date' : null
              }
            />
          </div>
          <div style={{ width: '50%', paddingLeft: '20px' }}>
            {selectedDate && (
              <div>
                <h4>Označen datum:</h4>
                <p>{selectedDate.toLocaleDateString('en-GB')}</p>
                {isDateBusy(selectedDate) ? (
                  <p>Ovaj datum je označen kao zauzet</p>
                ) : (
                  <p>Ovaj datum je označen kao slobodan</p>
                )}
              </div>
            )}
          </div>
        </div>
      </Paper>
      <Paper style={{ width: '80%', padding: '20px' }}>
        <h3>Nadolazeči zauzeti datumi:</h3>
        <List>
          {filteredBusyDates.map((busyDate, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={busyDate.date.toLocaleDateString('en-GB')}
                secondary={busyDate.status}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default KalendarPage;
