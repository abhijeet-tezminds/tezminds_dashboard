import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Sidebar />
    </main>
  );
}