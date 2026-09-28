import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.png.asset.json";

function Logo() {
  return <a href="#" className="flex shrink-0 items-center"><img src={logoAsset.url} alt="prezent3d.com" className="h-9 w-auto" /></a>;
}

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-card py-8">
      <div className="section-shell grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start"><div className="flex flex-col items-start"><Logo/><p className="-mt-[5.75px] ml-9 text-[10px] leading-none text-muted-foreground">Personalizowane figurki 3D na zamówienie</p></div><nav className="flex flex-wrap gap-5 text-[10px] font-semibold"><a href="#">Strona główna</a><Link to="/oferta">Oferta</Link><a href="#realizacje">Galeria</a><a href="#proces">Jak to działa?</a><Link to="/oferta">Cennik</Link><a href="#">FAQ</a></nav><div className="md:justify-self-end"><p className="text-[10px]">Zapisz się do newslettera.</p><div className="mt-2 flex"><input aria-label="Adres e-mail" className="h-9 min-w-0 rounded-l-md border border-border bg-background px-3 text-xs outline-none" placeholder="Twój adres e-mail"/><Button size="icon" className="rounded-l-none"><ArrowRight/></Button></div><div className="mt-4 flex gap-3 text-muted-foreground"><Instagram className="size-4"/><Youtube className="size-4"/></div></div></div>
      <div className="section-shell mt-7 flex flex-wrap justify-between gap-4 border-t border-border pt-5 text-[9px] text-muted-foreground"><span>© 2026 prezent3d.pl. Wszelkie prawa zastrzeżone.</span><span>Polityka prywatności &nbsp;&nbsp;&nbsp; Regulamin</span></div>
    </footer>
  );
}
