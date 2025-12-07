import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import "leaflet/dist/leaflet.css";

export const metadata = {
  title: "Tour Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
