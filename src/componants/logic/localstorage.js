export function savePage(page) {
  localStorage.setItem("pageNumber", JSON.stringify(page));
}

export function getSavedPage() {
  const saved = localStorage.getItem("pageNumber");
  return saved ? JSON.parse(saved) : 1;
}
