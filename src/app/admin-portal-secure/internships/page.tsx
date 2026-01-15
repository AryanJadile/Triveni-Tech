import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import { Briefcase, Calendar, Download, Mail, Phone, School, User } from "lucide-react";

export const revalidate = 0;

export default async function InternshipsPage() {
    const { data: applications, error } = await supabase
        .from('internship_applications')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        return (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                Error loading applications: {error.message}
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Internship Applications</h1>
                    <p className="text-slate-500 mt-2">Review applications from aspiring interns.</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 shadow-sm">
                    Total: {applications?.length || 0}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {applications?.length === 0 ? (
                    <div className="bg-white p-12 text-center text-slate-500 rounded-xl border border-slate-200">
                        No applications found.
                    </div>
                ) : (
                    applications?.map((app) => (
                        <div key={app.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                                        <Briefcase size={24} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-slate-900 text-lg">{app.name}</h3>
                                            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-indigo-100 text-indigo-700">
                                                {app.domain}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                            <div className="flex items-center gap-1.5">
                                                <School size={14} />
                                                {app.college}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} />
                                                Applied on {format(new Date(app.created_at), 'MMM dd, yyyy')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 self-start">
                                    {app.resume_url && (
                                        <a
                                            href={app.resume_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
                                        >
                                            <Download size={16} />
                                            Download Resume
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Contact Details</h4>
                                    <div className="space-y-2">
                                        <a href={`mailto:${app.email}`} className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-sm">
                                            <Mail size={16} className="text-slate-400" />
                                            {app.email}
                                        </a>
                                        <a href={`tel:${app.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-sm">
                                            <Phone size={16} className="text-slate-400" />
                                            {app.phone}
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Cover Letter</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                                        {app.cover_letter || "No cover letter provided."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
