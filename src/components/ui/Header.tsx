'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menu, PhoneCall, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links = [
  { name: "Home", href: "/" },
  { name: "Find Job", href: "/job" },
  { name: "Employers", href: "/find-a-employee" },
  { name: "Pricing Plans", href: "/find-a-pricing-plan" },
  { name: "Custom Supports", href: "/find-a-support" },
]

const countries = [
  { code: "EN", name: "English", flag: "/us.svg" },
  { code: "NP", name: "Nepal", flag: "/np.svg" },
]

export default function Header() {
  const pathName = usePathname()
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCountryChange = (value: string) => {
    const selected = countries.find((country) => country.code === value)
    if (selected) {
      setSelectedCountry(selected)
    }
  }

  return (
    <div>
      <nav className="bg-customGray py-2 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-customNavtext">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          <div className={`w-full lg:flex lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
            {links.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`block lg:inline-block px-2 py-2 lg:py-0 border-b-2 ${
                  pathName === item.href
                    ? "border-customBlue text-customBlue"
                    : "border-transparent text-customNavtext"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center mt-4 lg:mt-0">
            <PhoneCall className="scale-75" />
            <span className="text-customNavtext ml-2 text-sm lg:text-base">+1-202-555-0178</span>

            <Select value={selectedCountry.code} onValueChange={handleCountryChange}>
              <SelectTrigger className="w-[125px] ml-4 lg:ml-6">
                <SelectValue>
                  <div className="flex items-center">
                    <Image
                      src={selectedCountry.flag}
                      alt={selectedCountry.name}
                      width={24}
                      height={16}
                      className="mr-2"
                    />
                    <span className="hidden lg:inline">{selectedCountry.name}</span>
                    <span className="lg:hidden">{selectedCountry.code}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    <div className="flex items-center">
                      <Image
                        src={country.flag}
                        alt={country.name}
                        width={24}
                        height={16}
                        className="mr-2"
                      />
                      <span>{country.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>

      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="#" className="flex items-center space-x-2">
              <span className="text-xl font-semibold">Jobpilot</span>
            </Link>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <button className="text-customBlue border px-2 py-1 lg:p-4 rounded-md border-customBorderLight text-sm lg:text-base">
                Sign In
              </button>
              <button className="bg-customBlue px-2 py-1 lg:p-4 text-white rounded-md text-sm lg:text-base">
                Post A Job
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}