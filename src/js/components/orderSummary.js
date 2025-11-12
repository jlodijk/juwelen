import { getOrderItems, getOrderTotal, clearOrder } from "../store/orderStore.js";

const formatPrice = (value) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);

export function renderOrderSummary() {
  const container = document.getElementById("order-summary");
  if (!container) return;

  const items = getOrderItems();
  const list =
    items.length > 0
      ? items
          .map(
            (item) => `
          <li class="flex items-center justify-between text-sm">
            <div>
              <p class="font-medium">${item.name}</p>
              <p class="text-xs text-neutral-600">x ${item.quantity}</p>
            </div>
            <p>${formatPrice(item.price * item.quantity)}</p>
          </li>
        `
          )
          .join("")
      : `<li class="text-sm text-neutral-500">Nog geen items in je bestelling.</li>`;

  container.innerHTML = `
    <div class="bg-white border rounded-2xl p-6 shadow-sm">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold">Bestelling</h2>
        <button
          type="button"
          class="text-xs uppercase tracking-[0.3em] text-brand disabled:text-neutral-400"
          data-action="clear-order"
          ${items.length === 0 ? "disabled" : ""}
        >
          Wis
        </button>
      </div>
      <ul class="space-y-3 mb-4">
        ${list}
      </ul>
      <div class="flex items-center justify-between text-sm font-medium">
        <span>Totaal</span>
        <span>${formatPrice(getOrderTotal())}</span>
      </div>
      <button
        type="button"
        class="mt-6 w-full inline-flex justify-center px-4 py-3 rounded-full uppercase tracking-[0.3em] text-xs bg-brand text-[var(--color-secundair)] hover:bg-[var(--color-primair-hover)] transition-colors"
        ${items.length === 0 ? "disabled" : ""}
      >
        Plaats bestelling
      </button>
    </div>
  `;
}
