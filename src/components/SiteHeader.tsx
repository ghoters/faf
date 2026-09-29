import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.png.asset.json";

const navLinkHover = "transition-colors duration-200 hover:text-primary/70 focus-visible:text-primary/70 focus-visible:outline-none";

export function SiteHeader({ active = "" }: { active?: "home" | "offer" | "" }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card">
      <div className="section-shell grid h-[68px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5">
        <Link to="/" className="flex shrink-0 items-center" aria-label="prezent3d.com — strona główna">
          <img src={logoAsset.url} alt="prezent3d.com" className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center justify-center gap-6 text-[12px] font-semibold text-foreground lg:flex" aria-label="Główna nawigacja">
          <Link to="/" className={active === "home" ? "border-b-2 border-primary py-6 text-primary" : navLinkHover}>Strona główna</Link>
          <Link to="/oferta" className={active === "offer" ? "border-b-2 border-primary py-6 text-primary" : navLinkHover}>Oferta⌄</Link>
          <Link to="/" hash="realizacje" className={navLinkHover}>Galeria</Link>
          <Link to="/" hash="proces" className={navLinkHover}>Jak to działa?</Link>
          <Link to="/oferta" hash="podsumowanie" className={navLinkHover}>Cennik</Link>
          <Link to="/" className={navLinkHover}>FAQ</Link>
          <Link to="/" hash="kontakt" className={navLinkHover}>Kontakt</Link>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Search className="size-4" aria-hidden="true" />
          <UserRound className="size-4" aria-hidden="true" />
          <ShoppingCart className="size-4" aria-hidden="true" />
          <Button variant="hero" size="default" asChild><Link to="/oferta">Stwórz swoją figurkę <ArrowRight /></Link></Button>
        </div>
        <Menu className="size-6 lg:hidden" aria-label="Otwórz menu" />
      </div>
    </header>
  );
}