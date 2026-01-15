import { ArrowRight, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ServiceCard Props
 * @property {React.ReactNode} icon - Lucide-react icon component to display
 * @property {string} title - Title of the service
 * @property {string} description - Brief description of the service
 * @property {string} [details] - Detailed description for expanded view
 * @property {boolean} [isExpanded] - Whether the card is currently expanded
 * @property {() => void} [onToggle] - Callback when toggle button is clicked
 * @property {string} [className] - Optional additional CSS classes
 */
interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    details?: string;
    isExpanded?: boolean;
    onToggle?: () => void;
    className?: string;
}

/**
 * ServiceCard Component
 *
 * A reusable card component for displaying a service.
 * Includes hover effects and expandable details.
 */
export default function ServiceCard({ icon, title, description, details, isExpanded = false, onToggle, className }: ServiceCardProps) {

    return (
        <div className={cn("group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden", className)}>
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-slate-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>

                <div className="mt-auto">
                    <AnimatePresence>
                        {isExpanded && details && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 border-t border-slate-100 pt-4">
                                    {details}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={onToggle}
                        className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all group-hover:text-primary/80 focus:outline-none"
                    >
                        {isExpanded ? (
                            <>
                                Show Less <ChevronUp size={16} className="ml-1" />
                            </>
                        ) : (
                            <>
                                Learn More <ArrowRight size={16} className="ml-1" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
