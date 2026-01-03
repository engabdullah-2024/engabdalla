"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Mail, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 font-bold text-sm group-hover:scale-105 transition-transform">
                                EA
                            </div>
                            <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg tracking-tight">
                                Eng Abdalla
                            </span>
                        </Link>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm leading-relaxed">
                            Senior Product Engineer & UI/UX Architect building scalable, human-centered applications with focus and precision.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1 group"
                                    >
                                        {item}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                            Connect
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:enga95311@gmail.com"
                                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Email</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/engabdullah-2024"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+252613169435"
                                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+252 61 316 9435</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 text-center md:text-left">
                        © {currentYear} Eng Abdalla. All rights reserved.
                    </p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-600 flex items-center gap-1">
                        Built with Next.js & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
