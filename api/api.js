import axios from "axios";
const apiTimeHalah =
  "https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5";

export async function getTimeSalah() {
  let res = await axios.get(apiTimeHalah);
  // console.log(res.data);
  return res;
}
export async function dailyReadingQuran(pageNumber) {
  let res = await axios.get(
    `https://api.quran.com/api/v4/verses/by_page/${pageNumber}?language=ar&words=false&per_page=300&fields=text_uthmani`,
  );
  // console.log(res.data);
  return res;
}
