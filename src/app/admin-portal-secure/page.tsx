import { supabase } from "@/lib/supabase";
import { Users, MessageSquare, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";

export const revalidate = 0; // Ensure fresh data on every visit

async function getStats() {
    const { count: quotesCount } = await supabase.from('quote_requests').select('*', { count: 'exact', head: true });
    const { count: messagesCount } = await supabase.from('contact_messages').select('*', { count: 'exact', head: true });
    const { count: appsCount } = await supabase.from('internship_applications').select('*', { count: 'exact', head: true });

    return {
        quotes: quotesCount || 0,
        messages: messagesCount || 0,
        applications: appsCount || 0,
    };
}

export default async function AdminDashboard() {
    const stats = await getStats();

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500 mt-2">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Link href="/admin-portal-secure/quotes" className="block group">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group-hover:border-primary/20">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Users size={24} />
                            </div>
                            <div className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                <TrendingUp size={12} /> Live
                            </div>
                        </div>
                        <h3 className="text-slate-500 text-sm font-medium mb-1">Quote Requests</h3>
                        <p className="text-3xl font-bold text-slate-900">{stats.quotes}</p>
                    </div>
                </Link>

                <Link href="/admin-portal-secure/messages" className="block group">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group-hover:border-primary/20">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <MessageSquare size={24} />
                            </div>
                            <div className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                <TrendingUp size={12} /> Live
                            </div>
                        </div>
                        <h3 className="text-slate-500 text-sm font-medium mb-1">Contact Messages</h3>
                        <p className="text-3xl font-bold text-slate-900">{stats.messages}</p>
                    </div>
                </Link>

                <Link href="/admin-portal-secure/internships" className="block group">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group-hover:border-primary/20">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                <Briefcase size={24} />
                            </div>
                            <div className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                <TrendingUp size={12} /> Live
                            </div>
                        </div>
                        <h3 className="text-slate-500 text-sm font-medium mb-1">Internship Applications</h3>
                        <p className="text-3xl font-bold text-slate-900">{stats.applications}</p>
                    </div>
                </Link>
            </div>

            {/* Recent Activity Placeholder or Quick Actions */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center">
                <p className="text-slate-500">Select a category from the sidebar or above to view details.</p>
            </div>
        </div>
    );
}
