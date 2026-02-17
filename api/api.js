import axios from "axios";
const apiTimeHalah =
  "https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5";
export async function getTimeSalah() {
  let res = await axios.get(apiTimeHalah);
  // console.log(res.data);
  return res;
}
