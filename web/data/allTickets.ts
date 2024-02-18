import { Ticket } from "@/models/Ticket";

export const nullTicket = new Ticket('', '', '', 0, '', '')

export const tickets: Ticket[] = [
  new Ticket('0304', 'Festival Estereo Picnic', 'Parque Simón Bolivar', 3.2, '2023-07-01', 'https://www.concierto.cl/wp-content/uploads/2021/04/DJ-Don-Diablo-NFT-1024x576.jpg'),
  new Ticket('9025', 'Final Copa América', 'Campín', 1.5, '2023-07-01', 'https://concepto.de/wp-content/uploads/2015/02/futbol-1-e1550783405750.jpg'),
  new Ticket('4759', 'Festival Cordillera', 'Parque Simón Bolivar', 2.0, '2023-07-01', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJc8RqGtkWbQxrlI3jor5JuEUKndP4wBX5A&usqp=CAU'),
  new Ticket('1126', 'Snoop Dog', 'Movistar Arena', 4.5, '2023-07-01', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQobwXK0ezSdzHIfYAcZ5cFszCHXt8ZmBLivg&usqp=CAU'),
  new Ticket('0433', 'La pelota de letras', 'Teatro Patria', 1.0, '2023-07-01', 'https://img.v3.goliiive.com/experiencia/flyer/3815.jpg'),
];