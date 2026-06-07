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
            className="inline-flex items-center gap-3 rounded-full border border-line-2 bg-surface py-1.5 pl-2 pr-4 shadow-[0_1px_2px_rgba(15,39,66,0.04)]"
          >
            <span className="rounded-full bg-cyan-soft px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary-600">
              AI
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-2">
              Дэвшилтэт радиологийн төв
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-balance text-[2.65rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-text sm:text-6xl xl:text-[4.6rem]"
          >
            <span className="text-gradient">AI</span> тусламжтай
            <br />
            MRI оношилгоо
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-text-2 sm:text-xl"
          >
            Эрт илрүүлэлт. Өндөр нарийвчлал.{" "}
            <span className="text-text">Танд итгэл.</span>
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
                <span className="flex items-center gap-2 text-sm text-text-2">
                  <Icon className="h-4 w-4 text-primary" />
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
          {/* glow halo — softened to a gentle cyan tint */}
          <motion.div
            style={{ y: glowY }}
            className="glow-cyan absolute -inset-10 -z-10 opacity-20"
          />
          <motion.div
            style={{ y: mediaY }}
            className="relative mx-auto max-w-[26rem] lg:max-w-none"
          >
            {/* white bezel frame + soft blue shadow */}
            <div className="rounded-[1.7rem] border border-line-2 bg-surface p-2.5 shadow-[0_30px_80px_-40px_rgba(20,102,255,0.25)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.3rem] bg-surface-2 ring-1 ring-inset ring-line">
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

                <div className="scan-sweep" />

                {/* DICOM-style overlay labels — white/cyan glass, readable on any frame */}
                <div className="pointer-events-none absolute inset-0 p-4 font-mono text-[0.62rem] uppercase tracking-[0.16em]">
                  <div className="flex items-start justify-between">
                    <span className="rounded-md bg-white/70 px-2 py-1 text-primary backdrop-blur-sm">
                      MRI · T2 SAGITTAL
                    </span>
                    <span className="flex items-center gap-1.5 rounded-md bg-white/70 px-2 py-1 text-text-2 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan blink" />
                      SCAN ACTIVE
                    </span>
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                    <span className="rounded-md bg-white/70 px-2 py-1 text-text-2 backdrop-blur-sm">
                      SLICE 24 / 36
                    </span>
                    <span className="rounded-md border border-cyan/30 bg-cyan-soft/85 px-2 py-1 text-primary-600 backdrop-blur-sm">
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
            </div>

            {/* floating spec chip */}
            <div className="float-slow absolute -left-4 bottom-12 hidden rounded-2xl border border-line-2 bg-white/85 px-4 py-3 shadow-[0_18px_40px_-24px_rgba(20,102,255,0.45)] backdrop-blur-md sm:block lg:-left-10">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-text-3">
                Талбайн хүч
              </p>
              <p className="mt-1 text-lg font-bold text-text">
                3.0<span className="ml-0.5 text-sm text-primary">Tesla</span>
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
        className="mt-16 hidden items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-text-3 lg:flex"
      >
        <span className="h-px w-10 bg-line-2" />
        Доош гүйлгэх
      </motion.div>
    </section>
  );
}
