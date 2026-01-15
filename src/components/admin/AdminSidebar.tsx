"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, MessageSquare, FileText, Briefcase, LogOut, Menu, X } from "lucide-react";

const links = [
    { href: "/admin-portal-secure", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin-portal-secure/quotes", label: "Quote Requests", icon: FileText },
    { href: "/admin-portal-secure/messages", label: "Contact Messages", icon: MessageSquare },
    { href: "/admin-portal-secure/internships", label: "Internships", icon: Briefcase },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 right-4 z-[60] p-2 bg-slate-900 text-white rounded-lg shadow-lg"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                w-64 bg-slate-900 text-slate-300 min-h-screen flex flex-col fixed left-0 top-0 bottom-0 z-50 transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}>
                <div className="p-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 shrink-0">
                            <Image
                                src="/img/footer_logo_white.png"
                                alt="Triveni Tech"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <span className="text-white font-bold text-lg block leading-none">Triveni Tech</span>
                            <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">Admin Portal</span>
                        </div>
                    </div>
                </div>

                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                    {links.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "hover:bg-slate-800 hover:text-white"
                                    }`}
                            >
                                <Icon size={20} />
                                <span className="font-medium">{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Exit to Website</span>
                    </Link>
                </div>
            </aside>
        </>
    );
}
