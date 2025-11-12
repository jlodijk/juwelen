const formatPrice = (value) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);

const formatCategory = (value = "") =>
  value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

export function productCard(p) {
  const categoryLabel = p.category ? formatCategory(p.category) : "";
  const showImage = p.showImage !== false;
  const media = showImage
    ? `
      <img
        src="${p.img}"
        alt="${p.name}"
        class="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-500"
      />
    `
    : `
      <div class="w-full aspect-square flex items-center justify-center bg-brand/10 text-brand text-xs uppercase tracking-[0.4em]">
        ${categoryLabel}
      </div>
    `;

  return `
    <article class="group border rounded-2xl overflow-hidden shadow-sm bg-white">
      <div class="overflow-hidden">
        ${media}
      </div>
      <div class="p-4 text-center">
        <p class="text-brand text-xs uppercase tracking-[0.2em] mb-2">${categoryLabel}</p>
        <h3 class="font-medium">${p.name}</h3>
        <p class="text-sm text-neutral-700 mt-1">${formatPrice(p.price)}</p>
        <button
          type="button"
          class="mt-4 inline-flex items-center gap-2 px-4 py-2 border rounded-full text-xs uppercase tracking-[0.3em] hover:bg-brand hover:text-[var(--color-secundair)] transition-colors"
          data-action="add-to-order"
          data-product-id="${p.id}"
        >
          <span class="text-lg leading-none">+</span>
          <span>Bestel</span>
        </button>
      </div>
    </article>
  `;
}
