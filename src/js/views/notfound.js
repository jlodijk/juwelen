export function NotFound() {
  return `
    <div class="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <img src="../assets/images/logo.png" alt="Ldezen logo" class="w-28 h-28 mb-6 opacity-80" />
      <h1 class="text-4xl font-bold mb-4">Pagina niet gevonden</h1>
      <p class="text-lg text-neutral-600 mb-8">De pagina die je zoekt bestaat niet.</p>
      <a
        href="#/"
        class="inline-flex justify-center px-6 py-3 rounded-full uppercase tracking-[0.2em] text-xs bg-brand text-[var(--color-neutraal)] hover:bg-[var(--color-primair-hover)] transition-colors"
      >
        Terug naar home
      </a>
    </div>
  `;
}
