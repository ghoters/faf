import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

function Logo() {
  return (
    <a href="#" className="flex w-fit shrink-0 flex-col">
      <img src={logoAsset.url} alt="prezent3d.com" className="h-11 w-auto" />
      <p className="mt-1.5 ml-[67px] text-[13px] leading-none text-muted-foreground">Personalizowane figurki 3D na zamówienie</p>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-card py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-6">
        <Logo />
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[15px] font-semibold text-foreground" aria-label="Nawigacja w stopce">
          <a href="#" className="transition-colors hover:text-primary/70">Strona główna</a>
          <Link to="/oferta" className="transition-colors hover:text-primary/70">Oferta</Link>
          <a href="/#realizacje" className="transition-colors hover:text-primary/70">Galeria</a>
          <a href="/#proces" className="transition-colors hover:text-primary/70">Jak to działa?</a>
          <Link to="/oferta" className="transition-colors hover:text-primary/70">Cennik</Link>
          <a href="#" className="transition-colors hover:text-primary/70">FAQ</a>
        </nav>
        <div className="flex flex-col gap-5 md:justify-self-end">
          <a href="mailto:prezent3d@gmail.com" className="flex w-fit items-center gap-3 text-[16px] font-bold text-foreground transition-colors hover:text-primary">
            <Mail className="size-[22px] text-primary" aria-hidden="true" />
            prezent3d@gmail.com
          </a>
          <p className="text-[16px] font-bold text-foreground">prezent3D.com</p>
        </div>
      </div>
      <div className="section-shell mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
        <span>© 2026 prezent3d.pl. Wszelkie prawa zastrzeżone.</span>
        <span className="flex gap-6">
          <a href="#" className="transition-colors hover:text-foreground">Polityka prywatności</a>
          <a href="#" className="transition-colors hover:text-foreground">Regulamin</a>
        </span>
      </div>
    </footer>
  );
}
