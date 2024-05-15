import MJ from "../../assets/MJ.gif";
import LBJ from "../../assets/lbj.gif";
import KAJ from "../../assets/kaj.gif";
import Hakeem from "../../assets/hakeem.gif";
import Shaq from "../../assets/shaq.gif";
import Larry from "../../assets/larrybird.gif";
import Timmy from "../../assets/timmy.gif";
import Wilt from "../../assets/wilt.gif";
import Magic from "../../assets/magic.gif";
import Dirk from "../../assets/dirknowitzki.gif";
import Kobe from "../../assets/kobe.gif";
import Jokic from "../../assets/joker.gif";
import Giannis from "../../assets/giannis.gif";
import KD from "../../assets/KD.gif";
import AI from "../../assets/AI.gif";
import Admiral from "../../assets/admiral.gif";
import { useState, useEffect, useContext } from "react";
import { RankingContext } from "../../App";
import { useNavigate } from "react-router-dom";

export type Candidate = {
  key: number;
  name: string;
  src: string;
  score?: number;
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

  const [value, setValue] = useContext(RankingContext);
  const navigation = useNavigate();

  useEffect(() => {
    setCandis(
      candidates
        .map((c) => {
          return {
            key: c.key,
            name: c.name,
            src: c.src,
            score: c.score,
            order: Math.random(),
          };
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

    /* setCandis((prev) => {
      const temp1 = prev.splice(0, 2);
      return prev.filter((c) => !temp1.includes(c));
    });
    setRound((prev) => prev + 1);
    setWinCandis((prev) => [...prev, c]);
     */
  };
  const rank = () => {
    // const temp = candidates.map((e, i) => {
    //   if (e.score != null) {
    //     if (i < candis.length) {
    //       if (e.key === candis[i].key) {
    //         return {
    //           key: e.key,
    //           name: e.name,
    //           src: e.src,
    //           score: e.score++,
    //         };
    //       } else {
    //         return {
    //           key: e.key,
    //           name: e.name,
    //           src: e.src,
    //           score: e.score,
    //         };
    //       }
    //     }
    //   } else {
    //     if (e.key === candis[0].key) {
    //       return {
    //         key: e.key,
    //         name: e.name,
    //         src: e.src,
    //         score: 1,
    //       };
    //     }
    //     return {
    //       key: e.key,
    //       name: e.name,
    //       src: e.src,
    //       score: 0,
    //     };
    //   }
    // });

    if (value != undefined && value.length > 0) {
      setValue((prev) => {
        const temp = prev.map((e) => {
          if (candis[0].key === e.key) {
            const temp = e.score + 1;
            return { key: e.key, name: e.name, src: e.src, score: temp };
          } else
            return { key: e.key, name: e.name, src: e.src, score: e.score };
        });
        return temp;
      });
    } else {
      const temp = candidates.map((e) => {
        if (candis[0].key === e.key) {
          return { key: e.key, name: e.name, src: e.src, score: 1 };
        } else {
          return { key: e.key, name: e.name, src: e.src, score: 0 };
        }
      });
      setValue(temp);
    }

    navigation("/ranking");
  };

  useEffect(() => {
    if (game === 1) {
      rank();
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
