import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

const COLUMNS = [
  {
    title: "Оношилгоо",
    links: [
      { label: "Тархины MRI", href: "#services" },
      { label: "Нугасны MRI", href: "#services" },
      { label: "Үе мөчний MRI", href: "#services" },
      { label: "Хэвлийн MRI", href: "#services" },
    ],
  },
  {
    title: "Компани",
    links: [
      { label: "Технологи", href: "#technology" },
      { label: "Манай эмч", href: "#doctor" },
      { label: "Цаг захиалах", href: "#booking" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface-2">
      {/* oversized watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 w-full -translate-x-1/2 select-none text-center text-[22vw] font-extrabold leading-none tracking-tighter text-text/[0.04]"
      >
        NEURO SCAN
      </div>

      <div className="relative mx-auto max-w-[78rem] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-line-2">
                {/* СВАП: лого — neuro-scan-logo.jpg */}
                <Image
                  src="/neuro-scan-logo.jpg"
                  alt="Neuro Scan MRI"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-extrabold tracking-tight text-text">
                  Neuro Scan
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.42em] text-primary">
                  MRI Clinic
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-2">
              AI-аар сайжруулсан MRI оношилгоо. Эрт илрүүлэлт, өндөр нарийвчлал,
              хурдан хариу — Улаанбаатарт.
            </p>
          </div>

          {/* link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-3">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-text-2 transition-colors hover:text-text"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contact */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-3">
              Холбоо барих
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="tel:+97685038105"
                  className="flex items-center gap-2 text-text-2 transition-colors hover:text-text"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +976 8503-8105
                </a>
              </li>
              <li>
                <a
                  href="tel:+97688882328"
                  className="flex items-center gap-2 text-text-2 transition-colors hover:text-text"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +976 8888-2328
                </a>
              </li>
              <li className="flex items-start gap-2 text-text-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Натурын зам дагуу, Urban Tower, 1 давхарт
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 sm:flex-row">
          <p className="font-mono text-xs text-text-3">
            © 2026 Neuro Scan MRI. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-3">
            Улаанбаатар · Монгол
          </p>
        </div>
      </div>
    </footer>
  );
}
