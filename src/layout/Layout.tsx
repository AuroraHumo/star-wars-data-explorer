import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div  className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-6 py-10">{children}</main>
    </div>
  );
}
