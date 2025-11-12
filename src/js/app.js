import { router } from "./router.js";
import { initOrdering } from "./ordering.js";
import { renderOrderSummary } from "./components/orderSummary.js";

function renderApp() {
  router();
  renderOrderSummary();
}

window.addEventListener("hashchange", renderApp);
window.addEventListener("load", () => {
  initOrdering();
  renderApp();
});
