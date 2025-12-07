import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F6] text-[#1A1A1A]">
      
      <Header />

      {/* отступ = высоте хедера */}
      <div className="h-[64px]" />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
