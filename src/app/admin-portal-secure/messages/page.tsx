import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import { MessageSquare, Calendar, Mail, User } from "lucide-react";

export const revalidate = 0;

export default async function MessagesPage() {
    const { data: messages, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        return (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                Error loading messages: {error.message}
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Contact Messages</h1>
                    <p className="text-slate-500 mt-2">View inquiries sent via the contact form.</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 shadow-sm">
                    Total: {messages?.length || 0}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {messages?.length === 0 ? (
                    <div className="bg-white p-12 text-center text-slate-500 rounded-xl border border-slate-200">
                        No messages found.
                    </div>
                ) : (
                    messages?.map((msg) => (
                        <div key={msg.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">{msg.name}</h3>
                                        <a href={`mailto:${msg.email}`} className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-sm">
                                            <Mail size={14} />
                                            {msg.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full self-start">
                                    <Calendar size={12} />
                                    {format(new Date(msg.created_at), 'MMMM dd, yyyy • hh:mm a')}
                                </div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-slate-700 leading-relaxed whitespace-pre-wrap">
                                {msg.message}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
