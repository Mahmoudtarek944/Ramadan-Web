export function savePage(page) {
  localStorage.setItem("pageNumber", JSON.stringify(page));
}

export function getSavedPage() {
  const saved = localStorage.getItem("pageNumber");
  return saved ? JSON.parse(saved) : 1;
}

export function saveAzkerCounter(c) {
  localStorage.setItem("counter", JSON.stringify(c));
}

export function getSavedCounter() {
  const saved = localStorage.getItem("counter");
  return saved ? JSON.parse(saved) : [0, 0, 0];
}
