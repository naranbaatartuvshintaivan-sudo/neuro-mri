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
      className="relative scroll-mt-24 border-y border-line bg-surface-2"
    >
      <div className="mx-auto grid max-w-[78rem] items-center gap-14 px-5 py-28 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* framed clinical image */}
        <Reveal>
          <div className="relative">
            <div className="glow-blue absolute -inset-8 -z-10 opacity-25" />
            <div className="relative aspect-[5/6] overflow-hidden rounded-[1.5rem] border border-line-2 shadow-[0_30px_70px_-44px_rgba(20,102,255,0.3)] ring-1 ring-inset ring-line sm:aspect-[4/3] lg:aspect-[5/6]">
              {/* СВАП: эмнэлгийн орчин — neuro-hero.jpg (MRI аппарат) */}
              <Image
                src="/neuro-hero.jpg"
                alt="Neuro Scan MRI оношилгооны өрөө"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: "18% center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/10 to-transparent" />
              <div className="scan-sweep" />

              {/* crop marks */}
              <span className="crop-mark left-3 top-3 border-b-0 border-r-0" />
              <span className="crop-mark bottom-3 right-3 border-l-0 border-t-0" />

              {/* AI processing chip */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-cyan/30 bg-white/80 p-4 shadow-[0_10px_30px_-20px_rgba(20,102,255,0.5)] backdrop-blur-md">
                <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.16em]">
                  <span className="flex items-center gap-2 text-primary-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan blink" />
                    AI боловсруулж байна
                  </span>
                  <span className="text-text-2">98.6%</span>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-line">
                  <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-primary to-cyan" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* copy + animated list */}
        <div>
          <Reveal>
            <SectionLabel index="02">Технологи</SectionLabel>
            <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-[-0.02em] text-text sm:text-5xl">
              AI-аар сайжруулсан{" "}
              <span className="text-gradient">оношилгоо</span>
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-text-2">
              Хиймэл оюун ухаан эмчийг орлохгүй — харин түүний нүдийг
              хурцалж, цаг хугацааг хэмнэнэ.
            </p>
          </Reveal>

          <Stagger className="mt-10 flex flex-col">
            {POINTS.map(({ icon: Icon, title, description }, i) => (
              <StaggerItem key={title}>
                <div className="group flex gap-5 border-t border-line py-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-2 bg-cyan-soft text-primary transition-all duration-500 group-hover:border-primary group-hover:text-cyan">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-text">
                        {title}
                      </h3>
                      <span className="font-mono text-xs text-text-3">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-2">
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
