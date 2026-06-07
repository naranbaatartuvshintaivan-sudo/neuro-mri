"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, Users } from "lucide-react";
import { Magnetic } from "@/components/site/magnetic";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const TRUST = [
  { icon: Clock, label: "24 цагийн дотор хариу" },
  { icon: ShieldCheck, label: "Мэргэжлийн эмч" },
  { icon: Users, label: "1.6K+ үйлчлүүлэгч" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative mx-auto flex min-h-[100svh] max-w-[78rem] flex-col justify-center px-5 pb-20 pt-32 sm:px-8 lg:pt-28"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10"
      >
        {/* ---------- copy ---------- */}
        <motion.div style={{ y: textY }} className="lg:col-span-6 xl:col-span-7">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 rounded-full border border-line-2 bg-white/[0.02] py-1.5 pl-2 pr-4 backdrop-blur-sm"
          >
            <span className="rounded-full bg-cyan/15 px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan">
              AI
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              Дэвшилтэт радиологийн төв
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-balance text-[2.65rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-fg sm:text-6xl xl:text-[4.6rem]"
          >
            <span className="text-gradient">AI</span> тусламжтай
            <br />
            MRI оношилгоо
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted sm:text-xl"
          >
            Эрт илрүүлэлт. Өндөр нарийвчлал.{" "}
            <span className="text-fg">Танд итгэл.</span>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <Magnetic>
              <a href="#booking" className={cn(buttonVariants({ size: "lg" }))}>
                Цаг захиалах
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <a
              href="#services"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              Үйлчилгээ үзэх
            </a>
          </motion.div>

          {/* trust strip */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-7"
          >
            {TRUST.map(({ icon: Icon, label }, i) => (
              <React.Fragment key={label}>
                {i > 0 && (
                  <span className="hidden h-4 w-px bg-line-2 sm:block" />
                )}
                <span className="flex items-center gap-2 text-sm text-muted">
                  <Icon className="h-4 w-4 text-blue-bright" />
                  {label}
                </span>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------- framed media (centerpiece) ---------- */}
        <motion.div
          variants={item}
          className="relative lg:col-span-6 xl:col-span-5"
        >
          {/* glow halo */}
          <motion.div
            style={{ y: glowY }}
            className="glow-cyan absolute -inset-10 -z-10 opacity-50"
          />
          <motion.div
            style={{ y: mediaY }}
            className="relative mx-auto max-w-[26rem] lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-line-2 bg-ink-3 shadow-[0_40px_120px_-40px_rgba(47,109,255,0.7)] ring-1 ring-inset ring-white/5">
              {/* СВАП: 3D нугасны MRI видео — public/spine.mp4.
                  Файл байхгүй үед poster (neuro-hero.jpg) харагдана. */}
              <video
                className="h-full w-full object-cover object-[30%_center]"
                autoPlay
                muted
                loop
                playsInline
                poster="/neuro-hero.jpg"
              >
                <source src="/spine.mp4" type="video/mp4" />
              </video>

              {/* poster framing helper — keeps the machine in view if video missing */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/30" />
              <div className="scan-sweep" />

              {/* DICOM-style overlay labels */}
              <div className="pointer-events-none absolute inset-0 p-5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/85">
                <div className="flex items-start justify-between">
                  <span className="rounded-md bg-black/35 px-2 py-1 backdrop-blur-sm">
                    MRI · T2 SAGITTAL
                  </span>
                  <span className="flex items-center gap-1.5 rounded-md bg-black/35 px-2 py-1 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan blink" />
                    SCAN ACTIVE
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                  <span className="text-white/70">SLICE 24 / 36</span>
                  <span className="rounded-md border border-cyan/30 bg-cyan/10 px-2 py-1 text-cyan">
                    AI · 98.6%
                  </span>
                </div>
              </div>

              {/* crop marks */}
              <span className="crop-mark left-3 top-3 border-b-0 border-r-0" />
              <span className="crop-mark right-3 top-3 border-b-0 border-l-0" />
              <span className="crop-mark bottom-3 left-3 border-r-0 border-t-0" />
              <span className="crop-mark bottom-3 right-3 border-l-0 border-t-0" />
            </div>

            {/* floating spec chip */}
            <div className="float-slow absolute -left-4 bottom-12 hidden rounded-2xl border border-line-2 bg-ink-2/90 px-4 py-3 backdrop-blur-md sm:block lg:-left-10">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-faint">
                Талбайн хүч
              </p>
              <p className="mt-1 text-lg font-bold text-fg">
                3.0<span className="ml-0.5 text-sm text-blue-bright">Tesla</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="mt-16 hidden items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-faint lg:flex"
      >
        <span className="h-px w-10 bg-line-2" />
        Доош гүйлгэх
      </motion.div>
    </section>
  );
}
