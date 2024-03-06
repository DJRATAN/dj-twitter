
import FeedSection from "./component/FeedSection";
import Sidebar from "./component/Sidebar";
import Widget from "./component/Widget";

// import './globals.css'
export default async function Home() {
  const data = await getServerSideProps();
  return (
    <main className="flex min-h-screen mx-auto">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <FeedSection />
      {/* Widgets */}
      <Widget newsResults={data.articles} />
      {/* Modal */}

    </main>
  );
}

// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

async function getServerSideProps() {
  const newsResults = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
  if (!newsResults.ok) {
    throw new Error("Failed")
  }
  return newsResults.json()
}