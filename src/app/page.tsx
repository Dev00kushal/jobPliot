import { Card, CardContent } from "@/components/ui/card";
import {
  Firstcategories,
  popularVacancies,
  Secondcategories,
  stats,
  steps,
} from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Find a job that suits your interest & skills.
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Aliquam vitae turpis in diam convallis finibus in at risus.
              Nullam in scelerisque leo, eget sollicitudin velit tincidunt.
            </p>
            <div className="flex flex-wrap gap-2">
              {Firstcategories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/find_a_job.svg"
              alt="Job Search Illustration"
              width={500}
              height={500}
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold">{stat.number}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Popular Vacancies */}
    <section className="container px-4 md:px-6 lg:px-8 mx-auto py-12 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Most Popular Vacancies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {popularVacancies.map((vacancy) => (
          <div key={vacancy.title} className="group">
            <Link
              href="#"
              className="block p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <h3 className="font-semibold group-hover:text-primary">
                {vacancy.title}
              </h3>
              <p className="text-sm text-muted-foreground">{vacancy.count}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>

    {/* How it Works */}
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          How jobpilot works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                {step.icon}
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Popular Categories */}
    <section className="container px-4 md:px-6 lg:px-8 mx-auto py-12 md:py-24">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 sm:mb-0">Popular category</h2>
        <Link
          href="#"
          className="text-primary hover:text-primary/90 flex items-center gap-2 text-sm font-medium"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Secondcategories.map((category) => (
          <Card
            key={category.title}
            className="group hover:border-primary transition-colors"
          >
            <CardContent className="p-4 md:p-6">
              <category.icon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="font-semibold group-hover:text-primary">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </>

  );
}
