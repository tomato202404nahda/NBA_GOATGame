import MJ from "../../assets/MJ.jpeg";
import LBJ from "../../assets/lbj.jpg";
import KAJ from "../../assets/kaj.jpg";
import Hakeem from "../../assets/hakeem.webp";
import Shaq from "../../assets/shaq.webp";
import Larry from "../../assets/larrybird.webp";
import Timmy from "../../assets/timmy.jpg";
import Wilt from "../../assets/wilt.webp";
import Magic from "../../assets/magic.jpg";
import Dirk from "../../assets/dirknowitzki.jpg";
import Kobe from "../../assets/kobe.jpg";
import Jokic from "../../assets/joker.jpg";
import Giannis from "../../assets/giannis.avif";
import KD from "../../assets/KD.webp";
import AI from "../../assets/AI.jpg";
import Admiral from "../../assets/admiral.webp";
import { useState, useEffect } from "react";

type Candidate = {
  key: number;
  name: string;
  src: string;
};

const candidates: Candidate[] = [
  {
    key: 0,
    name: "Michael Jordan",
    src: MJ,
  },
  {
    key: 1,
    name: "LeBron James",
    src: LBJ,
  },
  {
    key: 2,
    name: "Kareem Abdul Jabbar",
    src: KAJ,
  },
  {
    key: 3,
    name: "Larry Bird",
    src: Larry,
  },
  {
    key: 4,
    name: "Hakeem Olajuwon",
    src: Hakeem,
  },
  {
    key: 5,
    name: "Shaquille O'neal",
    src: Shaq,
  },
  {
    key: 6,
    name: "Tim Duncan",
    src: Timmy,
  },
  {
    key: 7,
    name: "Kevin Durant",
    src: KD,
  },
  {
    key: 8,
    name: "Wilt Chamberlain",
    src: Wilt,
  },
  {
    key: 9,
    name: "Nikola Jokic",
    src: Jokic,
  },
  {
    key: 10,
    name: "Giannis Antetokounmpo",
    src: Giannis,
  },
  {
    key: 11,
    name: "Magic Johnson",
    src: Magic,
  },
  {
    key: 12,
    name: "Dirk Nowitzki",
    src: Dirk,
  },
  {
    key: 13,
    name: "Kobe Bryant",
    src: Kobe,
  },
  {
    key: 14,
    name: "David Robinson",
    src: Admiral,
  },
  {
    key: 15,
    name: "Allen Iverson",
    src: AI,
  },
];
export default function Home() {
  const [candis, setCandis] = useState<Candidate[]>(candidates);
  const [winCandis, setWinCandis] = useState<Candidate[]>([]);
  const [round, setRound] = useState(1);
  const [game, setGame] = useState(candis.length);
  useEffect(() => {
    setCandis(
      candidates
        .map((c) => {
          return { key: c.key, name: c.name, src: c.src, order: Math.random() };
        })
        .sort((l, r) => {
          return l.order - r.order;
        })
    );
  }, []);

  const handleClick = (c: Candidate) => {
    if (game === 1) {
      return;
    }
    setCandis((prev) => {
      const temp = prev.splice(0, 2);
      return prev.filter((c) => !temp.includes(c));
    });
    setRound((prev) => prev + 1);
    setWinCandis((prev) => [...prev, c]);
    console.log(winCandis);
    /* setCandis((prev) => {
      const temp1 = prev.splice(0, 2);
      return prev.filter((c) => !temp1.includes(c));
    });
    setRound((prev) => prev + 1);
    setWinCandis((prev) => [...prev, c]);
    console.log(candis);
    console.log(winCandis); */
  };

  useEffect(() => {
    if (game === 1) {
      return;
    }
    if (candis.length === 0) {
      setRound(1);
      setWinCandis([]);
      setCandis(winCandis);
      setGame((prev) => prev / 2);
    }
  }, [round]);

  return (
    <div className="text-center flex flex-col  ">
      <h1 className={`${game === 1 ? "hidden" : "block"} font-bold text-2xl`}>
        <span className="block text-sm font-light">{game}</span>
        Round {round}
      </h1>
      <div className="gameContainer">
        {candis.map((c, i) => {
          if (i > 1) return;

          return (
            <>
              <div
                onClick={() => handleClick(c)}
                className="imgcontainer text-center gap-8"
              >
                <h1
                  className={`${
                    game === 1 ? "flex" : "hidden"
                  } text-3xl font-black mx-auto`}
                >
                  Certified GOAT
                  <p>&#128016;</p>
                </h1>
                <img className="imgBox " src={c.src} alt="" />
                {c.name}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
