import { useEffect, useState } from "react";
import homeImg from "../../assets/24157.jpg";
import { dailyReadingQuran } from "../../../api/api";
import { getSavedPage, savePage } from "../logic/localstorage";
import { Link, useNavigate } from "react-router-dom";
import { savedDone } from "../logic/alert";
function DailyWard() {
  let [page, setPage] = useState(() => getSavedPage());
  let [daily, setDaily] = useState({});
  useEffect(() => {
    let isMount = true;
    let getDailyReading = async () => {
      let response = await dailyReadingQuran(page);
      if (isMount) {
        setDaily(response.data.verses);
      }
    };
    getDailyReading();
    const card = document.querySelector(".glass-card-reading");
    if (card) card.scrollTop = 0;

    return () => {
      isMount = false;
    };
  }, [page]);

  // console.log(daily);
  const navigate = useNavigate();
  const handleSave = () => {
    savedDone();
    savePage(page);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  if (!daily.length > 0) {
    return <div className="loading">جاري التحميل..</div>;
  }
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
        <div className=" glass-card-reading mt-4">
          <div className="text-center">
            <h3 className="text-white fw-bold ">{page > 0 ? page : 1}</h3>
            {daily.map((obj) => (
              <span
                key={obj.id}
                className="text-white fw-bold amiri-font mx-1"
                style={{ fontSize: "1.8rem", lineHeight: "2.5" }}
              >
                {obj.text_uthmani}
                <span
                  style={{
                    color: "#f7c948",
                    fontSize: "1.2rem",
                    margin: "0 5px",
                  }}
                >
                  ﴿{obj.verse_key.split(":")[1]}﴾
                </span>
              </span>
            ))}
          </div>
          <div className="d-flex justify-content-center gap-4">
            <button
              onClick={() => {
                {
                  page > 1 && setPage(page - 1);
                }
              }}
              className={page > 1 ? "btn-quran" : "d-none"}
            >
              الصفحه السابقه
            </button>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              className="btn-quran"
            >
              الصفحه التاليه
            </button>
            <button onClick={handleSave} className="btn-save ">
              حفظ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyWard;
