"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Heart, Zap, Users, Terminal, Cpu, Layers, Globe, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

// Animation Utility
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
            duration: 0.8,
            delay,
            ease: [0.21, 0.47, 0.32, 0.98]
        }}
        className={className}
    >
        {children}
    </motion.div>
);

// Card Component for Philosophy
const ValueCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
    <FadeIn delay={delay} className="group p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
        <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
        </div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{description}</p>
    </FadeIn>
);

// Skill Badge Component
const SkillBadge = ({ children }: { children: React.ReactNode }) => (
    <span className="px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-zinc-700/50">
        {children}
    </span>
);

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main
            ref={containerRef}
            className="relative min-h-screen bg-white dark:bg-black selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black pt-24 pb-24"
        >
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-zinc-100/50 to-transparent dark:from-zinc-900/30 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-zinc-100/50 to-transparent dark:from-zinc-900/30 blur-[120px]" />
            </div>

            <div className="container px-6 mx-auto relative z-10 max-w-4xl">

                {/* 1. Opening Statement */}
                <section className="mb-24">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
                            </span>
                            <span className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold tracking-wide uppercase">
                                About Me
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight mb-8">
                            I’m Eng Abdalla. <br />
                            <span className="text-zinc-500 dark:text-zinc-500">
                                A product engineer building with purpose.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                            I’m a software engineer and full-stack developer dedicated to building clean, scalable, and human-centered digital products. I don't just write code; I build systems that solve real problems.
                        </p>
                    </FadeIn>
                </section>

                {/* 2. Story / Journey */}
                <section className="mb-24 grid md:grid-cols-[1fr_2fr] gap-12 items-start border-t border-zinc-200 dark:border-zinc-800 pt-16">
                    <FadeIn delay={0.2}>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-zinc-400" />
                            The Journey
                        </h2>
                    </FadeIn>
                    <div className="space-y-6">
                        <FadeIn delay={0.3}>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                                My path to engineering started with simple curiosity—wanting to understand how the digital world works. That curiosity quickly turned into a builder's mindset. Over the last 2 years, I've transitioned from learning the basics to architecting full-stack applications that serve real users.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                                I believe that great software is born at the intersection of technical excellence and user empathy. Every line of code I write is aimed at making a complex system feel simple and reliable for the person on the other end.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* 3. Philosophy & Values */}
                <section className="mb-24">
                    <FadeIn delay={0.2} className="mb-12">
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight text-center md:text-left">
                            Core Philosophy
                        </h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-6">
                        <ValueCard
                            icon={Code2}
                            title="Clean & Maintainable"
                            description="I write code that is easy to read, test, and scale. Future me (and other developers) will be thankful for the clarity."
                            delay={0.1}
                        />
                        <ValueCard
                            icon={Users}
                            title="User-Centric Design"
                            description="Features don't matter if they don't solve user problems. I obsess over the user journey and experience."
                            delay={0.2}
                        />
                        <ValueCard
                            icon={Zap}
                            title="Performance First"
                            description="Speed is a feature. I optimize for fast load times, smooth interactions, and efficient resource usage."
                            delay={0.3}
                        />
                        <ValueCard
                            icon={Heart}
                            title="Continuous Growth"
                            description="Technology moves fast. I stay ahead by constantly learning, experimenting, and refining my craft."
                            delay={0.4}
                        />
                    </div>
                </section>

                {/* 4. Skills & Tech Stack */}
                <section className="mb-24 grid md:grid-cols-[1fr_2fr] gap-12 items-start border-t border-zinc-200 dark:border-zinc-800 pt-16">
                    <FadeIn delay={0.2}>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-zinc-400" />
                            Capabilities
                        </h2>
                    </FadeIn>
                    <div className="space-y-10">

                        {/* Domain Areas */}
                        <div className="grid sm:grid-cols-2 gap-8">
                            <FadeIn delay={0.3}>
                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Focus Areas</h3>
                                <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                                        Product Engineering
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                                        Frontend Systems
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                                        Backend Architecture
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                                        Performance & UX
                                    </li>
                                </ul>
                            </FadeIn>

                            {/* Stack */}
                            <FadeIn delay={0.4}>
                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    <SkillBadge>Next.js</SkillBadge>
                                    <SkillBadge>TypeScript</SkillBadge>
                                    <SkillBadge>Tailwind CSS</SkillBadge>
                                    <SkillBadge>React</SkillBadge>
                                    <SkillBadge>Node.js</SkillBadge>
                                    <SkillBadge>PostgreSQL</SkillBadge>
                                    <SkillBadge>Framer Motion</SkillBadge>
                                    <SkillBadge>Shadcn/ui</SkillBadge>
                                    <SkillBadge>Git</SkillBadge>
                                </div>
                            </FadeIn>
                        </div>

                    </div>
                </section>

                {/* 5. Personal Touch */}
                <section className="mb-24 py-12 px-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Globe className="w-64 h-64" />
                    </div>

                    <div className="relative z-10 max-w-2xl">
                        <FadeIn delay={0.2}>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Always raising the bar</h2>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                                I care deeply about growth — personal, technical, and professional. I continuously challenge myself to improve and raise the quality of everything I ship. When I'm not coding, I'm likely exploring new design patterns, reading about system architecture, or refining my workflow.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 relative">
                                    <Image
                                        src="/images/eng.jpeg"
                                        alt="Eng Abdalla"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-zinc-900 dark:text-zinc-100">Eng Abdalla</div>
                                    <div className="text-sm text-zinc-500">Full-Stack Engineer</div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* 6. Contact CTA */}
                <section className="text-center pb-12">
                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Ready to build something great?</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/projects" className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 px-8 text-sm font-semibold text-white dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200">
                                <span>See what I build</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                            <Link href="mailto:contact@example.com" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-8 text-sm font-semibold text-zinc-900 dark:text-zinc-100 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900">
                                <span>Get in touch</span>
                            </Link>
                        </div>
                    </FadeIn>
                </section>

            </div>
        </main>
    );
}
