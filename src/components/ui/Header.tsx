"use client";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const links = [
  { name: "Home", href: "/" },
  { name: "Find Job", href: "/job" },
  { name: "Employers", href: "/find-a-employee" },
  { name: "Pricing Plans", href: "/find-a-pricing-plan" },
  { name: "Custom Supports", href: "/find-a-support" },
];

const countries = [
  { code: "EN", name: "English" },
  { code: "NP", name: "Nepal" },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <div className="">
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

        <div className="flex items-center ml-auto gap-1">
          <PhoneCall className="scale-75" />
          <span className="text-customNavtext ml-2">+1-202-555-0178</span>

          <Select>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => {
                return (
                  <SelectItem key={country.code} value={country.code}>
                    <div className="flex items-center">{country.name}</div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </nav>

      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="#" className="flex items-center space-x-2">
              <span className="text-xl font-semibold">Jobpilot</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="text-customBlue border p-4 rounded-md border-customBorderLight">
                Sign In
              </button>
              <button className="bg-customBlue p-4 text-white rounded-md">
                Post A Jobs
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
