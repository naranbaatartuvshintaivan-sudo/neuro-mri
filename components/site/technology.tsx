import Image from "next/image";
import { ScanSearch, Crosshair, Zap } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";

const POINTS = [
  {
    icon: ScanSearch,
    title: "Эрт илрүүлэлт",
    description:
      "Хүний нүдэнд бараг мэдрэгдэхгүй жижиг өөрчлөлтийг алгоритм тэмдэглэж, өвчнийг эхэн үед нь барих боломжийг олгоно.",
  },
  {
    icon: Crosshair,
    title: "Өндөр нарийвчлал",
    description:
      "Олон давхаргын зургийг хиймэл оюун эмчтэй зэрэгцэн хянаснаар алдааны магадлалыг мэдэгдэхүйц бууруулна.",
  },
  {
    icon: Zap,
    title: "Хурдан хариу",
    description:
      "Боловсруулалтын процесс автоматжсанаар нарийвчилсан дүгнэлтийг 24 цагийн дотор гартаа авна.",
  },
];

export function Technology() {
  return (
    <section
      id="technology"
      className="relative scroll-mt-24 border-y border-line bg-white/[0.012]"
    >
      <div className="mx-auto grid max-w-[78rem] items-center gap-14 px-5 py-28 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* framed clinical image */}
        <Reveal>
          <div className="relative">
            <div className="glow-blue absolute -inset-8 -z-10 opacity-40" />
            <div className="relative aspect-[5/6] overflow-hidden rounded-[1.5rem] border border-line-2 ring-1 ring-inset ring-white/5 sm:aspect-[4/3] lg:aspect-[5/6]">
              {/* СВАП: эмнэлгийн орчин — neuro-hero.jpg (MRI аппарат) */}
              <Image
                src="/neuro-hero.jpg"
                alt="Neuro Scan MRI оношилгооны өрөө"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: "18% center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/25 to-transparent" />
              <div className="scan-sweep" />

              {/* crop marks */}
              <span className="crop-mark left-3 top-3 border-b-0 border-r-0" />
              <span className="crop-mark bottom-3 right-3 border-l-0 border-t-0" />

              {/* AI processing chip */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-cyan/25 bg-ink/70 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.16em]">
                  <span className="flex items-center gap-2 text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan blink" />
                    AI боловсруулж байна
                  </span>
                  <span className="text-muted">98.6%</span>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-blue to-cyan" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* copy + animated list */}
        <div>
          <Reveal>
            <SectionLabel index="02">Технологи</SectionLabel>
            <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-[-0.02em] text-fg sm:text-5xl">
              AI-аар сайжруулсан{" "}
              <span className="text-gradient">оношилгоо</span>
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
              Хиймэл оюун ухаан эмчийг орлохгүй — харин түүний нүдийг
              хурцалж, цаг хугацааг хэмнэнэ.
            </p>
          </Reveal>

          <Stagger className="mt-10 flex flex-col">
            {POINTS.map(({ icon: Icon, title, description }, i) => (
              <StaggerItem key={title}>
                <div className="group flex gap-5 border-t border-line py-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-2 bg-ink-2/70 text-blue-bright transition-all duration-500 group-hover:border-blue/60 group-hover:text-cyan">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-fg">
                        {title}
                      </h3>
                      <span className="font-mono text-xs text-faint">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
