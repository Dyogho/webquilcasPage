import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div>
                <main className="">
                    {children}
                </main>
            </div>
            <Footer />

        </>
    );
}
