import Image from "next/image";
import { Brain, Bone, PersonStanding, Stethoscope, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";
import { cn } from "@/lib/utils";

function CardChrome() {
  // shared hover affordances: accent border + crop marks revealed on hover
  return (
    <>
      <span className="pointer-events-none absolute inset-0 rounded-[var(--radius)] border border-transparent transition-colors duration-500 group-hover:border-blue/40" />
      <span className="pointer-events-none absolute left-0 top-0 h-px w-0 rounded-full bg-gradient-to-r from-blue-bright to-cyan transition-all duration-500 group-hover:w-2/3" />
      <span className="crop-mark right-4 top-4 border-b-0 border-l-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-[78rem] scroll-mt-24 px-5 py-28 sm:px-8"
    >
      {/* heading row — asymmetric: title left, note right */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <SectionLabel index="01">Үйлчилгээ</SectionLabel>
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-0.02em] text-fg sm:text-5xl">
            Бидний оношилгоо
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xs text-sm leading-relaxed text-muted md:text-right">
            Бүх төрлийн MRI шинжилгээг өндөр нягтралтай аппаратаар, мэргэжлийн
            эмчийн дүгнэлттэйгээр.
          </p>
        </Reveal>
      </div>

      {/* bento grid */}
      <Stagger className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
        {/* ---- FEATURE: Тархины MRI ---- */}
        <StaggerItem className="md:col-span-2 lg:col-span-8 lg:row-span-2">
          <article className="group relative flex h-full min-h-[20rem] flex-col justify-between overflow-hidden rounded-[var(--radius)] border border-line bg-card/70 p-8 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 lg:min-h-[33rem]">
            {/* designed scan visual */}
            <svg
              aria-hidden
              viewBox="0 0 400 400"
              className="pointer-events-none absolute -right-10 -top-10 h-[26rem] w-[26rem] text-blue opacity-[0.5] transition-opacity duration-500 group-hover:opacity-80"
            >
              <defs>
                <radialGradient id="svc-fade" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#45e6f4" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#2f6dff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#svc-fade)" />
              {[60, 110, 160].map((r) => (
                <circle
                  key={r}
                  cx="200"
                  cy="200"
                  r={r}
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
              ))}
              <circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="#45e6f4"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                strokeDasharray="4 10"
              />
              <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeOpacity="0.25" />
              <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeOpacity="0.25" />
              <path
                d="M40 200 q30 -45 60 0 t60 0 t60 0 t60 0 t60 0"
                fill="none"
                stroke="#45e6f4"
                strokeOpacity="0.8"
                strokeWidth="1.5"
              />
            </svg>

            <div className="relative flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line-2 bg-ink-2/80 text-blue-bright transition-all duration-500 group-hover:border-blue/60 group-hover:text-cyan group-hover:shadow-[0_0_30px_-6px_rgba(69,230,244,0.7)]">
                <Brain className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-sm text-faint">01</span>
            </div>

            <div className="relative mt-10">
              <h3 className="text-3xl font-bold tracking-tight text-fg">
                Тархины MRI
              </h3>
              <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted">
                Тархи, судас, мэдрэлийн нарийвчилсан зураглал — цус харвалт,
                хавдар, склерозыг эрт шатанд илрүүлнэ.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {["≤ 0.5мм зүсэлт", "Контраст бэлэн", "AI дүн шинжилгээ"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-line-2 bg-white/[0.02] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>
            <CardChrome />
          </article>
        </StaggerItem>

        {/* ---- Нугасны MRI (photo) ---- */}
        <StaggerItem className="lg:col-span-4">
          <PhotoCard
            index="02"
            title="Нугасны MRI"
            description="Нугас, дискний гэмтэл, мэдрэлийн товчролыг тодорхойлж, өвдөлтийн жинхэнэ эх үүсвэрийг олно."
            icon={<Bone className="h-6 w-6" strokeWidth={1.5} />}
            // СВАП: нугасны зураг — neuro-posts2.jpg
            image="/neuro-posts2.jpg"
            position="30% center"
          />
        </StaggerItem>

        {/* ---- Үе мөчний MRI (photo) ---- */}
        <StaggerItem className="lg:col-span-4">
          <PhotoCard
            index="03"
            title="Үе мөчний MRI"
            description="Өвдөг, мөр, түнхний шөрмөс, мөгөөрсний гэмтлийг мэс заслын нарийвчлалтай үнэлнэ."
            icon={<PersonStanding className="h-6 w-6" strokeWidth={1.5} />}
            // СВАП: үе мөчний зураг — neuro-posts.jpg
            image="/neuro-posts.jpg"
            position="25% center"
          />
        </StaggerItem>

        {/* ---- Хэвлийн MRI (wide) ---- */}
        <StaggerItem className="md:col-span-2 lg:col-span-12">
          <article className="group relative flex min-h-[11rem] flex-col justify-between gap-6 overflow-hidden rounded-[var(--radius)] border border-line bg-card/70 p-8 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 sm:flex-row sm:items-center">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line-2 bg-ink-2/80 text-blue-bright transition-all duration-500 group-hover:border-blue/60 group-hover:text-cyan group-hover:shadow-[0_0_30px_-6px_rgba(69,230,244,0.7)]">
                <Stethoscope className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold tracking-tight text-fg">
                    Хэвлийн MRI
                  </h3>
                  <span className="font-mono text-sm text-faint">04</span>
                </div>
                <p className="mt-1.5 max-w-xl text-[0.95rem] leading-relaxed text-muted">
                  Элэг, бөөр, цөс болон дотор эрхтний өөрчлөлтийг туяаны
                  ачаалалгүйгээр нарийвчлан үнэлнэ.
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.16em] text-blue-bright transition-transform duration-300 group-hover:translate-x-1 sm:self-center">
              Дэлгэрэнгүй
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <CardChrome />
          </article>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

function PhotoCard({
  index,
  title,
  description,
  icon,
  image,
  position = "center",
}: {
  index: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  position?: string;
}) {
  return (
    <article className="group relative flex h-full min-h-[15.5rem] flex-col justify-between overflow-hidden rounded-[var(--radius)] border border-line p-7 transition-transform duration-500 hover:-translate-y-1">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="duotone object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/35" />
      <div className="absolute inset-0 bg-blue-deep/10 mix-blend-color" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line-2 bg-ink-2/70 text-blue-bright backdrop-blur-sm transition-all duration-500 group-hover:border-blue/60 group-hover:text-cyan">
          {icon}
        </div>
        <span className="font-mono text-sm text-white/45">{index}</span>
      </div>
      <div className="relative">
        <h3 className="text-2xl font-bold tracking-tight text-fg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
      <CardChrome />
    </article>
  );
}
