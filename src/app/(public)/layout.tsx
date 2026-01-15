import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButton from "@/components/layout/FloatingContactButton";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-[72px]">
                {children}
            </main>
            <FloatingContactButton />
            <Footer />
        </>
    );
}
