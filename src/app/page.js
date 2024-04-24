import Card from "/components/Card";
import Header from "/components/Header";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-12 sm:p-18 md:p-18 lg:p-28 flex flex-col justify-center pt-18 items-center h-full sm:gap-10 md:gap-12 lg:gap-20 pt-20">
        <div className="flex gap-10">
          <div className="flex gap-10 w-64 h-auto">
            <Card
              title="Project 1"
              href="/1"
              imgSrc="/documentQuality.png"
              description="Document Submission Quality Control"
              className="border-2 border-black border-solid p-4 rounded-lg text-center object-cover w-100 h-100"
            />
          </div>
          <div className="flex h-auto">
            <Card
              title="Project 2"
              href="/2"
              imgSrc="/speechBubble.png"
              description="Order Taking and Creation"
              className="border-2 border-black border-solid p-4 rounded-lg text-center object-cover"
            />
          </div>
          <div className="flex w-64 h-auto">
            <Card
              title="Project 3"
              href="/3"
              imgSrc="/documentRequests.png"
              description="Automated Document Requests"
              className="border-2 border-black border-solid p-4 rounded-lg text-center object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
