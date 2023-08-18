// CjenikPage.js
import React from 'react';
import TableComponent from './Table'; // Import the TableComponent

function CjenikPage() {
  // Data for the table
  const items = [
    { id: 1, name: 'Slavina', price: '10 €' },
    { id: 2, name: 'Radijator', price: '10 €' },
    { id: 3, name: 'Klima', price: '10 €' }
    // Add more items here
  ];

  return (
    <div>
      {/* Render the TableComponent with the data */}
      <TableComponent data={items} />
    </div>
  );
}

export default CjenikPage;