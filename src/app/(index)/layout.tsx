import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <section className="container mx-auto p-4">
        <Navbar />
        {children}
      </section>
    </main>
  );
}
