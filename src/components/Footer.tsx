export default function Footer() {
  return (
    <div className="size-full flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        {/* Your main content goes here */}
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">TranscribX</span>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-600">Voice to Text Transcription</span>
          </div>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} TranscribX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}