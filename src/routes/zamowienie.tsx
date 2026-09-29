import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CircleCheck, Clock3, Gift, MapPin, Package, Palette, Truck, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { readFigurineConfig } from "@/lib/figurine-config";
import podgladFigurki from "@/assets/podglad-figurki-para-pies.jpg.asset.json";

export const Route = createFileRoute("/zamowienie")({
  head: () => ({
    meta: [
      { title: "Dane i zamówienie | prezent3d.com" },
      { name: "description", content: "Uzupełnij dane dostawy i sprawdź podsumowanie swojej personalizowanej figurki 3D." },
      { property: "og:title", content: "Dane i zamówienie | prezent3d.com" },
      { property: "og:description", content: "Uzupełnij dane dostawy i sprawdź podsumowanie swojej personalizowanej figurki 3D." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrderPage,
});

const sizes = { "15": { label: "15 cm", price: 0 }, "20": { label: "20 cm", price: 15 }, "25": { label: "25 cm", price: 30 } } as const;
const finishes = { single: { label: "Figurka jednokolorowa", price: 0 }, painted: { label: "Figurka ręcznie malowana", price: 100 } } as const;
const bases = { standard: { label: "Standardowa", price: 0 }, personalized: { label: "Personalizowana", price: 40 }, none: { label: "Bez podstawki", price: 0 } } as const;
const packages = { standard: { label: "Standardowe", price: 0 }, gift: { label: "Pudełko prezentowe", price: 40 } } as const;

type Delivery = "courier" | "parcel";

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <label className="block text-xs font-semibold">
      {label}{required && <span className="text-primary"> *</span>}
      <span className="mt-1.5 block">{children}</span>
      {error && <span className="mt-1 block text-[10px] text-destructive">{error}</span>}
    </label>
  );
}

function OrderPage() {
  const config = useMemo(() => typeof window === "undefined" ? null : readFigurineConfig(), []);
  const [delivery, setDelivery] = useState<Delivery>("courier");
  const [accepted, setAccepted] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!config) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <section className="section-shell py-20 text-center">
          <h1 className="text-2xl font-extrabold">Najpierw skonfiguruj figurkę</h1>
          <p className="mt-3 text-sm text-muted-foreground">Wybierz wszystkie opcje i dodaj zdjęcia, aby przejść do zamówienia.</p>
          <Button asChild className="mt-6"><Link to="/oferta">Przejdź do konfiguratora <ArrowRight /></Link></Button>
        </section>
        <SiteFooter />
      </main>
    );
  }

  const size = config.size ? sizes[config.size as keyof typeof sizes] : undefined;
  const finish = config.finish ? finishes[config.finish as keyof typeof finishes] : undefined;
  const base = config.base ? bases[config.base as keyof typeof bases] : undefined;
  const pack = config.pack ? packages[config.pack as keyof typeof packages] : undefined;
  const subjectCount = (config.subjects.includes("person") ? config.personCount : 0) + (config.subjects.includes("animal") ? config.animalCount : 0) || 1;
  const subjectPrice = (config.subjects.includes("person") ? 180 + 80 * (config.personCount - 1) : 0) + (config.subjects.includes("animal") ? 80 * config.animalCount : 0) + (config.subjects.includes("custom") ? 40 : 0);
  const figurinePrice = subjectPrice + (size?.price ?? 0) * subjectCount + (finish?.price ?? 0) + (base?.price ?? 0) + (pack?.price ?? 0);
  const deliveryPrice = figurinePrice >= 299 ? 0 : delivery === "courier" ? 18 : 14;
  const subjectLabel = [
    config.subjects.includes("person") ? `${config.personCount} ${config.personCount === 1 ? "osoba" : "osoby"}` : "",
    config.subjects.includes("animal") ? `${config.animalCount} ${config.animalCount === 1 ? "zwierzę" : "zwierzęta"}` : "",
    config.subjects.includes("custom") ? (config.customText || "własny element") : "",
  ].filter(Boolean).join(", ");
  const colorLabel = config.color === "white" ? "biały" : config.color === "beige" ? "beżowy" : config.colorText;
  const finishLabel = config.finish === "single" ? `${finish?.label} (${colorLabel})` : finish?.label;

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const required = ["firstName", "lastName", "email", "phone", "street", "postalCode", "city"];
    const nextErrors: Record<string, string> = {};
    required.forEach((name) => { if (!String(form.get(name) ?? "").trim()) nextErrors[name] = "To pole jest wymagane."; });
    if (!accepted) nextErrors.accepted = "Zaznacz wymaganą zgodę.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="section-shell py-7 lg:py-9">
        <p className="text-xs font-extrabold uppercase tracking-wide text-primary">Zamówienie</p>
        <h1 className="mt-2 text-[2rem] font-extrabold leading-tight lg:text-[2.7rem]">Dane i zamówienie</h1>
        <p className="mt-3 text-sm text-muted-foreground">Uzupełnij dane, wybierz sposób dostawy i sprawdź swoje zamówienie.</p>

        <div className="mt-5 grid grid-cols-2 items-center gap-2 border-b border-border pb-3 sm:grid-cols-3">
          {["Konfiguracja", "Dane i dostawa", "Płatność"].map((label, index) => (
            <div key={label} className="flex items-center gap-2">
              <span className={`grid size-8 shrink-0 place-items-center rounded-full border text-[11px] font-bold ${index < 2 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>{index === 0 ? <Check className="size-4" /> : index + 1}</span>
              <span className={`text-[11px] font-semibold ${index < 2 ? "text-primary" : "text-muted-foreground"}`}>{label}</span>
              {index < 2 && <span className="h-px flex-1 bg-border" />}
            </div>
          ))}
        </div>

        <form onSubmit={submit} className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(340px,0.85fr)]">
          <div className="space-y-4">
            <section className="rounded-md border border-border bg-card p-5">
              <h2 className="flex items-center gap-2 text-base font-extrabold"><UsersRound className="size-5 text-primary" /> Dane kontaktowe</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="Imię" required error={errors.firstName}><Input name="firstName" aria-invalid={Boolean(errors.firstName)} /></Field>
                <Field label="Nazwisko" required error={errors.lastName}><Input name="lastName" aria-invalid={Boolean(errors.lastName)} /></Field>
                <Field label="Adres e-mail" required error={errors.email}><Input name="email" type="email" aria-invalid={Boolean(errors.email)} /></Field>
                <Field label="Numer telefonu" required error={errors.phone}><Input name="phone" type="tel" aria-invalid={Boolean(errors.phone)} /></Field>
              </div>
            </section>

            <section className="rounded-md border border-border bg-card p-5">
              <h2 className="flex items-center gap-2 text-base font-extrabold"><Truck className="size-5 text-primary" /> Dostawa</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(["courier", "parcel"] as const).map((method) => (
                  <label key={method} className={`flex cursor-pointer items-center gap-3 rounded-md border p-4 text-xs ${delivery === method ? "border-primary bg-brand-soft" : "border-border"}`}>
                    <input type="radio" name="delivery" value={method} checked={delivery === method} onChange={() => setDelivery(method)} className="accent-primary" />
                    <span className="flex-1 font-bold">{method === "courier" ? "Kurier" : "Paczkomat"}</span>
                    <strong>{figurinePrice >= 299 ? "0 zł" : method === "courier" ? "18 zł" : "14 zł"}</strong>
                  </label>
                ))}
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2"><Field label="Ulica i numer" required error={errors.street}><Input name="street" aria-invalid={Boolean(errors.street)} /></Field></div>
                <Field label="Kod pocztowy" required error={errors.postalCode}><Input name="postalCode" placeholder="00-000" aria-invalid={Boolean(errors.postalCode)} /></Field>
                <Field label="Miejscowość" required error={errors.city}><Input name="city" aria-invalid={Boolean(errors.city)} /></Field>
              </div>
            </section>

            <section className="rounded-md border border-border bg-card p-5">
              <h2 className="flex items-center gap-2 text-base font-extrabold"><MapPin className="size-5 text-primary" /> Dodatkowe informacje</h2>
              <div className="mt-4"><Field label="Uwagi do zamówienia"><Textarea name="notes" rows={4} placeholder="Napisz, jeśli chcesz przekazać nam dodatkowe informacje." /></Field></div>
            </section>

            <section className="rounded-md border border-border bg-card p-5 text-xs leading-relaxed">
              <label className="flex cursor-pointer items-start gap-3"><Checkbox checked={accepted} onCheckedChange={(value) => setAccepted(value === true)} /><span>Akceptuję Regulamin i Politykę prywatności oraz wyrażam zgodę na realizację personalizowanego zamówienia. <strong className="text-primary">*</strong></span></label>
              {errors.accepted && <p className="ml-7 mt-1 text-[10px] text-destructive">{errors.accepted}</p>}
              <label className="mt-4 flex cursor-pointer items-start gap-3"><Checkbox checked={newsletter} onCheckedChange={(value) => setNewsletter(value === true)} /><span>Chcę otrzymywać informacje o nowościach i promocjach.</span></label>
            </section>
          </div>

          <aside className="rounded-md border border-border bg-card p-5 lg:sticky lg:top-[84px]">
            <div className="aspect-[1.1157] overflow-hidden rounded-md border border-border bg-muted"><img src={podgladFigurki.url} alt="Podgląd figurki 3D" className="size-full object-cover" /></div>
            <div className="mt-4 flex items-center justify-between"><h2 className="text-sm font-extrabold">Twoje zamówienie</h2><Button variant="ghost" size="sm" asChild className="h-7 px-2 text-[11px] text-primary"><Link to="/oferta"><ArrowLeft /> Edytuj</Link></Button></div>
            <div className="mt-3 overflow-hidden rounded-md border border-border text-[11px]">
              <OrderRow icon={UsersRound} label="Osoby / zwierzęta" value={subjectLabel} />
              <OrderRow icon={Clock3} label="Rozmiar" value={size?.label ?? "—"} />
              <OrderRow icon={Palette} label="Wykończenie" value={finishLabel ?? "—"} />
              <OrderRow icon={CircleCheck} label="Podstawka" value={config.base === "personalized" && config.graverText ? `${base?.label} — ${config.graverText}` : base?.label ?? "—"} />
              <OrderRow icon={Gift} label="Dodatki" value={pack?.label ?? "—"} />
              <OrderRow icon={Package} label="Zdjęcia" value={`${config.photoCount} ${config.photoCount === 1 ? "plik" : "pliki"}`} />
            </div>
            <div className="mt-4 space-y-2 border-b border-border pb-4 text-xs"><p className="flex justify-between"><span className="text-muted-foreground">Figurka</span><strong>{figurinePrice} zł</strong></p><p className="flex justify-between"><span className="text-muted-foreground">Dostawa</span><strong>{deliveryPrice === 0 ? "Darmowa" : `${deliveryPrice} zł`}</strong></p></div>
            <div className="flex items-end justify-between py-4"><div><strong className="text-sm">Łączna cena</strong><p className="mt-1 text-[10px] text-muted-foreground">Cena może ulec zmianie po weryfikacji zdjęć.</p></div><strong className="text-[2rem] font-extrabold text-primary">{figurinePrice + deliveryPrice} zł</strong></div>
            {submitted ? <div className="rounded-md bg-secondary p-4 text-center text-xs font-bold text-primary">Dane są kompletne. Płatność zostanie dodana w kolejnym etapie.</div> : <Button type="submit" className="h-12 w-full text-sm">Przejdź do płatności <ArrowRight /></Button>}
          </aside>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}

function OrderRow({ icon: Icon, label, value }: { icon: typeof UsersRound; label: string; value: string }) {
  return <div className="flex min-h-11 items-center gap-2 border-b border-border/70 px-3 last:border-0"><Icon className="size-3.5 shrink-0 text-muted-foreground" /><span className="w-28 shrink-0 text-muted-foreground">{label}</span><strong className="min-w-0 flex-1 text-right leading-snug">{value}</strong></div>;
}