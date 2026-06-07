import { CountUp } from "@/components/site/count-up";
import { Reveal } from "@/components/site/reveal";

type Stat = {
  value: React.ReactNode;
  label: string;
};

const STATS: Stat[] = [
  {
    value: <CountUp to={10000} suffix="+" />,
    label: "Хийгдсэн оношилгоо",
  },
  {
    value: <CountUp to={98} suffix="%" />,
    label: "Оношийн нарийвчлал",
  },
  {
    value: "24/7",
    label: "Яаралтай хүлээн авалт",
  },
  {
    value: <span className="text-gradient">AI</span>,
    label: "Дэмжлэгтэй шинжилгээ",
  },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-line bg-white/[0.015]">
      <div className="atmo-dots absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(to_bottom,transparent,#000,transparent)]" />
      <div className="relative mx-auto grid max-w-[78rem] grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="flex flex-col gap-2 px-6 py-10 sm:px-8 lg:py-12">
              <span className="font-mono text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                {s.value}
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
