import { Ticket } from "@/models/Ticket";

export const nullTicket = new Ticket('', '', '', 0, '')

export const tickets: Ticket[] = [
  new Ticket('0304', 'Festival Estereo Picnic', 'Parque Simón Bolivar', 3.2, '2023-07-01'),
  new Ticket('9025', 'Final Copa América', 'Campín', 1.5, '2023-07-01'),
  new Ticket('4759', 'Festival Cordillera', 'Parque Simón Bolivar', 2.0, '2023-07-01'),
  new Ticket('1126', 'Carlos Vives', 'Movistar Arena', 4.5, '2023-07-01'),
  new Ticket('0433', 'La pelota de letras', 'Teatro Patria', 1.0, '2023-07-01'),
];