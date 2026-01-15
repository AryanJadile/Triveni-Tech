"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    image: string;
    link?: string;
}

export default function ProjectCard({ title, category, description, image, link = "#" }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 py-1 px-3 rounded-full">
                        {category}
                    </span>
                    <Link
                        href={link}
                        className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors"
                    >
                        <ArrowUpRight size={18} />
                    </Link>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
