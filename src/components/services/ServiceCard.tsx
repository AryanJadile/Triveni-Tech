import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href?: string;
    className?: string;
}

export default function ServiceCard({ icon, title, description, href = "#", className }: ServiceCardProps) {
    return (
        <div className={cn("group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden", className)}>
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
                <Link href={href} className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all group-hover:text-primary/80">
                    Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
            </div>
        </div>
    );
}
