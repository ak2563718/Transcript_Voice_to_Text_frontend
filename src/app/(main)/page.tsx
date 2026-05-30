import { Mic, Clock, FileText, Zap } from "lucide-react"

function Home() {
  return (
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-2xl mb-6">
            <Mic className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Welcome to TranscribeX
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real-time voice transcription powered by websockets. Speak naturally and watch your words appear instantly.
          </p>
        </div>

        {/* Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Live Transcription</h3>
              <p className="text-slate-600 text-sm">
                See your speech converted to text instantly as you speak using real-time websocket connection.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">History & Recordings</h3>
              <p className="text-slate-600 text-sm">
                Login to access your transcript history and saved recordings anytime, anywhere.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Export Options</h3>
              <p className="text-slate-600 text-sm">
                Download your transcripts in multiple formats including TXT, DOCX, and PDF.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">How to Use</h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Start Recording</h3>
                <p className="text-slate-600 text-sm">
                  Click "Get Started" and allow microphone access. Start speaking to begin live transcription.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Watch Text Appear</h3>
                <p className="text-slate-600 text-sm">
                  Your speech is transcribed in real-time through websocket connection. See your words appear as you speak.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Save & Access History</h3>
                <p className="text-slate-600 text-sm">
                  Login to save transcripts automatically. Access your complete transcript history and recordings anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-lg font-semibold">
            <a href="/transcript">
              Start Transcribing Now
            </a>
          </button>
        </div>
      </div>
  )
}

export default Home