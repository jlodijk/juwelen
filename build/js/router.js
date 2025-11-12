import { Home } from "./views/home.js";
import { Collectie } from "./views/collectie.js";
import { NotFound } from "./views/notfound.js";

export function router() {
  const hash = location.hash.slice(1);
  const segments = hash.split("/").filter(Boolean);
  const route = segments[0] ? `/${segments[0]}` : "/";
  const category = segments[1] || "";
  const page = document.getElementById("page");

  switch (route) {
    case "/":
      page.innerHTML = Home();
      break;
    case "/collectie":
      page.innerHTML = Collectie(category);
      break;
    default:
      page.innerHTML = NotFound();
  }
}
