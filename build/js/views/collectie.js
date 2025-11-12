import { products } from "../data/products.js";
import { productCard } from "../components/productCard.js";
import { categoryNav, getCategoryLabel } from "../components/categoryNav.js";

export function Collectie(category = "") {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const cards = filteredProducts.map(productCard).join("");
  const emptyState = `
    <div class="col-span-full text-center text-neutral-500 py-10">
      Geen stukken gevonden in deze categorie.
    </div>
  `;

  return `
    <section class="flex flex-col items-center py-12 px-6 gap-10">
      <div class="text-center max-w-3xl">
        <img src="../assets/images/logo.png" alt="Ldezen logo" class="w-20 h-20 mx-auto mb-6" />
        <p class="text-brand text-xs tracking-[0.5em] uppercase mb-2">LDezen Studio</p>
        <h1 class="text-3xl font-semibold mb-4">${getCategoryLabel(category)}</h1>
        <p class="text-neutral-700">
          Materialen met karakter, afgewerkt in warme, goudkleurige accenten. Elk stuk wordt op bestelling gemaakt
          en draagt de signatuur van ons atelier.
        </p>
      </div>

      <div class="w-full max-w-4xl">
        ${categoryNav(category)}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        ${cards || emptyState}
      </div>

      <a href="#/" class="text-brand hover:underline">← Terug naar Home</a>
    </section>
  `;
}
