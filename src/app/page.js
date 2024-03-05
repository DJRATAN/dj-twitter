import FeedSection from "./component/FeedSection";
import Sidebar from "./component/Sidebar";

// import './globals.css'
export default function Home() {
  return (
    <main className="flex min-h-screen max-w-7xl mx-auto">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <FeedSection />
      {/* Widgets */}
      {/* Modal */}

    </main>
  );
}
