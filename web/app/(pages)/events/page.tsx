'use client';

import { main } from '@/api/nfts';
import ListEvent from '@/components/events/ListEvent';
import { tickets } from '@/data/allTickets';
import { myTickets } from '@/data/myTickets';
import Swal from 'sweetalert2';

export default function CategoriesPage() {
  return (
    <div className="w-full p-4 flex justify-center">
      <div className="flex w-2/3 bg-slate-700 shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="flex flex-col w-full">
          <div className="flex p-5 border-b justify-center items-center border-slate-800">
            <div
              className="flex w-[30rem] rounded-lg bg-white"
              x-data="{ search: '' }"
            >
              <input
                type="search"
                className="w-full border-none bg-transparent px-4 py-1 text-gray-900 focus:outline-none"
                placeholder="search"
                x-model="search"
              />
              <button className="m-2 rounded-lg px-4 py-2 font-semibold text-gray-100 bg-gray-500">
                search
              </button>
            </div>
          </div>

          <div className="flex flex-col p-5">
            <div className="border-b pb-1 flex justify-between items-center mb-2 border-slate-800">
              <span className=" text-base font-semibold uppercase text-gray-200">
                {' '}
                play list
              </span>
            </div>

            {tickets.map((ticket) => (
              <ListEvent
                key={ticket.id}
                ticket={ticket}
                pay={() => {
                  main(ticket)
                  myTickets.push(ticket);
                  Swal.fire({
                    title: 'Comprado!',
                    text: 'La compra se realizó correctamente.',
                    icon: 'success',
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
