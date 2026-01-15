import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import { FileText, Calendar, Building, Phone } from "lucide-react";

export const revalidate = 0;

export default async function QuotesPage() {
    const { data: quotes, error } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        return (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                Error loading quotes: {error.message}
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Quote Requests</h1>
                    <p className="text-slate-500 mt-2">Manage and view all incoming project estimates.</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 shadow-sm">
                    Total: {quotes?.length || 0}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Client Details</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Project Scope</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {quotes?.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                                        No quote requests found.
                                    </td>
                                </tr>
                            ) : (
                                quotes?.map((quote) => (
                                    <tr key={quote.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                <Calendar size={14} />
                                                {format(new Date(quote.created_at), 'MMM dd, yyyy')}
                                            </div>
                                            <div className="text-xs text-slate-400 pl-6 mt-1">
                                                {format(new Date(quote.created_at), 'hh:mm a')}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-slate-900">{quote.name}</div>
                                            <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                                                <Building size={12} />
                                                {quote.organization}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                                                {quote.service}
                                            </div>
                                            <div className="text-sm text-slate-600">
                                                Complexity: <span className="font-medium text-slate-800">{quote.complexity}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href={`tel:${quote.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-sm font-medium">
                                                <Phone size={14} />
                                                {quote.phone}
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
