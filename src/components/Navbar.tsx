'use client'
import { check_session, userLogout } from "@/redux/feature/auth/authAction";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Mic, User, ChevronDown, History, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

// Close on outside click
useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setDropdownOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
  const { user, islogin } = useAppSelector((state)=>state.auth)
  useEffect(()=>{
    dispatch(check_session())
  },[])
  console.log(islogin)
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
             {islogin ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                    >
                      <User size={20} />
                      <ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                        <button
                          onClick={() => { router.push("/history"); setDropdownOpen(false); }}
                          className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <History size={16} />
                          View History
                        </button>

                        <div className="border-t border-gray-100" />

                        <button
                          onClick={() => dispatch(userLogout())}
                          className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>): 
                  (<button onClick={()=>router.push('/login')} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                Get Started
              </button>)}
            </div>
          </div>
        </div>
      </nav>
      </div>
  );
}