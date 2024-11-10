import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Find a Job", href: "/find-a-job" },
    { name: "Find Employers", href: "/find-employers" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Job Alerts", href: "/job-alerts" },
    { name: "Customer Support", href: "/customer-support" }
  ];

  return (
    <header className="">
      <nav className="w-full">
        <div className="flex gap-5">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
