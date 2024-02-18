import Link from "next/link";

interface Props {
  eventName: string;
  eventDate: string;
  eventPrice: number;
  link: string;
  pay: () => void;
}

export default function ListEvent({eventName, eventDate, eventPrice, link, pay}: Props) {
  return (
    <div className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 border-slate-800 gap-4 items-center">
      <Link className="flex items-center gap-4 w-full" href={link}>
        <img
          className="w-10 h-10 object-cover rounded-lg"
          alt="User avatar"
          src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
        />
        <span className="text-2xl w-full">{eventName}</span>
        <div className="flex flex-col">
          <span className="text-sm text-red-500 capitalize font-semibold pt-1">
            {eventPrice} SOL
          </span>
          <span className="text-xs text-gray-500 uppercase font-medium ">
            {eventDate}
          </span>
        </div>
      </Link>
      <Link
        href="/my_tickets"
        className="flex focus:outline-none aspect-square w-16 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 26 26"
          className="fill-white"
        >
          <g fill="none">
            <defs>
              <mask id="IconifyId18dba1bba1f61ce560">
                <path fill="#fff" d="M0 0h26v26H0z" />
                <g fill="#000" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M10.897 8.7c-.551.413-.8.908-.8 1.37c0 .463.249.958.8 1.372c.552.414 1.36.7 2.295.7a1 1 0 1 1 0 2c-1.326 0-2.565-.402-3.495-1.1c-.93-.698-1.6-1.738-1.6-2.971c0-1.234.67-2.274 1.6-2.972c.93-.697 2.17-1.099 3.495-1.099c2.053 0 3.994.983 4.766 2.62a1 1 0 0 1-1.81.853C15.798 8.726 14.706 8 13.193 8c-.935 0-1.743.286-2.295.7" />
                  <path d="M15.157 17.583c.551-.413.799-.908.799-1.37c0-.464-.248-.959-.8-1.372c-.551-.414-1.36-.7-2.294-.7a1 1 0 1 1 0-2c1.326 0 2.565.402 3.495 1.1c.93.698 1.599 1.738 1.599 2.971s-.669 2.274-1.6 2.971c-.93.698-2.168 1.1-3.494 1.1c-2.053 0-3.995-.983-4.766-2.621a1 1 0 0 1 1.809-.853c.352.748 1.444 1.474 2.957 1.474c.935 0 1.743-.286 2.295-.7M13 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1" />
                  <path d="M13 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" />
                </g>
              </mask>
            </defs>
            <circle
              cx="13"
              cy="13"
              r="13"
              fill="#fff"
              mask="url(#IconifyId18dba1bba1f61ce560)"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
}
