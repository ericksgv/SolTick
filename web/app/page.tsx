export default function Page() {
  return (
    <>
      {/* component */}
      <div className="overflow-hidden">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-40 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
              <h2 className="text-4xl font-bold sm:text-5xl text-slate-200">
                SolTick
                <span className="hidden sm:block text-4xl text-slate-400">
                  Una solución para la venta y reventa de boletas a tus
                  conciertos favoritos
                </span>
              </h2>
              <a
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-rose-500 rounded-lg hover:opacity-75"
                href="/events"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 14 14"
                >
                  <g
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5.71 4.31C3.79 3 2 4 .5 5.54l3.32 2m5.87.75C11 10.21 10 12 8.46 13.5l-2-3.32" />
                    <path d="m3.82 7.53l2.65 2.65C8.59 8.91 11 7.68 12.1 6.54c2.38-2.38 1-5.64 1-5.64s-3.26-1.38-5.64 1C6.32 3 5.08 5.42 3.82 7.53m1.46-2.51l3.7 3.7" />
                    <path d="M10.5 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-6.82 8.44C3.1 13 .5 13.5.5 13.5s.5-2.6 1.06-3.18a1.501 1.501 0 0 1 2.597 1.049a1.5 1.5 0 0 1-.477 1.07Z" />
                  </g>
                </svg>
                &nbsp; Comineza Ya!
              </a>
            </div>
          </div>
          <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img
              className="w-96 rounded-full"
              src="/images/icons/icon-512x512.png"
            />
          </div>
        </aside>
      </div>
    </>
  );
}
