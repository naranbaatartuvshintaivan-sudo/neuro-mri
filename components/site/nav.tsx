"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Үйлчилгээ", href: "#services" },
  { label: "Технологи", href: "#technology" },
  { label: "Эмч", href: "#doctor" },
  { label: "Холбоо барих", href: "#booking" },
];

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "border-b transition-all duration-500",
          scrolled
            ? "border-line bg-ink/70 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-[4.5rem] max-w-[78rem] items-center justify-between px-5 sm:px-8">
          {/* brand */}
          <Link href="#top" className="group flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-line-2 transition-transform duration-300 group-hover:scale-105">
              {/* СВАП: лого — neuro-scan-logo.jpg */}
              <Image
                src="/neuro-scan-logo.jpg"
                alt="Neuro Scan MRI"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[0.95rem] font-extrabold tracking-tight text-fg">
                Neuro Scan
              </span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.42em] text-blue-bright">
                MRI Clinic
              </span>
            </span>
          </Link>

          {/* desktop links */}
          <div className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-medium text-muted transition-colors hover:text-fg"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-blue-bright to-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+97685038105"
              className="flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-fg"
            >
              <Phone className="h-3.5 w-3.5 text-blue-bright" />
              8503-8105
            </a>
            <a
              href="#booking"
              className={cn(buttonVariants({ size: "sm" }), "px-5")}
            >
              Цаг захиалах
            </a>
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            aria-label="Цэс"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-2 text-fg md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-line bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-white/[0.04] hover:text-fg"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants(), "mt-3 w-full")}
              >
                Цаг захиалах
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
