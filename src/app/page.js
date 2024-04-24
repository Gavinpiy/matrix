import Card from "/components/Card";

export default function Home() {
  return (
    <main className="p-12 sm:p-18 md:p-18 lg:p-28 flex flex-col justify-center pt-18 items-center h-full sm:gap-10 md:gap-12 lg:gap-20 pt-20">
      <h1>Homepage</h1>
      <div className="flex gap-10">
        <div className="flex gap-10">
          <Card
            title="Project 1"
            href="/1"
            imgSrc="/placeholder.jpg"
            description="Applicant Document Submission Quality Control"
            className="border-2 border-black border-solid p-4 rounded-lg text-center"
          />
        </div>
        <div className="flex gap-10">
          <Card
            title="Project 2"
            href="/2"
            imgSrc="/placeholder.jpg"
            description="Order Taking and Creation Through Conversational AI"
            className="border-2 border-black border-solid p-4 rounded-lg text-center"
          />
        </div>
        <div className="flex gap-10">
          <Card
            title="Project 3"
            href="/3"
            imgSrc="/placeholder.jpg"
            description="Automated Document Requests"
            className="border-2 border-black border-solid p-4 rounded-lg text-center"
          />
        </div>
      </div>
    </main>
  );
}
