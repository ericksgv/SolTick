'use client';

import Ticket from '@/components/events/Ticket';
import { useEffect, useState } from 'react';

const tickets = [
  { id: '0304', name: 'FEP' },
  { id: '9025', name: 'Final Copa América' },
  { id: '4759', name: 'Festival Cordillera' },
  { id: '1126', name: 'Carlos Vives' },
  { id: '0433', name: 'La pelota de letras' },
];

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
      <div className={"absolute w-full h-full bg-black transition-all duration-300 top-0 left-0 z-10" + (selectedTicket ? ' opacity-20 z-10' : ' opacity-0 -z-50')}></div>
      <div
        className={
          'absolute bg-white h-full w-1/3 right-0 top-0 z-20 transition-all duration-300' +
          (selectedTicket ? '' : ' translate-x-full opacity-0')
        }
      >
        <button className="bg-black" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}
