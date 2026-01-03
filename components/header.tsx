"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

// --- Types ---
type NavLink = {
    name: string;
    href: string;
};

const NAV_LINKS: NavLink[] = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
                    : "bg-transparent border-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

                    {/* Brand */}
                    <Link href="/" className="group flex items-center gap-2 z-50">
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 font-bold text-sm group-hover:scale-105 transition-transform">
                            EA
                        </div>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg tracking-tight group-hover:opacity-80 transition-opacity">
                            Eng Abdalla
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${pathname === link.href ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400"
                                    }`}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>



                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://github.com/engabdullah-2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50 p-2 text-zinc-900 dark:text-zinc-100 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-white dark:bg-black pt-24 px-6 md:hidden flex flex-col"
                    >
                        <nav className="flex flex-col gap-6">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`block text-3xl font-semibold tracking-tight ${pathname === link.href ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto mb-10 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-6"
                        >
                            <div className="flex gap-6 items-center">
                                <a href="https://github.com/engabdullah-2024" className="text-zinc-500 dark:text-zinc-400"><Github className="w-6 h-6" /></a>
                                <ModeToggle />
                            </div>
                            <span className="text-xs text-zinc-400 font-medium">© 2026 Eng Abdalla</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
