"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ctaItem, navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close with Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-40 lg:hidden",
        "transition-[visibility] duration-300",
        /* Kapalıyken hem görünmez HEM pointer-events-none: tüm viewport'u
           kaplayan bu overlay'in mobil tarayıcılarda dokunuşları
           yutmasını kesin olarak engeller */
        open ? "pointer-events-auto visible" : "pointer-events-none invisible",
      )}
    >
      {/* Backdrop */}
      <button
        type="button"
        tabIndex={-1}
        aria-label="Menüyü kapat"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Panel */}
      <div
        className={cn(
          "absolute inset-x-0 top-16 origin-top border-b border-border-subtle",
          "bg-background/95 pb-8 pt-4 shadow-2xl backdrop-blur-xl",
          "transition-all duration-300",
          open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
        )}
      >
        <Container>
          <nav aria-label="Mobil menü">
            <ul className="flex flex-col">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    tabIndex={open ? 0 : -1}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between border-b border-border-subtle/60 py-4",
                      "text-lg font-medium transition-colors hover:text-accent",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      pathname === item.href ? "text-accent" : "text-foreground",
                    )}
                    style={{ transitionDelay: open ? `${index * 30}ms` : "0ms" }}
                  >
                    {item.label}
                    <ArrowRight
                      className="size-4 text-muted"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            href={ctaItem.href}
            size="lg"
            className="mt-6 w-full"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
          >
            {ctaItem.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </Container>
      </div>
    </div>
  );
}
