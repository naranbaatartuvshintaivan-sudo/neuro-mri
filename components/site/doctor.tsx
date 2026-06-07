import Image from "next/image";
import { BadgeCheck, Quote } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";

const CREDENTIALS = [
  "Анагаах ухааны магистр",
  "Ахлах зэргийн эмч",
  "MRI шинжилгээний мэргэжилтэн",
];

export function Doctor() {
  return (
    <section
      id="doctor"
      className="relative mx-auto max-w-[78rem] scroll-mt-24 px-5 py-28 sm:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* portrait */}
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="glow-blue absolute -inset-6 -z-10 opacity-40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-line-2 ring-1 ring-inset ring-white/5">
              {/* СВАП: эмчийн хөрөг — neuro-doc.jpg (баруун талд эмч) */}
              <Image
                src="/neuro-doc.jpg"
                alt="Эмч Бямбадорж Нямжаргал"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: "82% center" }}
              />
              {/* fold the baked-in marketing text into shadow */}
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

              <span className="crop-mark left-3 top-3 border-b-0 border-r-0" />
              <span className="crop-mark bottom-3 right-3 border-l-0 border-t-0" />

              {/* nameplate */}
              <div className="absolute bottom-5 left-5 rounded-xl border border-line-2 bg-ink/70 px-4 py-3 backdrop-blur-md">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cyan">
                  Тэргүүлэх эмч
                </p>
                <p className="mt-1 text-base font-bold text-fg">
                  Б. Нямжаргал
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* quote + credentials */}
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel index="03">Манай эмч</SectionLabel>
            <Quote
              className="mt-7 h-10 w-10 text-blue/50"
              strokeWidth={1.5}
              aria-hidden
            />
            <blockquote className="mt-4 text-balance text-2xl font-semibold leading-snug tracking-tight text-fg sm:text-[2rem]">
              «Эрт илрүүлсэн өвчин бол хагас эдгэрсэнтэй адил. Бид өвчтөн бүрийн
              зурган дээр{" "}
              <span className="text-gradient">адил нягт, хариуцлагатай</span>{" "}
              ханддаг.»
            </blockquote>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-9 flex items-center gap-3">
              <h3 className="text-xl font-bold tracking-tight text-fg">
                Бямбадорж Нямжаргал
              </h3>
              <BadgeCheck className="h-5 w-5 text-cyan" />
            </div>
            <p className="mt-1 text-sm text-muted">
              Анагаах ухааны магистр · Ахлах зэргийн эмч
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {CREDENTIALS.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line-2 bg-white/[0.02] px-4 py-1.5 text-xs text-muted"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
