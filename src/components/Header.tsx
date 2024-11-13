"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Find Job", href: "/job" },
  { name: "Employers", href: "/find-a-employee" },
  { name: "Pricing Plans", href: "/find-a-pricing-plan" },
  { name: "Custom Supports", href: "/find-a-support" },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <nav className="flex items-center px-80 bg-customGray py-2">
      {links.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`px-2 border-b-2 ${
            pathName === item.href
              ? "border-customBlue text-customBlue"
              : "border-transparent text-customNavtext"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
