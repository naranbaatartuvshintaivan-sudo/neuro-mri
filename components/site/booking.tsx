"use client";

import * as React from "react";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";

const SERVICES = [
  "Тархины MRI",
  "Нугасны MRI",
  "Үе мөчний MRI",
  "Хэвлийн MRI",
];

export function Booking() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: Formspree-р холбоно (одоохондоо зөвхөн frontend).
    console.log("Цаг захиалгын хүсэлт:", data);
    setSubmitted(true);
  }

  return (
    <section
      id="booking"
      className="relative scroll-mt-24 overflow-hidden border-y border-line"
    >
      {/* band atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_80%_0%,rgba(20,102,255,0.08),transparent_60%)]" />
      <div className="atmo-grid absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-[78rem] px-5 py-28 sm:px-8">
        <Reveal>
          <SectionLabel index="04">Холбоо барих</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-balance text-4xl font-extrabold tracking-[-0.02em] text-text sm:text-5xl xl:text-6xl">
            Өнөөдөр цаг{" "}
            <span className="text-gradient">захиалаарай</span>
          </h2>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-text-2">
            Хүсэлтээ үлдээгээрэй — манай зөвлөх танд эргэн холбогдож, тохиромжтой
            цагийг баталгаажуулна.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* form */}
          <Reveal className="lg:col-span-7">
            <div className="relative rounded-[var(--radius)] border border-line-2 bg-surface p-7 shadow-[0_1px_2px_rgba(15,39,66,0.04),0_30px_60px_-44px_rgba(20,102,255,0.3)] sm:p-9">
              {submitted ? (
                <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan/40 bg-cyan-soft text-primary-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-text">
                    Хүсэлт хүлээн авлаа
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-text-2">
                    Баярлалаа! Бид ажлын цагт удахгүй тантай холбогдох болно.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-primary hover:text-primary-600"
                  >
                    Дахин илгээх
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <Label htmlFor="name">Нэр</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Таны нэр"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="phone">Утас</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="9900-0000"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="service">Үйлчилгээ</Label>
                    <Select id="service" name="service" required defaultValue="">
                      <option value="" disabled>
                        Сонгох
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="date">Огноо</Label>
                    <Input id="date" name="date" type="date" required />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" className="w-full">
                      Цаг захиалах
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                    <p className="mt-3 text-center font-mono text-[0.65rem] uppercase tracking-[0.14em] text-text-3">
                      Таны мэдээлэл нууцлагдана
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* contact + map */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-4">
              <div className="grid gap-px overflow-hidden rounded-[var(--radius)] border border-line-2 bg-line-2 sm:grid-cols-1">
                <ContactRow
                  icon={<Phone className="h-5 w-5" />}
                  label="Утас"
                  lines={[
                    { text: "+976 8503-8105", href: "tel:+97685038105" },
                    { text: "+976 8888-2328", href: "tel:+97688882328" },
                  ]}
                />
                <ContactRow
                  icon={<MapPin className="h-5 w-5" />}
                  label="Хаяг"
                  lines={[
                    { text: "Натурын зам дагуу" },
                    { text: "Urban Tower, 1 давхарт" },
                  ]}
                />
                <ContactRow
                  icon={<Clock className="h-5 w-5" />}
                  label="Цагийн хуваарь"
                  lines={[
                    { text: "Даваа–Бямба · 08:00–20:00" },
                    { text: "Яаралтай: 24/7" },
                  ]}
                />
              </div>

              {/* designed map placeholder */}
              <div className="relative flex-1 overflow-hidden rounded-[var(--radius)] border border-line-2 bg-surface-2">
                <div className="atmo-grid absolute inset-0 opacity-90" />
                {/* abstract roads */}
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-line-2" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line-2" />
                <div className="absolute left-[20%] top-0 h-full w-px bg-line" />
                <div className="absolute left-0 top-[30%] h-px w-full bg-line" />
                {/* pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="pulse-ring relative flex h-4 w-4 items-center justify-center rounded-full bg-cyan shadow-[0_0_20px_3px_rgba(6,182,212,0.4)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 rounded-lg border border-line-2 bg-white/85 px-3 py-2 shadow-[0_12px_30px_-22px_rgba(20,102,255,0.5)] backdrop-blur-md">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary-600">
                    Байршил
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-text">
                    Urban Tower · 1 давхар
                  </p>
                </div>
                <div className="min-h-[12rem]" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  lines,
}: {
  icon: React.ReactNode;
  label: string;
  lines: { text: string; href?: string }[];
}) {
  return (
    <div className="flex items-start gap-4 bg-surface p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-2 bg-cyan-soft text-primary">
        {icon}
      </div>
      <div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-text-3">
          {label}
        </p>
        <div className="mt-1 flex flex-col">
          {lines.map((l) =>
            l.href ? (
              <a
                key={l.text}
                href={l.href}
                className="text-[0.95rem] font-medium text-text transition-colors hover:text-primary"
              >
                {l.text}
              </a>
            ) : (
              <span key={l.text} className="text-[0.95rem] text-text">
                {l.text}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
