import ListEvent from "@/components/events/ListEvent"

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

            <ListEvent eventDate="24/05/2024" eventName="Festival Estereo Picnic" eventPrice={3.4} link="/event/1" pay={() => {}} />
            <ListEvent eventDate="04/02/2026" eventName="Final Copa América" eventPrice={2.6} link="/event/2" pay={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
