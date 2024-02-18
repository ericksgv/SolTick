import { Ticket } from "@/models/Ticket";

interface Props {
  ticket: Ticket;
}

export default function TicketContent({ticket}: Props) {
  return (
    <div className="cardContainer">
      <div className="card">
        <p className="title">{ticket.name}</p>
        <p className="weather">{ticket.location}</p>
        <svg
          className="weather"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          xmlSpace="preserve"
        >
          <image
            id="image0"
            width="100"
            height="100"
            x="0"
            y="0"
            href={ticket.imageUrl}
          ></image>
        </svg>
        <p className="temp">{ticket.id}</p>
        <div className="minmaxContainer">
          <div className="min">
            <p className="minHeading">Precio</p>
            <p className="minTemp">{ticket.price}</p>
          </div>
          <div className="max">
            <p className="maxHeading">Fecha</p>
            <p className="maxTemp">{ticket.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
