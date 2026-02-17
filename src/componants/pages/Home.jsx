import { useEffect, useState } from "react";
import homeImg from "../../assets/75288.jpg";
import { getTimeSalah } from "../../../api/api";
import { getNextPrayer } from "../logic/salahTime";
import { Toast } from "../logic/alert";
function Home() {
  let [time, setTime] = useState({});
  useEffect(() => {
    let isMount = true;
    let getTimer = async () => {
      let response = await getTimeSalah();
      if (isMount) {
        setTime(response.data);
      }
    };
    getTimer();

    Toast;

    return () => {
      isMount = false;
    };
  }, []);

  if (!time || !time.data) {
    return <div className="loading">جاري التحميل...</div>;
  }
  const timings = time.data.timings;
  const nextPrayer = getNextPrayer(timings);
  const day = time.data.date.hijri.day;
  const month = time.data.date.hijri.month.ar;
  const year = time.data.date.hijri.year;
  const weekday = time.data.date.hijri.weekday.ar;

  return (
    <>
      <div
        className="text-center d-flex justify-content-center align-items-center flex-column"
        style={{
          backgroundImage: `url(${homeImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <header>
          <h3 className="headerText fw-bolder mt-5">رمضان كريم</h3>
        </header>
        <div className="glass-card p-3 ">
          <h4 className="text-gold fw-bold mb-1">
            {weekday} {day} {month} - {year} هـ
          </h4>
          <div className="table-responsive d-flex justify-content-center">
            <table className="glass-table table table-dark table-borderless mb-0">
              <tbody>
                {/* {console.log(time.data.timings.Fajr)} */}
                <tr
                  className={
                    nextPrayer === "Fajr" ? "next-prayer-highlight" : ""
                  }
                >
                  <td>الفجر</td>
                  <td className="text-end text-gold fw-bold time">
                    {timings.Fajr}
                  </td>
                </tr>
                <tr
                  className={
                    nextPrayer === "Sunrise" ? "next-prayer-highlight" : ""
                  }
                >
                  <td>الشروق</td>
                  <td className="text-end text-gold fw-bold time">
                    {timings.Sunrise}
                  </td>
                </tr>
                <tr
                  className={
                    nextPrayer === "Dhuhr" ? "next-prayer-highlight" : ""
                  }
                >
                  <td>الظهر</td>
                  <td className="text-end text-gold fw-bold time">
                    {timings.Dhuhr}
                  </td>
                </tr>
                <tr
                  className={
                    nextPrayer === "Asr" ? "next-prayer-highlight" : ""
                  }
                >
                  <td>العصر</td>
                  <td className="text-end text-gold fw-bold time">
                    {`${
                      timings.Asr.substring(0, timings.Asr.indexOf(":")) - 12
                    }${timings.Asr.substring(timings.Asr.indexOf(":"))}`}
                  </td>
                </tr>
                <tr
                  className={
                    nextPrayer === "Maghrib" ? "next-prayer-highlight" : ""
                  }
                >
                  <td>المغرب</td>
                  <td className="text-end text-gold fw-bold time">
                    {`${
                      timings.Maghrib.substring(
                        0,
                        timings.Maghrib.indexOf(":"),
                      ) - 12
                    }${timings.Maghrib.substring(
                      timings.Maghrib.indexOf(":"),
                    )}  `}
                  </td>
                </tr>
                <tr
                  className={
                    nextPrayer === "Isha" ? "next-prayer-highlight" : ""
                  }
                >
                  <td>العشاء</td>
                  <td className="text-end text-gold fw-bold time">
                    {`${
                      timings.Isha.substring(0, timings.Isha.indexOf(":")) - 12
                    }${timings.Isha.substring(timings.Isha.indexOf(":"))}  `}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
