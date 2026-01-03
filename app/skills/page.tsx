"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

// --- Animation Components ---

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

// --- Icons (Inline SVGs for Premium Quality) ---

const Icons = {
    NextJS: (props: any) => (
        <svg viewBox="0 0 180 180" fill="none" {...props}>
            <mask id="mask0_next" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                <rect width="180" height="180" fill="currentColor" />
            </mask>
            <g mask="url(#mask0_next)">
                <path fillRule="evenodd" clipRule="evenodd" d="M180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90ZM125.132 121.366L116.822 105.881L85.2533 46.5L88.9409 46.5C92.2152 46.5 94.8816 43.8336 94.8816 40.5593C94.8816 37.2849 92.2152 34.6186 88.9409 34.6186L64.8816 34.6186C61.6073 34.6186 58.9409 37.2849 58.9409 40.5593C58.9409 43.8336 61.6073 46.5 64.8816 46.5L62.2036 46.5L62.2036 123.695C62.2036 126.969 64.8699 129.636 68.1443 129.636C71.4187 129.636 74.085 126.969 74.085 123.695L74.085 67.5762L108.974 133.007C109.837 134.625 110.155 135.257 110.457 135.803C116.096 142.164 123.541 146.136 131.83 146.136C153.218 146.136 170.559 128.795 170.559 107.407C170.559 96.7909 166.292 87.1691 159.294 80.1704L125.132 121.366ZM145.241 53.6896C145.241 49.3338 148.772 45.8027 153.128 45.8027C157.484 45.8027 161.015 49.3338 161.015 53.6896C161.015 58.0454 157.484 61.5765 153.128 61.5765C148.772 61.5765 145.241 58.0454 145.241 53.6896Z" fill="currentColor" />
            </g>
        </svg>
    ),
    TypeScript: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
            <path d="M7 6v6h4" />
            <path d="M11 6v6" />
            <path d="M17 14.5a2.5 2.5 0 0 1 0 5H15" />
            <path d="M15 16h2" />
        </svg>
    ),
    React: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="2" />
            <path d="M12 2C7.3 2 4.4 7 4.4 7s-1.8 1.4-1.8 5c0 3.6 1.8 5 1.8 5s2.9 5 7.6 5c4.7 0 7.6-5 7.6-5s1.8-1.4 1.8-5c0-3.6-1.8-5-1.8-5S16.7 2 12 2z" transform="rotate(-45 12 12)" />
            <path d="M12 2C7.3 2 4.4 7 4.4 7s-1.8 1.4-1.8 5c0 3.6 1.8 5 1.8 5s2.9 5 7.6 5c4.7 0 7.6-5 7.6-5s1.8-1.4 1.8-5c0-3.6-1.8-5-1.8-5S16.7 2 12 2z" transform="rotate(45 12 12)" />
        </svg>
    ),
    Tailwind: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M7 19C4.2 19 2 16.8 2 14C2 11.2 4.2 9 7 9C9.8 9 12 11.2 12 14C12 15.1 11.6 16.1 11 17L12 19C13 17.8 14 17 15 17C17.2 17 19 15.2 19 13C19 10.8 17.2 9 15 9C12.2 9 10 6.8 10 4C10 3.2 10.2 2.4 10.5 1.7L12 4C13 2.8 14 2 15 2C17.8 2 20 4.2 20 7C20 9.8 17.8 12 15 12C12.2 12 10 14.2 10 17C10 21.4 7 21.4 7 19Z" fill="currentColor" />
        </svg>
    ),
    Shadcn: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m7 21 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        </svg>
    ),
    Framer: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M5 2h14v7h-7l7 7h-7v6L5 9V2z" />
        </svg>
    ),
    Node: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
    ),
    Mongo: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 7v10" />
        </svg>
    ),
    Prisma: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="m12 2 10 18H2L12 2Z" />
        </svg>
    ),
    Javascript: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M3 3h18v18H3V3zm14.5 13.5c0-.8.6-1.5 1.5-1.5.8 0 1.5.6 1.5 1.5v.5h-3v-.5zm-5 0c0-.8.6-1.5 1.5-1.5.8 0 1.5.6 1.5 1.5v.5H9v-.5z" />
        </svg>
    )
};

// --- Types & Data ---

type Skill = {
    name: string;
    proficiency: number;
    icon: any;
    category: "Frontend" | "Backend" | "Core";
};

const SKILLS: Skill[] = [
    { name: "Next.js", proficiency: 95, icon: Icons.NextJS, category: "Frontend" },
    { name: "TypeScript", proficiency: 90, icon: Icons.TypeScript, category: "Core" },
    { name: "React", proficiency: 95, icon: Icons.React, category: "Frontend" },
    { name: "Tailwind CSS", proficiency: 90, icon: Icons.Tailwind, category: "Frontend" },
    { name: "JavaScript", proficiency: 95, icon: Icons.Javascript, category: "Core" },
    { name: "shadcn/ui", proficiency: 85, icon: Icons.Shadcn, category: "Frontend" },
    { name: "Framer Motion", proficiency: 80, icon: Icons.Framer, category: "Frontend" },
    { name: "Node.js", proficiency: 85, icon: Icons.Node, category: "Backend" },
    { name: "MongoDB", proficiency: 85, icon: Icons.Mongo, category: "Backend" },
    { name: "Prisma", proficiency: 80, icon: Icons.Prisma, category: "Backend" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
        <FadeIn delay={0.1 * index} className="group">
            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-md">

                {/* Header: Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white dark:group-hover:bg-zinc-700 shadow-sm">
                        <skill.icon className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{skill.name}</h3>
                        <span className="text-xs text-zinc-500 dark:text-zinc-500 font-medium tracking-wide uppercase">
                            {skill.category}
                        </span>
                    </div>
                    <div className="ml-auto text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        {skill.proficiency}%
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                        className="h-full bg-zinc-900 dark:bg-zinc-100 rounded-full"
                    />
                </div>
            </div>
        </FadeIn>
    );
};

export default function SkillsPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main
            ref={containerRef}
            className="relative min-h-screen bg-white dark:bg-black selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black pt-24 pb-24"
        >
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-gradient-to-b from-blue-100/20 to-transparent dark:from-blue-900/10 blur-[120px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-to-t from-emerald-100/20 to-transparent dark:from-emerald-900/10 blur-[120px]" />
            </div>

            <div className="container px-6 mx-auto relative z-10 max-w-5xl">

                {/* 1. Header Section */}
                <section className="mb-20 text-center md:text-left">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8 mx-auto md:mx-0">
                            <Sparkles className="w-3 h-3 text-zinc-500" />
                            <span className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold tracking-wide uppercase">
                                Expertise & Toolkit
                            </span>
                        </div>
                    </FadeIn>

                    <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
                        <FadeIn delay={0.2} className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
                                My Skills & Expertise
                            </h1>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                I focus on building reliable, scalable, and human-centered applications using modern technologies. My stack is chosen for performance, developer experience, and long-term maintainability.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="hidden md:block p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">Total Mastery</div>
                                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Top 1%</div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* 2. Skills Grid */}
                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SKILLS.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </section>

                {/* 3. Closing / Confidence Statement */}
                <section className="mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-800">
                    <FadeIn delay={0.5}>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-70">
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
                                * Proficiency ratings are based on professional usage, depth of knowledge, and ability to tackle complex problems in each domain.
                            </p>
                            <div className="flex gap-4">
                                <div className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100"></div>
                                <div className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                                <div className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

            </div>
        </main>
    );
}
