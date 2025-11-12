import { products } from "../data/products.js";
import { productCard } from "../components/productCard.js";
import { categoryNav } from "../components/categoryNav.js";

export function Home() {
  const allProducts = products.map(productCard).join("");
  const emptyState = `<p class="text-center text-neutral-500">De collectie wordt binnenkort aangevuld.</p>`;

  return `
    <section class="flex flex-col gap-16 min-h-screen py-16">
      <div class="flex flex-col items-center text-center px-6">
        <img src="./assets/images/logo.png" alt="Ldezen logo" class="w-32 h-32 mb-6" />
        <p class="text-brand text-sm tracking-[0.5em] uppercase mb-4">LDezen Studio</p>
        <h1 class="text-4xl font-semibold mb-4 tracking-tight">Architectuur & Interieur</h1>
        <p class="text-neutral-700 max-w-2xl">
          Eigentijdse ruimtes met een sculpturale signatuur. We ontwerpen interieurs, meubelcollecties en
          objecten die vakmanschap combineren met een warme, gouden gloed.
        </p>
        <a
          href="#/collectie"
          class="mt-8 inline-flex justify-center px-8 py-3 rounded-full uppercase tracking-[0.2em] text-xs bg-brand text-[var(--color-neutraal)] hover:bg-[var(--color-primair-hover)] transition-colors"
        >
          Bekijk de collectie
        </a>
      </div>

      <div class="max-w-4xl mx-auto w-full px-6">
        ${categoryNav()}
      </div>

      <div class="max-w-6xl mx-auto w-full px-6">
        <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
          <h2 class="text-2xl font-semibold">Alle stukken</h2>
          <a href="#/collectie" class="text-sm text-brand hover:underline">
            Filter per categorie →
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${allProducts || emptyState}
        </div>
      </div>
    </section>
  `;
}
