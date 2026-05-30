'use client'
import { Mic } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter()
  return (
    <div className="size-full bg-slate-50">
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TranscribeX
              </span>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center gap-8">
              <a
                href="/"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Home
              </a>
              <a
              href="/transcript"
              className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Transcript
              </a>
              <button onClick={()=>router.push('/login')} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      </div>
  );
}