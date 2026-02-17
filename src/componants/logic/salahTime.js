const getMinutes = (timeStr) => {
  const [hours, minutes] = timeStr.split(":").map(Number); // return array [hours , min] , must conver tot number
  return hours * 60 + minutes;
};

export const getNextPrayer = (timings) => {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const prayerNames = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

  for (let prayer of prayerNames) {
    if (getMinutes(timings[prayer]) > currentMinutes) {
      return prayer;
    }
  }
  return "Fajr";
};
