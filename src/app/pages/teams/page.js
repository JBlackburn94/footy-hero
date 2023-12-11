"use client";
import { useState } from "react";

export default function Teams() {
  const [premTable, setPremTable] = useState(false);
  const [champTable, setChampTable] = useState(false);

  const premierLeague = [
    {
      id: 1,
      title: "Tottenham",
    },
    {
      id: 2,
      title: "Chelsea",
    },
    {
      id: 3,
      title: "Liverpool",
    },
    {
      id: 4,
      title: "Manchester City",
    },
  ];

  const championship = [
    {
      id: 1,
      title: "Leicester",
    },
    {
      id: 2,
      title: "Leeds",
    },
    {
      id: 3,
      title: "Ipswich",
    },
    {
      id: 4,
      title: "Southampton",
    },
  ];

  return (
    <main className="pt-16 h-screen flex flex-col items-center">
      <div className="m-8 flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <button
            onClick={() => setPremTable(!premTable)}
            className="hover:rounded-none hover:bg-opacity-75 duration-200 mx-4 p-4 bg-black rounded-md text-white animate-bounce animate-once animate-duration-500 animate-ease-in-out"
          >
            Premier League
          </button>
          <button
            onClick={() => setChampTable(!champTable)}
            className="hover:rounded-none hover:bg-opacity-75 duration-200 mx-4 p-4 bg-black rounded-md text-white animate-bounce animate-once animate-duration-[750ms] animate-ease-in-out"
          >
            Championship
          </button>
        </div>
        {premTable
          ? premierLeague.map(({ id, title }) => (
              <div
                key={id}
                className="w-[500px] bg-black text-white mt-4 flex justify-between items-center p-4 rounded-sm animate-flip-down animate-duration-500 animate-ease-in-out"
              >
                <p>{title}</p>
              </div>
            ))
          : ""}
        {champTable
          ? championship.map(({ id, title }) => (
              <div
                key={id}
                className="w-[500px] bg-black text-white mt-4 flex justify-between items-center p-4 rounded-sm animate-flip-down animate-duration-500 animate-ease-in-out"
              >
                <p>{title}</p>
              </div>
            ))
          : ""}
      </div>
    </main>
  );
}
