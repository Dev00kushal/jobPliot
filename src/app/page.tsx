import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {

  const stats = [
    { number: "175,324", label: "Live Job" },
    { number: "97,354", label: "Companies" },
    { number: "38,471,54", label: "Candidates" },
    { number: "7,532", label: "New Jobs" },
  ]
  const categories = ["Designer", "Programming", "Digital Marketing", "Video", "Animation"]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 px-[120px]   ">
    <div className=" container flex justify-between ml-[18  px]">
        
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-40 items-center ">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Find a job that suits your interest & skills.
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit tincidunt.
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
              key={category}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
            <Image
              src="find_a_job.svg"
              alt="Job Search Illustration"
              width={500}
              height={500}
              className="mx-auto aspect-square object-contain"
            />
       
      </div>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="space-y-2 text-center">
                <h3 className="text-3xl font-bold">{stat.number}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
  </section>
  );
}
