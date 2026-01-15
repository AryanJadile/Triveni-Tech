import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = {
    title: "Admin Portal - Triveni Tech",
    description: "Secure Admin Portal for managing web submissions",
    robots: "noindex, nofollow", // Prevent indexing
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <main className="flex-1 ml-0 md:ml-64 p-4 md:p-8 lg:p-12 overflow-y-auto pt-16 md:pt-12">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
