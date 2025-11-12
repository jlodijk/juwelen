const categories = [
  {
    id: "armbanden",
    label: "Armbanden",
    icon: `
      <svg viewBox="0 0 48 48" class="w-10 h-10">
        <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="2" />
        <circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" stroke-width="2" />
      </svg>
    `,
  },
  {
    id: "kettingen",
    label: "Kettingen",
    icon: `
      <svg viewBox="0 0 48 48" class="w-10 h-10">
        <path
          d="M15 18c0-5 4-9 9-9s9 4 9 9-4 9-9 9"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M15 30c0 5 4 9 9 9s9-4 9-9"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    `,
  },
  {
    id: "ringen",
    label: "Ringen",
    icon: `
      <svg viewBox="0 0 48 48" class="w-10 h-10">
        <ellipse cx="24" cy="18" rx="10" ry="6" fill="none" stroke="currentColor" stroke-width="2" />
        <ellipse cx="24" cy="30" rx="14" ry="7" fill="none" stroke="currentColor" stroke-width="2" />
        <path d="M14 18v12" stroke="currentColor" stroke-width="2" />
        <path d="M34 18v12" stroke="currentColor" stroke-width="2" />
      </svg>
    `,
  },
];

export function categoryNav(activeCategory = "") {
  const items = categories
    .map((cat) => {
      const isActive = activeCategory === cat.id;
      return `
        <a
          href="#/collectie/${cat.id}"
          class="flex flex-col items-center gap-3 px-6 py-4 rounded-2xl border ${
            isActive ? "bg-brand text-[var(--color-secundair)] shadow-lg" : "bg-white/70"
          } hover:bg-white transition"
        >
          <span class="text-[var(--color-secundair)]">${cat.icon}</span>
          <span class="uppercase tracking-[0.3em] text-xs">${cat.label}</span>
        </a>
      `;
    })
    .join("");

  return `
    <nav class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      ${items}
    </nav>
  `;
}

export function getCategoryLabel(category) {
  return categories.find((cat) => cat.id === category)?.label || "Collectie";
}
