export function savePage(page) {
  localStorage.setItem("pageNumber", page);
}
export let getSavedPage = localStorage.getItem("pageNumber");
