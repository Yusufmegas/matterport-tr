"use client";

import { Button } from "@/components/ui/Button";

/**
 * "Destek Talebi Oluştur" — teklif formuna kaydırır ve formdaki proje
 * türünü "Mevcut Müşteri Desteği" olarak seçer. Form uncontrolled
 * olduğundan (FormData tabanlı) select değeri doğrudan DOM'a yazılır;
 * API ve form altyapısı değişmez.
 */
export function SupportRequestButton() {
  const handleClick = () => {
    const select = document.getElementById(
      "quote-project-type",
    ) as HTMLSelectElement | null;
    if (select) {
      select.value = "Mevcut Müşteri Desteği";
    }
    document
      .getElementById("iletisim-formu")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Button type="button" variant="outline" size="lg" onClick={handleClick}>
      Destek Talebi Oluştur
    </Button>
  );
}
