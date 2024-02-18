'use client';

import Ticket from '@/components/events/Ticket';
import TicketContent from '@/components/events/TicketContent';
import { useEffect, useState } from 'react';

const tickets = [
  { id: '0304', name: 'Festival Estereo Picnic', location: 'Parque Simón Bolivar', price: 3.2, date: '2023-07-01' },
  { id: '9025', name: 'Final Copa América', location: 'Campín', price: 1.5, date: '2023-07-01'},
  { id: '4759', name: 'Festival Cordillera', location: 'Parque Simón Bolivar', price: 2.0, date: '2023-07-01'},
  { id: '1126', name: 'Carlos Vives', location: 'Movistar Arena', price: 4.5, date: '2023-07-01'},
  { id: '0433', name: 'La pelota de letras', location: 'Teatro Patria', price: 1.0, date: '2023-07-01'},
];

function getTicketById(id: string): { id: string; name: string, location: string, price: number, date: string } {
  return tickets.find((ticket) => ticket.id === id)!;
}

export default function MyTicketsPage() {
  const [selectedTicket, setSelectTicket] = useState('');
  useEffect(() => {}, [selectedTicket]);

  function handleClick(id: string) {
    setSelectTicket(id);
  }

  function handleClose() {
    setSelectTicket('');
  }

  return (
    <div className="grid grid-cols-4 items-center gap-4 my-8 w-2/3 mx-auto">
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          id={ticket.id}
          name={ticket.name}
          onClick={handleClick}
        />
      ))}
      <div
        className={
          'absolute w-full h-full bg-black transition-all duration-300 top-0 left-0' +
          (selectedTicket ? ' opacity-20 z-10' : ' opacity-0 -z-50')
        }
      ></div>
      <div
        className={
          'absolute bg-gray-600 m-2 h-full w-1/3 right-0 top-0 z-20 transition-all duration-300 flex justify-center items-center' +
          (selectedTicket ? '' : ' translate-x-full opacity-0')
        }
      >
        <button onClick={handleClose} className="absolute top-1 left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"
            />
          </svg>
        </button>
        <TicketContent {...getTicketById(selectedTicket)} />
      </div>
    </div>
  );
}
