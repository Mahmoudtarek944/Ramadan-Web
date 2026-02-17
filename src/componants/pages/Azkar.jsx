import { useEffect, useState } from "react";
import homeImg from "../../assets/ramadan_luxury_background.jpg";
import { dailyAzkar } from "../logic/azkar";
import { getTimeSalah } from "../../../api/api";
function Azkar() {
  let [day, setDay] = useState(1);
  const [counters, setCounters] = useState([0, 0, 0]);

  useEffect(() => {
    let isMounted = true;
    let getDay = async () => {
      let res = await getTimeSalah();
      if (isMounted) {
        setDay(res.data.data.hijri.day);
      }
    };
    getDay();
    return () => {
      isMounted = false;
    };
  }, [day]);

  const handleIncrement = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };
  // console.log(day.date);
  if (day === "undefined" || !day) {
    return <div className="loading">جاري التحميل...</div>;
  }
  const currentDay = parseInt(day) || 1;
  let startIndex = ((currentDay - 1) * 3) % dailyAzkar.length;
  let f = dailyAzkar[startIndex];
  let s = dailyAzkar[(startIndex + 1) % dailyAzkar.length];
  let th = dailyAzkar[(startIndex + 2) % dailyAzkar.length];
  let azkarForOneDay = [f, s, th];
  return (
    <>
      <div
        className="text-center d-flex justify-content-center align-items-center "
        style={{
          backgroundImage: `url(${homeImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="azkar-container d-flex gap-5 justify-content-center p-3 mt-5">
          {azkarForOneDay.map((zikr, index) => (
            <div
              key={zikr.id}
              className={
                counters[index] === zikr.goal
                  ? "zikr-done glass-card-zikr rounded-4 p-4 d-flex flex-column gap-1 align-items-center text-center"
                  : "glass-card-zikr rounded-4 p-4 d-flex flex-column gap-1 align-items-center text-center"
              }
            >
              <p className="zikr-text">{zikr.text}</p>
              <div className="divDecGoal d-flex gap-2 justify-content-center my-2">
                <p className="zikr-desc justify-content-center d-flex align-items-center mb-3">
                  {zikr.description}
                </p>
                <div className="zikr-goal px-3 py-2 ">الهدف: {zikr.goal}</div>
              </div>
              <div>
                <span className="counter">
                  {counters[index] === zikr.goal
                    ? "تم بحمد الله الانتهاء من الذكر"
                    : counters[index]}
                </span>
              </div>
              <button
                className={
                  counters[index] === zikr.goal
                    ? "d-none"
                    : "incrementZekr w-50 py-2 border border-0 mt-2"
                }
                onClick={() => {
                  handleIncrement(index);
                }}
              >
                ضغط
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Azkar;
