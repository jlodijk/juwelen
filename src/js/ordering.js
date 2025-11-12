import { addToOrder, clearOrder, getOrderTotal } from "./store/orderStore.js";
import { renderOrderSummary } from "./components/orderSummary.js";

const formatPrice = (value) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);

function showOrderToast(total) {
  const container = document.getElementById("order-toast");
  if (!container) return;

  if (total <= 0) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <div
      class="bg-[var(--color-secundair)] text-green-300 px-6 py-3 rounded-full shadow-lg text-sm uppercase tracking-[0.2em] font-semibold transition-opacity duration-200"
    >
      Uw heeft voor ${formatPrice(total)} besteld
    </div>
  `;
}

function handleClick(event) {
  const addButton = event.target.closest("[data-action='add-to-order']");
  if (addButton) {
    addToOrder(addButton.dataset.productId);
    renderOrderSummary();
    showOrderToast(getOrderTotal());
    return;
  }

  const clearButton = event.target.closest("[data-action='clear-order']");
  if (clearButton && !clearButton.disabled) {
    clearOrder();
    renderOrderSummary();
    showOrderToast(0);
  }
}

export function initOrdering() {
  document.addEventListener("click", handleClick);
}
