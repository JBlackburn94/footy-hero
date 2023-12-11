export default function Home() {
  return (
    <main className="h-screen pt-16 flex flex-col items-center">
      <h1 className="m-8 text-2xl">
        Welcome to <span className="uppercase font-semibold">Footy Hero!</span>
      </h1>
      <p>
        Your one stop shop for all Premier League and Championship results and
        fixtures.
      </p>
      <div className="mt-8">
        <a
          href=""
          className="p-4 mx-4 text-white hover:bg-opacity-75 hover:scale-105 duration-200 hover:rounded-none uppercase bg-black rounded-md"
        >
          Teams
        </a>
        <a
          href=""
          className="p-4 mx-4 text-white hover:bg-opacity-75 hover:scale-105 duration-200 hover:rounded-none uppercase bg-black rounded-md"
        >
          Tables
        </a>
      </div>
    </main>
  );
}
