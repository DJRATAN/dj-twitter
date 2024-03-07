
import FeedSection from "./component/FeedSection";
import Sidebar from "./component/Sidebar";
import Widget from "./component/Widget";

export default async function Home() {
  const data = await getServerSideProps();
  const data2 = await getServerSideProps2();
  return (
    <main className="flex min-h-screen mx-auto">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <FeedSection />
      {/* Widgets */}
      {/* {console.log(data2.results)} */}
      <Widget newsResults={data.articles} randomUserResults={data2.results} />
      {/* Modal */}

    </main>
  );
}

// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

async function getServerSideProps() {
  const newsResults = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
  const randomUserResults = await fetch('https://randomuser.me/api/?results=150')
  if (!newsResults.ok) {
    throw new Error("Failed")
  }
  return newsResults.json()
}
async function getServerSideProps2() {
  const randomUserResults = await fetch('https://randomuser.me/api/?results=150')
  if (!randomUserResults.ok) {
    throw new Error("Failed")
  }
  const data = await randomUserResults.json(); // await for the JSON parsing
  // console.log(data);
  return data
}