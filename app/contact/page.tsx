"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Phone, Send, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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

// --- Contact Method Card ---
const ContactCard = ({
    icon: Icon,
    label,
    value,
    href,
    delay
}: {
    icon: any;
    label: string;
    value: string;
    href: string;
    delay: number
}) => (
    <FadeIn delay={delay} className="w-full">
        <Link
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:bg-white dark:hover:bg-zinc-800/80"
        >
            <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-0.5">
                    {label}
                </div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {value}
                </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-400 ml-auto -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
        </Link>
    </FadeIn>
);

// --- Form Input Components (Custom styled to match shadcn/ui) ---
const Label = ({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
        {children}
    </label>
);

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
    <input
        ref={ref}
        className="w-full h-11 px-4 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        {...props}
    />
));
Input.displayName = "Input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => (
    <textarea
        ref={ref}
        className="w-full min-h-[120px] p-4 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed resize-y"
        {...props}
    />
));
Textarea.displayName = "Textarea";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <main className="relative min-h-screen bg-white dark:bg-black selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black pt-24 pb-24">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-zinc-100/50 to-transparent dark:from-zinc-900/30 blur-[120px]" />
            </div>

            <div className="container px-6 mx-auto relative z-10 max-w-6xl">

                {/* 1. Header Section */}
                <section className="mb-20 text-center max-w-2xl mx-auto">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold tracking-wide uppercase">
                                Contact
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
                            Let’s Build Something <br className="hidden sm:block" /> Together.
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            I’m always open to collaborating on projects, solving problems, or simply sharing ideas. Reach out — I’d love to hear from you.
                        </p>
                    </FadeIn>
                </section>

                {/* 2. Main Layout: Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Form */}
                    <FadeIn delay={0.4} className="bg-zinc-50/50 dark:bg-zinc-900/20 rounded-3xl p-8 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm">
                        {isSuccess ? (
                            <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6"
                                >
                                    <CheckCircle2 className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Message Sent!</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-8">Thanks for reaching out. I'll get back to you shortly.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 underline hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="John Doe" required disabled={isSubmitting} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" required disabled={isSubmitting} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="Project collaboration..." required disabled={isSubmitting} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Tell me about your project..." required disabled={isSubmitting} />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 px-8 text-sm font-semibold text-white dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </FadeIn>

                    {/* Right Column: Contact Methods & Visuals */}
                    <div className="space-y-8 lg:pt-8">
                        <div className="space-y-4">
                            <ContactCard
                                icon={Mail}
                                label="Email Me"
                                value="enga95311@gmail.com"
                                href="mailto:enga95311@gmail.com"
                                delay={0.5}
                            />
                            <ContactCard
                                icon={Github}
                                label="GitHub"
                                value="github.com/engabdullah-2024"
                                href="https://github.com/engabdullah-2024"
                                delay={0.6}
                            />
                            <ContactCard
                                icon={Phone}
                                label="Call Me"
                                value="+252 61 316 9435"
                                href="tel:+252613169435"
                                delay={0.7}
                            />
                        </div>

                        {/* Visual Decor / Quote */}
                        <FadeIn delay={0.8} className="mt-12 p-8 bg-zinc-900 dark:bg-zinc-100 rounded-3xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white dark:text-zinc-900 mb-2">Based in Somalia 🇸🇴</h3>
                                <p className="text-zinc-400 dark:text-zinc-600 text-sm">
                                    Working globally. Available for remote opportunities and focused collaborations.
                                </p>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                                    <circle cx="150" cy="150" r="100" fill="currentColor" className="text-white dark:text-black" />
                                </svg>
                            </div>
                        </FadeIn>
                    </div>

                </div>

            </div>
        </main>
    );
}
