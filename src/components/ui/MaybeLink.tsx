import Link from "next/link";
import { isBlockedRoute } from "@/config/feature-flags";

type MaybeLinkProps = {
  href: string;
  /** Link değilken klavye focus'u alsın mı (ör. önizleme tetikleyen satırlar) */
  focusable?: boolean;
  /** data-active benzeri durum attribute'u */
  dataActive?: boolean;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, "children">;

/**
 * GEÇİCİ erişim kapatması için bağlantı sarmalayıcı (feature-flags):
 * hedef route kapalıysa aynı görünümde, tıklanamaz bir öğe render eder;
 * açıksa normal Next Link'tir. Bayrak true yapıldığında tüm kullanım
 * yerleri otomatik olarak tekrar linke döner.
 */
export function MaybeLink({
  href,
  focusable = false,
  dataActive,
  children,
  ...rest
}: MaybeLinkProps) {
  const dataProps =
    dataActive === undefined ? {} : { "data-active": dataActive };

  if (!isBlockedRoute(href)) {
    return (
      <Link href={href} {...dataProps} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <div {...dataProps} {...rest} {...(focusable ? { tabIndex: 0 } : {})}>
      {children}
    </div>
  );
}
