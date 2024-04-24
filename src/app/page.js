import Card from "/components/Card";
import Header from "/components/Header";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-12 flex flex-col justify-center pt-18 items-center gap-10 pt-20">
        <div className="flex gap-10">
          <div className="flex w-80 h-100">
            <Card
              title="Document Submission Quality Control"
              href="/1"
              imgSrc="/documentQuality.png"
              
              className="border-2 border-black border-solid p-4 rounded-lg text-center object-cover "
            />
          </div>
          <div className="flex  w-80 h-100">
            <Card
              title="Order Taking and Creation"
              href="/2"
              imgSrc="/speechBubble.png"
              className="border-2 border-black border-solid p-4 rounded-lg text-center object-cover"
            />
          </div>
          <div className="flex w-80 h-100">
            <Card
              title="Automated Document Requests"
              href="/3"
              imgSrc="/documentRequests.png"
              className="border-2 border-black border-solid p-4 rounded-lg text-center object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
