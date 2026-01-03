"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Mail, Terminal, Code2, Layers, Cpu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const FadeIn = ({
    children,
    delay = 0,
    className
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.8,
            delay,
            ease: [0.21, 0.47, 0.32, 0.98] // Calm energetic custom bezier
        }}
        className={className}
    >
        {children}
    </motion.div>
);

const TechBadge = ({ icon: Icon, label }: { icon: any; label: string }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 text-xs font-medium transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 cursor-default">
        <Icon className="w-3.5 h-3.5" />
        <span>{label}</span>
    </div>
);

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Subtle parallax or scroll effect potential
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-black selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black"
        >
            {/* Background Elements - Minimal & Calm */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                {/* Soft Gradient Glow */}
                <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-zinc-200/40 to-transparent dark:from-zinc-800/20 blur-[120px]" />
                <div className="absolute bottom-[0%] left-[0%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-zinc-100/40 to-transparent dark:from-zinc-900/20 blur-[100px]" />
            </div>

            <div className="container px-6 mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Column: Identity & Content */}
                <div className="flex flex-col items-start max-w-2xl lg:pl-8 pt-20 lg:pt-0">

                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold tracking-wide uppercase">
                                Available for new projects
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-lg md:text-xl font-medium text-zinc-500 dark:text-zinc-400 mb-4 tracking-tight">
                            Eng Abdalla <span className="mx-2 opacity-50">·</span> Fullstack SW Engineer
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 leading-[0.95] lg:leading-[1.1]">
                            Building digital <br className="hidden sm:block" />
                            <span className="text-zinc-500 dark:text-zinc-500 relative inline-block">
                                products
                                <motion.svg
                                    className="absolute w-[110%] -bottom-2 -left-[5%] text-zinc-300 dark:text-zinc-700 -z-10"
                                    viewBox="0 0 100 20"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                                >
                                    <path d="M5 12C30 15 70 5 95 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                </motion.svg>
                            </span> that matter.
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mb-10 leading-relaxed">
                            With 2 years of experience, I focus on building scalable, human-centered applications with meticulous attention to detail and performance.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.5} className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto">
                        <Link href="/skills" className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 px-8 text-sm font-semibold text-white dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900">
                            <span>View Skills</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                        <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-8 text-sm font-semibold text-zinc-900 dark:text-zinc-100 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700">
                            <Mail className="w-4 h-4 text-zinc-500" />
                            <span>Contact Me</span>
                        </Link>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                                Trusted Stack
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <TechBadge icon={Globe} label="Next.js" />
                                <TechBadge icon={Code2} label="TypeScript" />
                                <TechBadge icon={Layers} label="Tailwind" />
                                <TechBadge icon={Cpu} label="Framer Motion" />
                                <TechBadge icon={Terminal} label="Node.js" />
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Right Column: Visual Interest / "Calm Power" */}
                <div className="relative hidden lg:block h-full min-h-[600px] w-full">
                    <motion.div
                        style={{ y: y1, opacity }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {/* Abstract Geometric Composition */}
                        <div className="relative w-[500px] h-[600px] [perspective:1000px]">
                            {/* Main Card/Interface Representation */}
                            <motion.div
                                initial={{ opacity: 0, rotateX: 20, rotateY: -20, y: 50 }}
                                animate={{ opacity: 1, rotateX: 10, rotateY: -15, y: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                className="absolute top-10 left-10 w-full h-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-zinc-700/50 shadow-2xl p-6 overflow-hidden"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                </div>

                                {/* Mock Content - Abstract Code/Structure */}
                                <div className="space-y-4">
                                    <div className="h-4 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                                    <div className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse delay-75" />
                                    <div className="space-y-2 mt-8">
                                        <div className="h-32 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-700" />
                                        <div className="flex gap-4">
                                            <div className="h-24 w-1/2 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl" />
                                            <div className="h-24 w-1/2 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements on top */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                    className="absolute bottom-20 -right-10 p-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-zinc-700/50 flex items-center gap-3 z-20"
                                >
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Status</div>
                                        <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">99.9% Uptime</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-40 -left-12 p-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-zinc-700/50 flex items-center gap-3 z-20"
                                >
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <Cpu className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Performance</div>
                                        <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Optimized</div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
