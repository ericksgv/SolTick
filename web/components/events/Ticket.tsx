interface Props {
  id: string;
  name: string;
  onClick: (id: string) => void;
}

export default function Ticket({ id, name, onClick }: Props) {
  return (
    <button
      className="group cursor-pointer h-40 w-20 hover:skew-x-6 hover:-skew-y-6 hover:duration-500 duration-500 group-hover:duration-500 overflow-hidden relative rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center bg-neutral-900 text-gray-50 justify-self-center"
      onClick={() => onClick(id)}
    >
      <div className="after:duration-500 before:duration-500 duration-500 group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 flex flex-col font-extrabold text-3xl z-10">
        <span>{id.substring(0, 2)}</span>
        <span>{id.substring(2)}</span>
      </div>
      <div className="flex flex-row justify-center text-sm font-thin items-center gap-1">
        <span>{name}</span>
      </div>
    </button>
  );
}
