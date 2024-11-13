import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link className="text-white flex items-center gap-2 mb-4" href="#">
              <svg
                className=" w-6 h-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="18" rx="2" width="18" x="3" y="3" />
                <path d="M7 7h10" />
                <path d="M7 12h10" />
                <path d="M7 17h10" />
              </svg>
              <span className="font-semibold">Jobpilot</span>
            </Link>
            <p className="mb-2">Call now: (319) 555-0115</p>
            <p className="text-sm">
              6391 Elgin St. Celina, Delaware 10299, New York, United States of America
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Candidate */}
          <div>
            <h3 className="font-semibold text-white mb-4">Candidate</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Browse Employers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Candidate Dashboard</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Saved Jobs</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="font-semibold text-white mb-4">Employers</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Browse Candidates</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Employers Dashboard</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Applications</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">Faqs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-zinc-800">
          <p className="text-sm mb-4 md:mb-0">© 2021 Jobpilot - Job Portal. All rights Reserved</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <span className="sr-only">YouTube</span>
              <Youtube className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}