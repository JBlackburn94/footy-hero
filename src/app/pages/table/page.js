"use client";
import { useState } from "react";

export default function Table() {
  const [premTable, setPremTable] = useState(false);
  const [champTable, setChampTable] = useState(false);

  const premierLeague = [
    {
      id: 1,
      title: "Tottenham",
      pts: "0",
      pos: "1",
      pl: "0",
      wo: "0",
      dr: "0",
      lo: "0",
    },
    {
      id: 2,
      title: "Chelsea",
      pts: "0",
      pos: "2",
      pl: "0",
      wo: "0",
      dr: "0",
      lo: "0",
    },
    {
      id: 3,
      title: "Liverpool",
      pts: "0",
      pos: "3",
      pl: "0",
      wo: "0",
      dr: "0",
      lo: "0",
    },
    {
      id: 4,
      title: "Manchester City",
      pts: "0",
      pos: "4",
      pl: "0",
      wo: "0",
      dr: "0",
      lo: "0",
    },
  ];

  const championship = [
    {
      id: 1,
      title: "Leicester",
      pts: "0",
      pos: "1",
      pl: "0",
      wo: "0",
      dr: "0",
      lo: "0",
    },
    {
      id: 2,
      title: "Leeds",
      pts: "0",
      pos: "2",
      pl: "0",
      wo: "0",
      dr: "0",
      lo: "0",
    },
    {
      id: 3,
      title: "Ipswich",
      pts: "0",
      pos: "3",
      pl: "0",
      wo: "0",
      dr: "0",
      lo: "0",
    },
    {
      id: 4,
      title: "Southampton",
      pts: "0",
      pos: "4",
      pl: "0",
      wo: "0",
      dr: "0",
      lo: "0",
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
          ? premierLeague.map(({ id, title, pts, pos, pl, wo, dr, lo }) => (
              <div
                key={id}
                className="w-[500px] bg-black text-white mt-4 flex justify-between items-center p-4 rounded-sm animate-flip-down animate-duration-500 animate-ease-in-out"
              >
                <p>
                  {pos}. {title}
                </p>
                <div className="flex items-center">
                  <span className="flex flex-col items-center m-2">
                    <p>P</p>
                    <p>{pl}</p>
                  </span>
                  <span className="flex flex-col items-center m-2">
                    <p>W</p>
                    <p>{wo}</p>
                  </span>
                  <span className="flex flex-col items-center m-2">
                    <p>D</p>
                    <p>{dr}</p>
                  </span>
                  <span className="flex flex-col items-center m-2">
                    <p>L</p>
                    <p>{lo}</p>
                  </span>
                  <span className="flex flex-col items-center m-2">
                    <p>PTS</p>
                    <p>{pts}</p>
                  </span>
                </div>
              </div>
            ))
          : ""}
        {champTable
          ? championship.map(({ id, title, pts, pos, pl, wo, dr, lo }) => (
              <div
                key={id}
                className="w-[500px] bg-black text-white mt-4 flex justify-between items-center p-4 rounded-sm animate-flip-down animate-duration-500 animate-ease-in-out"
              >
                <p>
                  {pos}. {title}
                </p>
                <div className="flex items-center">
                  <span className="flex flex-col items-center m-2">
                    <p>P</p>
                    <p>{pl}</p>
                  </span>
                  <span className="flex flex-col items-center m-2">
                    <p>W</p>
                    <p>{wo}</p>
                  </span>
                  <span className="flex flex-col items-center m-2">
                    <p>D</p>
                    <p>{dr}</p>
                  </span>
                  <span className="flex flex-col items-center m-2">
                    <p>L</p>
                    <p>{lo}</p>
                  </span>
                  <span className="flex flex-col items-center m-2">
                    <p>PTS</p>
                    <p>{pts}</p>
                  </span>
                </div>
              </div>
            ))
          : ""}
      </div>
    </main>
  );
}
