import { FileText, Search, Settings, User, Upload, Home, FileAudio } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <FileAudio className="size-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">TranscriptHub</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all">
                <Home className="size-4" />
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all">
                <FileText className="size-4" />
                <span>My Transcripts</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all">
                <Upload className="size-4" />
                <span>Upload</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
              <Search className="size-4 text-white/70" />
              <input
                type="text"
                placeholder="Search transcripts..."
                className="bg-transparent border-none outline-none text-white placeholder-white/50 w-48"
              />
            </div>

            <button className="p-2.5 rounded-lg hover:bg-white/10 transition-colors lg:hidden">
              <Search className="size-5 text-white" />
            </button>

            <button className="p-2.5 rounded-lg hover:bg-white/10 transition-colors">
              <Settings className="size-5 text-white" />
            </button>

            <button className="p-2.5 rounded-lg bg-white/20 hover:bg-white/30 transition-colors">
              <User className="size-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
