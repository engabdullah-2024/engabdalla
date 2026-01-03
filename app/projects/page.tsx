"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Globe, Sparkles, Layers, BookOpen, HeartPulse, GraduationCap, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Types ---
type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    links: {
        demo?: string;
        github?: string;
    };
    icon: any; // Using Lucide icons as placeholders for now
    color: string;
};

const PROJECTS: Project[] = [
    {
        id: "nidaamiye",
        title: "Nidaamiye",
        description: "A comprehensive multi-tenant school management SaaS designed for modern education institutions in Somalia. Streamlines administration, grading, and student tracking.",
        tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Shadcn UI"],
        links: {
            github: "https://github.com/engabdullah-2024",
            demo: "#",
        },
        icon: GraduationCap,
        color: "from-blue-500/20 to-blue-600/5",
    },
    {
        id: "daryeel",
        title: "DaryeelCare",
        description: "Modern hospital management system and patient booking platform. Features real-time appointment scheduling, patient records, and doctor portals.",
        tags: ["Next.js", "Tailwind", "Framer Motion", "PostgreSQL"],
        links: {
            github: "https://github.com/engabdullah-2024",
        },
        icon: HeartPulse,
        color: "from-emerald-500/20 to-emerald-600/5",
    },
    {
        id: "hayaan",
        title: "Hayaan LMS",
        description: "An intuitive Learning Management System built for students and educators. Supports course delivery, quizzes, progress tracking, and interactive learning materials.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
        links: {
            github: "https://github.com/engabdullah-2024",
            demo: "#",
        },
        icon: BookOpen,
        color: "from-amber-500/20 to-amber-600/5",
    },
];

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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <FadeIn delay={index * 0.15} className="group relative h-full">
            <div className="relative h-full flex flex-col p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/50">

                {/* Subtle Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon / Decor */}
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700 flex items-center justify-center mb-6 text-zinc-900 dark:text-zinc-100 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="relative z-10 mt-auto flex items-center gap-4 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-6">
                    {project.links.demo && (
                        <Link
                            href={project.links.demo}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span>Live Demo</span>
                        </Link>
                    )}
                    {project.links.github && (
                        <Link
                            href={project.links.github}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            <span>Source Code</span>
                        </Link>
                    )}

                    <div className="ml-auto p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </FadeIn>
    );
};

export default function ProjectsPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main
            ref={containerRef}
            className="relative min-h-screen bg-white dark:bg-black selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black pt-24 pb-24"
        >
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-purple-100/20 to-transparent dark:from-purple-900/10 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-teal-100/20 to-transparent dark:from-teal-900/10 blur-[120px]" />
            </div>

            <div className="container px-6 mx-auto relative z-10 max-w-6xl">

                {/* 1. Header Section */}
                <section className="mb-20">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8">
                            <Sparkles className="w-3 h-3 text-zinc-500" />
                            <span className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold tracking-wide uppercase">
                                Portfolio
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
                            Selected Work
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Here are some of the products and applications I’ve built. Each project represents a unique challenge in scale, performance, or user experience.
                        </p>
                    </FadeIn>
                </section>

                {/* 2. Projects Grid */}
                <section>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}

                        {/* "More Coming Soon" Card */}
                        <FadeIn delay={0.6} className="h-full">
                            <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-8 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 text-center">
                                <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 mb-4">
                                    <Layers className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">More in the works</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto text-sm">
                                    I'm constantly building and experimenting. Experiments and side projects will appear here soon.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* 3. CTA */}
                <section className="mt-24 text-center">
                    <FadeIn delay={0.8}>
                        <Link href="/contact" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium transition-colors">
                            <span>Interested in collaborating? Let's talk</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </FadeIn>
                </section>

            </div>
        </main>
    );
}
