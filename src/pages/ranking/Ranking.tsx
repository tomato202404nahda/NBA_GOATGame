import React, { useContext, useEffect, useState } from "react";
import { RankingContext } from "../../App";
import { Candidate } from "../home/Home";

export default function Ranking() {
  const [value, setValue] = useContext(RankingContext);
  const [ranked, setRanked] = useState<Candidate[]>([]);
  console.log(value);
  useEffect(() => {
    if (value != undefined) {
      setRanked(
        value
          .map((c) => {
            return {
              key: c.key,
              name: c.name,
              src: c.src,
              score: c.score,
            };
          })
          .sort((l, r) => {
            return r.score - l.score;
          })
      );
    }
  }, []);

  if (ranked != undefined) {
    return (
      <>
        <div className="flex flex-col max-w-full w-full mx-auto">
          <div className="flex flex-row py-2 px-8 w-full bg-slate-500 items-center">
            <div className="w-[60%] flex flex-col text-center">
              <p className="text-2xl font-bold">Name</p>
            </div>
            <div className="w-[20%] text-center text-xl font-black mx-auto h-auto">
              Score
            </div>
          </div>
          {ranked?.map((c) => {
            return (
              <div className="flex flex-row py-2 px-8 w-full bg-slate-100 items-center border-b-4">
                <div className="w-[60%] border-r-4  flex flex-col text-center">
                  <p className="text-2xl font-bold">{c.name}</p>
                  <img
                    className=" h-64 object-contain w-auto aspect-square"
                    src={c.src}
                    alt=""
                  />
                </div>
                <div className="w-[20%] text-3xl text-center mx-auto h-auto">
                  {c.score}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <a href="/ranking">
        <button>Go back</button>
      </a>
    );
  }
}
