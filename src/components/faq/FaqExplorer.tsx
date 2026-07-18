"use client";

import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import { faqCategories } from "@/data/faq";
import { cn } from "@/lib/utils";

/** Türkçe uyumlu, aksan/büyük-küçük duyarsız normalize. */
function normalize(text: string): string {
  return text.toLocaleLowerCase("tr-TR");
}

/**
 * /sss — kategori navigasyonu + client-side metin arama + accordion.
 * Yalnızca bu bölüm client'tır; sayfanın kalanı server'da kalır.
 * Accordion butonları aria-expanded / aria-controls taşır, tamamen
 * klavye erişilebilirdir.
 */
export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const needle = normalize(query.trim());
    return faqCategories
      .filter(
        (category) => activeCategory === null || category.id === activeCategory,
      )
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            needle === "" ||
            normalize(item.question).includes(needle) ||
            normalize(item.answer).includes(needle),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [query, activeCategory]);

  const totalVisible = filtered.reduce(
    (sum, category) => sum + category.items.length,
    0,
  );

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Sol: arama + kategori navigasyonu */}
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <label htmlFor="faq-search" className="sr-only">
            Sorularda ara
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
            />
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Sorularda arayın…"
              className={cn(
                "h-12 w-full rounded-lg border border-border-subtle bg-surface pl-10 pr-3.5 text-sm text-foreground",
                "placeholder:text-muted/85 transition-colors duration-150",
                "focus:border-accent/60 focus:outline-2 focus:outline-offset-1 focus:outline-accent/40",
              )}
            />
          </div>

          <nav aria-label="Soru kategorileri" className="mt-6">
            <ul className="space-y-1">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveCategory(null)}
                  aria-pressed={activeCategory === null}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    activeCategory === null
                      ? "bg-surface-2 text-accent"
                      : "text-secondary hover:bg-surface-2/60 hover:text-foreground",
                  )}
                >
                  Tüm Sorular
                </button>
              </li>
              {faqCategories.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === category.id ? null : category.id,
                      )
                    }
                    aria-pressed={activeCategory === category.id}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      activeCategory === category.id
                        ? "bg-surface-2 text-accent"
                        : "text-secondary hover:bg-surface-2/60 hover:text-foreground",
                    )}
                  >
                    {category.title}
                    <span className="text-xs tabular-nums text-muted">
                      {category.items.length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Sağ: kategori grupları + accordion */}
      <div className="lg:col-span-8">
        {totalVisible === 0 ? (
          <p className="rounded-lg border border-border-subtle bg-surface px-5 py-6 text-sm text-secondary">
            Aramanızla eşleşen soru bulunamadı. Farklı bir ifade deneyin veya
            ekibimizle iletişime geçin.
          </p>
        ) : (
          filtered.map((category) => (
            <section
              key={category.id}
              aria-labelledby={`faq-cat-${category.id}`}
              className="mb-10 last:mb-0"
            >
              <h2
                id={`faq-cat-${category.id}`}
                className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-accent"
              >
                <span aria-hidden="true" className="h-px w-6 bg-accent/70" />
                {category.title.toLocaleUpperCase("tr-TR")}
              </h2>

              <div className="mt-3">
                {category.items.map((item, index) => {
                  const itemId = `${category.id}-${index}`;
                  const isOpen = openId === itemId;
                  return (
                    <div
                      key={item.question}
                      className="border-b border-border-subtle"
                    >
                      <h3>
                        <button
                          type="button"
                          id={`faq-button-${itemId}`}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${itemId}`}
                          onClick={() => setOpenId(isOpen ? null : itemId)}
                          className={cn(
                            "flex min-h-[44px] w-full items-center justify-between gap-4 py-4 text-left",
                            "text-sm font-semibold tracking-tight transition-colors sm:text-base",
                            "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent",
                            isOpen
                              ? "text-accent"
                              : "text-foreground hover:text-accent",
                          )}
                        >
                          {item.question}
                          <Plus
                            aria-hidden="true"
                            className={cn(
                              "size-4 shrink-0 text-muted transition-transform duration-200",
                              isOpen && "rotate-45 text-accent",
                            )}
                          />
                        </button>
                      </h3>
                      <div
                        id={`faq-panel-${itemId}`}
                        role="region"
                        aria-labelledby={`faq-button-${itemId}`}
                        hidden={!isOpen}
                      >
                        <p className="max-w-2xl pb-5 text-sm leading-relaxed text-secondary">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
