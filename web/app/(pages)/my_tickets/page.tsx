'use client';

import TicketComponent from '@/components/events/TicketComponent';
import TicketContent from '@/components/events/TicketContent';
import { nullTicket } from '@/data/allTickets';
import { myTickets } from '@/data/myTickets';
import { Ticket } from '@/models/Ticket';
import { useEffect, useState } from 'react';

function getTicketById(id: string): Ticket {
  return myTickets.find((ticket) => ticket.id === id) || nullTicket;
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
      {myTickets.map((ticket) => (
        <TicketComponent
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
        <TicketContent ticket={getTicketById(selectedTicket)} />
      </div>
    </div>
  );
}
